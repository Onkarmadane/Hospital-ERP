import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  type = 'text',
  name,
  value,
  onChange,
  placeholder = '',
  label,
  id,
  className = '',
  disabled = false,
  required = false,
  error,
  variant = 'primary',
  size = 'medium',
  iconLeft,
  iconRight,
  ...props
}) => {
  // Base styles
  const baseStyles = 'w-full p-3 border rounded-lg focus:outline-none transition-all duration-500';

  // Variant styles
  const variantStyles = {
    primary: 'border-primary focus:border-primary focus:ring-2 focus:ring-primary bg-white',
    secondary: 'border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary bg-gray-50',
    minimal: 'border-transparent focus:border-gray-200 bg-transparent',
  };

  // Size styles
  const sizeStyles = {
    small: 'p-2 text-sm',
    medium: 'p-3 text-base',
    large: 'p-4 text-lg',
  };

  // Combined input classes
  const inputClasses = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${error ? 'border-red-500 focus:ring-red-500' : ''}
  `.trim();

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={id}
          className={`text-sm font-medium ${
            error ? 'text-red-500' : 'text-gray-700'
          }`}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        {iconLeft && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {iconLeft}
          </span>
        )}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          id={id}
          className={inputClasses}
          disabled={disabled}
          required={required}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${id}-error` : undefined}
          {...props}
        />
        {iconRight && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            {iconRight}
          </span>
        )}
      </div>
      {error && (
        <span
          id={`${id}-error`}
          className="text-sm text-red-500 mt-1"
        >
          {error}
        </span>
      )}
    </div>
  );
};

// PropTypes for type checking
Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  error: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'minimal']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
};

export default Input;