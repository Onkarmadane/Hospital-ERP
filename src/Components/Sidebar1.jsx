import React from 'react';

const Sidebar1 = ({ links, isOpen, toggle }) => {
  return (
    <div className={`fixed h-full bg-gray-900 text-white p-4 ${isOpen ? 'w-64' : 'w-0'} transition-all`}>
      <button onClick={toggle} className="mb-4">{isOpen ? 'Close' : 'Open'}</button>
      {isOpen && (
        <ul>
          {links.map((link) => (
            <li key={link.href} className="py-2">
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sidebar1;