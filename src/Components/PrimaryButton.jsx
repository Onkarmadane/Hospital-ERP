const PrimaryButton = ({ children, onClick, className = "", disabled, style, tabIndex, type }) => {
  return (
    <button
      className={`px-8 text-white duration-100 border border-1 hover:shadow-lg flex items-center gap-3 p-2 py-2 bg-primary  rounded hover:bg-primary-dark ${className}`}
      onClick={onClick}
      disabled={disabled}
      tabIndex={tabIndex || 0} // Default to 0 if not provided
      role="button"
      type={type || "button"} // Default to "button" if not provided
    >
      {children}
    </button>
  );
};

export default PrimaryButton;