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
  bgColor = '',
  hoverBgColor = '',
  border = '',
  hoverBorder = '',
  shadow = 'hover:shadow-lg',
  disabledStyles = 'opacity-50 cursor-not-allowed',
  ...props
}) => {
  const baseStyles = 'px-4 py-2 rounded focus:outline-none flex items-center gap-3 transition-all duration-300';

  const variants = {
    primary: `bg-primary text-white border-none outline-none`,
    secondary: `bg-gray-300 text-black border-none outline-none`,
  };

  const hoverVariants = {
    primary: 'lg:hover:bg-primary-dark',
    secondary: 'lg:hover:bg-gray-400',
  };

  const sizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

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

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  loading: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
  bgColor: PropTypes.string,
  hoverBgColor: PropTypes.string,
  border: PropTypes.string,
  hoverBorder: PropTypes.string,
  shadow: PropTypes.string,
  disabledStyles: PropTypes.string,
};

export default Button;