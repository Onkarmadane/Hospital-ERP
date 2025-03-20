import React from 'react';

function Heading({ children, className }) {
  return (
    <h1
      className={`lg:text-lg md:text-lg text-text font-semibold text-center flex-1 sm:text-sm sm:text-center ${className}`}
    >
      {children}
    </h1>
  );
}

export default Heading;