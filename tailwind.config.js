// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         primary: "var(--primary)",
//         secondary: "var(--secondary)",
//         background: "var(--background)",
//         text: "var(--text)",
//       },
//     },
//   },
//   plugins: [require('daisyui')],
//   daisyui: {
//     themes: [
//       {
//         mytheme: { // You can name this whatever you like
//           "base-100": "#ffffff", // Set base-100 to white
//           // Optionally override other colors if needed
//           "primary": "#1d4ed8",
//           "secondary": "#9333ea",
//           // ... other colors
//         },
//       },
//     ], // Include only the themes you want
//   },
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        background: "var(--background)",
        text: "var(--text)",
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    theme: {
      extend: {
        colors: {
          primary: "var(--primary)",
          secondary: "var(--secondary)",
          background: "var(--background)",
          text: "var(--text)",
        },
      },
    },
  },
};