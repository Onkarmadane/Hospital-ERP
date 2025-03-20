// // // import React, { createContext, useState, useEffect } from 'react';

// // // const ThemeContext = createContext();

// // // export const ThemeProvider = ({ children }) => {
// // //   const [theme, setTheme] = useState('bumblebee'); // Default to light mode

// // //   useEffect(() => {
// // //     document.documentElement.setAttribute('data-theme', theme);
// // //   }, [theme]);

// // //   const toggleTheme = () => {
// // //     setTheme(theme === 'dark' ? 'bumblebee' : 'dark');
// // //   };
// // //   return (
// // //     <ThemeContext.Provider value={{ theme, toggleTheme }}>
// // //       {children}
// // //     </ThemeContext.Provider>
// // //   );
// // // };

// // // export default ThemeContext;


// // import React, { createContext, useState, useEffect } from 'react';

// // const ThemeContext = createContext();

// // export const ThemeProvider = ({ children }) => {
// //   const [theme, setTheme] = useState('light'); // Default to light mode

// //   useEffect(() => {
// //     document.documentElement.setAttribute('data-theme', theme);
// //   }, [theme]);

// //   const toggleTheme = () => {
// //     setTheme(theme === 'blackDark' ? 'light' : 'blackDark');
// //   };

// //   return (
// //     <ThemeContext.Provider value={{ theme, toggleTheme }}>
// //       {children}
// //     </ThemeContext.Provider>
// //   );
// // };

// // export default ThemeContext;

// // ThemeContext.js
// import React, { createContext, useState, useEffect } from 'react';

// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   // Initialize theme from localStorage, default to 'white' if not found
//   const [theme, setTheme] = useState(() => {
//     const savedTheme = localStorage.getItem('theme');
//     return savedTheme || 'white'; // Fallback to 'white' if no saved theme
//   });

//   // Persist theme to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem('theme', theme);
//     // Optionally apply theme to document for CSS
//     document.documentElement.setAttribute('data-theme', theme);
//   }, [theme]);

//   // Toggle between 'blackDark' and 'white'
//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === 'blackDark' ? 'white' : 'blackDark'));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export default ThemeContext;

// ThemeContext.js
import React, { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'white'; // Default to 'white'
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    // Apply theme to document root for CSS to pick up
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'blackDark' ? 'white' : 'blackDark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;