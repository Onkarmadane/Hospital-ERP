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
    <div className="overflow-x-auto text-text  max-h-[500px] overflow-y-auto">
      <table className="w-full text-sm ">
        <thead className="bg-background text-text sticky top-0 ">
          <tr>
            {columns.map((column) => (
              <th
                key={column.accessor}
                className="p-2 text-left font-medium text-text cursor-pointer border-b"
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
              className={index % 2 === 0 ? 'bg-background' : 'bg-background'}
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
