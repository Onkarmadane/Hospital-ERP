import React from "react";

const Cards = ({ title, description, linkText, linkUrl, Icon }) => {
  return (
    <div className="w-80 h-50 p-6 my-3 cursor-pointer shadow-xl bg-white text-black rounded-xl border-none outline-none hover:scale-101 transition-transform duration-900 hover:shadow-2xl flex flex-col justify-between">
      <div className="flex flex-col">
        {Icon && <Icon className="w-7 h-7 mb-3" />}
        <a href={linkUrl}>
          <h5 className="mb-2 text-2xl font-semibold tracking-tight line-clamp-2">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 line-clamp-3">
          {description}
        </p>
      </div>
      {linkText && (
        <a
          href={linkUrl}
          className="text-blue-600 hover:underline self-start"
        >
          {linkText}
        </a>
      )}
    </div>
  );
};

export default Cards;