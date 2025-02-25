// const Tooltip = ({ content, children }) => {
//     return (
//       <div className="relative group">
//         {children}
//         <span className="absolute hidden group-hover:block bg-gray-800 text-white p-2 rounded -top-10">
//           {content}
//         </span>
//       </div>
//     );
//   };
//   // Usage: <Tooltip content="Info here"><button>Hover me</button></Tooltip>


import React from 'react'

function Tooltip({ content, children }) {
  return (
    <div className="relative group">
      {children}
      <span className="absolute hidden group-hover:block bg-gray-800 text-white p-2 rounded -top-10">
        {content}
      </span>
    </div>
  );
};
  
export default Tooltip