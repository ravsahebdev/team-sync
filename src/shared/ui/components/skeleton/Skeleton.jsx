const Skeleton = ({ className = "" }) => {
  return <div className={`skeleton-shimmer ${className}`} aria-hidden="true" />;
};

export default Skeleton;
