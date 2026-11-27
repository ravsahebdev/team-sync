import SearchInput from "../../../../../../shared/ui/components/SearchInput";

const EmployeeSearchInput = ({ search, setSearch }) => {
  return (
    <SearchInput
      Inputplaceholder="Search by name..."
      searchValue={search}
      onChangeHandler={setSearch}
    />
  );
};

export default EmployeeSearchInput;
