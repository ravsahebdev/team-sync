import { Check, ChevronDown } from "lucide-react";
import { useEffect, useId, useRef } from "react";

const CustomDropdown = ({
  value,
  onChange,
  options,
  isOpen,
  onToggle,
  onClose,
}) => {
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);
  const listboxRef = useRef(null);
  const dropdownId = useId();

  const selectedOption = options.find((option) => option.value === value);

  // Close dropdown on outside click
  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (event) => {
      if (!dropdownRef.current?.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  // Focus selected option when dropdown opens
  useEffect(() => {
    if (!isOpen) return;

    const selectedElement = listboxRef.current?.querySelector(
      '[aria-selected="true"]',
    );

    const firstOption = listboxRef.current?.querySelector('[role="option"]');

    (selectedElement ?? firstOption)?.focus();
  }, [isOpen]);

  // Keyboard navigation
  const handleKeyDown = (event) => {
    const items = listboxRef.current?.querySelectorAll('[role="option"]');

    if (!items?.length) return;

    const currentIndex = Array.from(items).indexOf(document.activeElement);

    let nextIndex = currentIndex;

    switch (event.key) {
      case "Escape":
        event.preventDefault();
        onClose();
        triggerRef.current?.focus();
        return;

      case "ArrowDown":
        event.preventDefault();
        nextIndex = (currentIndex + 1) % items.length;
        break;

      case "ArrowUp":
        event.preventDefault();
        nextIndex = (currentIndex - 1 + items.length) % items.length;
        break;

      case "Home":
        event.preventDefault();
        nextIndex = 0;
        break;

      case "End":
        event.preventDefault();
        nextIndex = items.length - 1;
        break;

      case "Enter":
      case " ":
        event.preventDefault();

        if (currentIndex !== -1) {
          items[currentIndex].click();
        }
        return;

      default:
        return;
    }

    items[nextIndex].focus();
  };

  const handleSelect = (optionValue) => {
    onChange(optionValue);
    onClose();
    triggerRef.current?.focus();
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        ref={triggerRef}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls={dropdownId}
        className="flex items-center justify-between gap-3 min-w-36 rounded-lg border border-(--border-color) bg-(--bg-surface) px-3 py-[.65rem] text-(--text-secondary) hover:bg-(--bg-hover)"
      >
        <span>{selectedOption?.label ?? "Select option"}</span>

        <ChevronDown
          size={16}
          aria-hidden="true"
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div
          id={dropdownId}
          ref={listboxRef}
          role="listbox"
          aria-label="Select an option"
          onKeyDown={handleKeyDown}
          className="absolute left-0 top-full z-50 mt-2 min-w-full overflow-hidden rounded-[5px] border border-(--table-border) bg-(--bg-surface) shadow-xl"
        >
          {options.map((option, index) => {
            const isSelected = value === option.value;

            return (
              <div
                key={option.value}
                id={`${dropdownId}-option-${index}`}
                role="option"
                aria-selected={isSelected}
                tabIndex={-1}
                onClick={() => handleSelect(option.value)}
                className={`flex w-full cursor-pointer items-center justify-between gap-4 px-3 py-2.5 rounded text-left text-sm transition-colors focus:outline-none focus:bg-(--bg-hover) ${
                  isSelected
                    ? "bg-(--bg-hover) text-(--text-primary)"
                    : "text-(--text-secondary) hover:bg-(--bg-hover)/50"
                }`}
              >
                {option.label}

                {isSelected && <Check size={15} aria-hidden="true" />}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
