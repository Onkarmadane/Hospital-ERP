const SecondaryButton = ({ children, onClick, className = "" }) => {
    return (
      <button
        className={`btn border-2 px-8  text-default hover:shadow-lg  ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  
  export default SecondaryButton;
  