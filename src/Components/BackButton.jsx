import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; // You can use any icon or text here.
import PrimaryButton from '../Components/PrimaryButton'
const BackButton = () => {
  const navigate = useNavigate(); // Hook to navigate to previous page

  const goBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <PrimaryButton className='text-white' onClick={goBack}> <FaArrowLeft size={20} /></PrimaryButton>
  );
};

export default BackButton;
