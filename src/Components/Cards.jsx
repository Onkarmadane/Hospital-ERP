import React from "react";
import { NavLink } from "react-router-dom";

const Cards = ({ title, description, linkText, linkUrl, Icon }) => {
  return (
    <div className="flex-1 min-w-[300px] h-[250px] p-6 my-3 cursor-pointer  bg-white text-black rounded-xl border hover:scale-105 transition-transform duration-900 hover:shadow-xl  flex flex-col justify-between">
      <div className="flex flex-col">
        {Icon && <Icon className="w-7 h-7 mb-3" />}
        {/* <NavLink to={linkUrl}> */}
          <h5 className="mb-2 text-2xl font-semibold tracking-tight line-clamp-2">
            {title}
          </h5>
        {/* </NavLink> */}
        <p className="mb-3 mt-5 font-normal text-gray-500 dark:text-gray-400 line-clamp-3">
          {description}
        </p>
      </div>
      {linkText && (
        <NavLink to={linkUrl} className="text-blue-600 hover:underline self-start">
          {linkText}
        </NavLink>
      )}
    </div>
  );
};

export default Cards;