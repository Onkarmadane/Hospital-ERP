import React, { useEffect, useState } from 'react';
import { FaUsers } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { HiUsers } from "react-icons/hi";
import BackButton from '../Components/BackButton'
import Heading from '../Components/Heading';
function DashboardContent() {
  const [searchTerm, setSearchTerm] = useState('');
  

  return (
    <div className="">
      {/* Header with Search and Date */}
      

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 text-text sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Total Appointments */}
        <div className="bg-background text-text p-4 rounded-lg  border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-yellow-500 text-lg"><HiUsers size={50}/></span>
            {/* <h3 className="text-sm sm:text-base font-medium text-text">Pending</h3> */}
            <Heading className='flex items-end'>Total Appointments</Heading>
          </div>
          <p className="text-2xl font-bold text-text">1044</p>
          <p className="text-xs sm:text-sm text-text">last 7 days <span className="text-green-500">300.00% ↑</span></p>
        </div>

        {/* Pending */}
        <div className="bg-background p-4 rounded-lg  border text-text border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-purple-500 text-lg"><SlCalender size={50}/></span>
            <Heading className='flex items-end'>Pending</Heading>
            {/* <h3 className="text-sm sm:text-base font-medium text-text">Pending</h3> */}
          </div>
          <p className="text-2xl font-bold text-text">827</p>
          <p className="text-xs sm:text-sm text-text">last 7 days <span className="text-green-500">300.00% ↑</span></p>
        </div>

        {/* Total Earnings */}
        <div className="bg-background p-4 rounded-lg  border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-yellow-500 text-lg"><FaIndianRupeeSign size={50}/></span>
            <Heading className='flex items-end'>Total Earnings</Heading>
          </div>
          <p className="text-2xl font-bold text-text">₹ 75275</p>
          <p className="text-xs sm:text-sm text-text">last 7 days <span className="text-green-500">300.00% ↑</span></p>
        </div>

        {/* Patient Queue */}
        <div className="bg-background p-4 rounded-lg  border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-blue-500 text-lg"><FaUsers size={50}/></span>
            <Heading className='flex items-end'>Patient Queue</Heading>
          </div>
          <p className="text-2xl pt-5 text-text">No Data Available</p>
          {/* <p className="text-xs sm:text-sm text-text">Credit Usage <span className="text-green-500">100.00%</span></p> */}
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Patient Visits (Bar Chart) */}
    

        {/* Credits (Donut Chart) */}
      
      </div>
    </div>
  );
}

export default DashboardContent;