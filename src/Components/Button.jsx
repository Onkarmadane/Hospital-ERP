import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  children,
  onClick,
  type = 'button',
  className = '',
  textColor = 'text-white', // Default text color
  bgColor = '', // Allow custom background color
  hoverBgColor = '', // Allow custom hover background color
  border = '', // Allow custom border
  hoverBorder = '', // Allow custom hover border
  shadow = 'hover:shadow-lg', // Default shadow on hover
  disabledStyles = 'opacity-50 cursor-not-allowed', // Default disabled styles
  ...props
}) => {
  // Base styles for all buttons (padding, rounded corners, flex layout, etc.)
  const baseStyles = 'px-4 py-2 rounded focus:outline-none flex items-center gap-3 transition-all duration-300';

  // Variant styles (default background, text, etc.)
  const variants = {
    primary: `bg-primary ${textColor} border-none outline-none`,
    secondary: `bg-gray-300 text-black border-none outline-none`,
  };

  // Hover styles for variants (if not overridden by hoverBgColor or hoverBorder)
  const hoverVariants = {
    primary: 'lg:hover:bg-primary-dark',
    secondary: 'lg:hover:bg-gray-400',
  };

  // Size styles (text size)
  const sizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  // Combine all styles
  const combinedStyles = `
    ${baseStyles}
    ${variants[variant] || ''} 
    ${bgColor || ''} 
    ${border || ''} 
    ${sizes[size]} 
    ${loading ? disabledStyles : ''} 
    ${!loading && !hoverBgColor ? hoverVariants[variant] : hoverBgColor} 
    ${!loading && !hoverBorder ? '' : hoverBorder} 
    ${!loading ? shadow : ''} 
    ${className}
  `.trim();

  return (
    <button
      className={combinedStyles}
      onClick={onClick}
      disabled={loading}
      type={type}
      {...props}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
};

// PropTypes for better type checking and documentation
Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  loading: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
  hoverBgColor: PropTypes.string,
  border: PropTypes.string,
  hoverBorder: PropTypes.string,
  shadow: PropTypes.string,
  disabledStyles: PropTypes.string,
};

export default Button;