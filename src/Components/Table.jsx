// import React from 'react';
// import { useState } from 'react';
// import { RiDeleteBinLine, RiEditBoxLine, RiEyeLine } from 'react-icons/ri';

// function Table({ columns, data }) {
//   const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  
//   const sortedData = [...data].sort((a, b) => {
//     if (!sortConfig.key) return 0;
//     const aValue = a[sortConfig.key];
//     const bValue = b[sortConfig.key];
//     if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
//     if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
//     return 0;
//   });

//   const handleSort = (key) => {
//     setSortConfig({
//       key,
//       direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc',
//     });
//   };

//   return (
//     <div className="overflow-x-auto">
//       <table className="w-full text-sm">
//         <thead className="bg-gray-50 ">
//           <tr>
//             {columns.map((column) => (
//               <th
//                 key={column.accessor}
//                 className="p-2 text-left font-medium text-gray-700 cursor-pointer"
//                 onClick={() => handleSort(column.accessor)}
//               >
//                 {column.header}
//                 {sortConfig.key === column.accessor && (
//                   <span className="ml-1">{sortConfig.direction === 'asc' ? ' ↑' : ' ↓'}</span>
//                 )}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {sortedData.map((row, index) => (
//             <tr
//               key={row.id || index}
//               className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
//             >
//               {columns.map((column) => (
//                 <td key={column.accessor} className="p-2">
//                   {column.Cell ? (
//                     // If column has a Cell renderer, use it
//                     column.Cell({ row: { original: row } })
//                   ) : (
//                     // Default rendering for other columns
//                     row[column.accessor]
//                   )}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Table;

import React from 'react';
import { useState } from 'react';
import { RiDeleteBinLine, RiEditBoxLine, RiEyeLine } from 'react-icons/ri';

function Table({ columns, data }) {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  
  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];
    if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  const handleSort = (key) => {
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc',
    });
  };

  return (
    <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 sticky top-0 z-10">
          <tr>
            {columns.map((column) => (
              <th
                key={column.accessor}
                className="p-2 text-left font-medium text-gray-700 cursor-pointer border-b"
                onClick={() => handleSort(column.accessor)}
              >
                {column.header}
                {sortConfig.key === column.accessor && (
                  <span className="ml-1">{sortConfig.direction === 'asc' ? ' ↑' : ' ↓'}</span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, index) => (
            <tr
              key={row.id || index}
              className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
            >
              {columns.map((column) => (
                <td key={column.accessor} className="p-2">
                  {column.Cell ? (
                    column.Cell({ row: { original: row } })
                  ) : (
                    row[column.accessor]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
