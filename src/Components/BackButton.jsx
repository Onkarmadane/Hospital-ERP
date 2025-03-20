import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <button
      className="hidden sm:hidden md:block lg:block text-text bg-transparent duration-100 border border-1 hover:shadow-lg  items-center gap-3 p-2 rounded hover:bg-primary-dark"
      onClick={goBack}
    >
      <FaArrowLeft size={20} />
    </button>
  );
};

export default BackButton;