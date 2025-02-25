const SecondaryButton = ({ children, onClick, className = "" }) => {
    return (
      <button
        className={`btn bg-background border-2 px-8 border-brown text-default rounded-3xl hover:bg-brown  ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  
  export default SecondaryButton;
  