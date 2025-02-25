// const Dropdown = ({ options, value, onChange, ...props }) => {
//   return (
//     <select
//       value={value}
//       onChange={onChange}
//       className="p-2 border rounded w-full"
//       {...props}
//     >
//       {options.map((option) => (
//         <option key={option} value={option}>
//           {option}
//         </option>
//       ))}
//     </select>
//   );
// };
// Usage: <Dropdown options={['Option 1', 'Option 2']} value={selected} onChange={(e) => setSelected(e.target.value)} />


import React from 'react'

function Dropdown() {
  return (
    <select
      value={value}
      onChange={onChange}
      className="p-2 border rounded w-full"
      {...props}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

export default Dropdown