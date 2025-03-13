const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  loading = false, 
  children, 
  onClick, 
  type,
  className = '', 
  ...props 
}) => {
  const baseStyles = 'px-4 py-2 rounded focus:outline-none flex items-center gap-3';
  const variants = {
    primary: ' bg-primary  hover:bg-primary-dark border-none outline-none hover:shadow-lg duration-100',
    secondary: 'bg-gray-300 text-black hover:bg-gray-400',
  };
  const sizes = { 
    sm: 'text-sm', 
    md: 'text-base', 
    lg: 'text-lg' 
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${loading ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      onClick={onClick}
      disabled={loading}
      {...props}
      type={type || "button"}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
};

export default Button;