const Button = ({ variant = 'primary', size = 'md', loading = false, children, onClick, ...props }) => {
    const baseStyles = 'px-4 py-2 rounded focus:outline-none';
    const variants = {
      primary: 'bg-blue-500 text-white hover:bg-blue-600',
      secondary: 'bg-gray-300 text-black hover:bg-gray-400',
    };
    const sizes = { sm: 'text-sm', md: 'text-base', lg: 'text-lg' };
    return (
      <button
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${loading ? 'opacity-50' : ''}`}
        onClick={onClick}
        disabled={loading}
        {...props}
      >
        {loading ? 'Loading...' : children}
      </button>
    );
  };
  // Usage: <Button variant="secondary" size="lg" onClick={handleClick}>Click Me</Button>