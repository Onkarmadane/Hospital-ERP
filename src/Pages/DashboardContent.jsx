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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Total Appointments */}
        <div className="bg-white p-4 rounded-lg  border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-yellow-500 text-lg"><HiUsers /></span>
            <Heading>Total Appointments</Heading>
          </div>
          <p className="text-2xl font-bold text-gray-900">1044</p>
          <p className="text-xs sm:text-sm text-gray-500">last 7 days <span className="text-green-500">300.00% ↑</span></p>
        </div>

        {/* Pending */}
        <div className="bg-white p-4 rounded-lg  border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-purple-500 text-lg"><SlCalender /></span>
            <h3 className="text-sm sm:text-base font-medium text-gray-600">Pending</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900">827</p>
          <p className="text-xs sm:text-sm text-gray-500">last 7 days <span className="text-green-500">300.00% ↑</span></p>
        </div>

        {/* Total Earnings */}
        <div className="bg-white p-4 rounded-lg  border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-yellow-500 text-lg"><FaIndianRupeeSign /></span>
            <h3 className="text-sm sm:text-base font-medium text-gray-600">Total Earnings</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900">₹ 75275</p>
          <p className="text-xs sm:text-sm text-gray-500">last 7 days <span className="text-green-500">300.00% ↑</span></p>
        </div>

        {/* Patient Queue */}
        <div className="bg-white p-4 rounded-lg  border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-blue-500 text-lg"><FaUsers /></span>
            <h3 className="text-sm sm:text-base font-medium text-gray-600">Patient Queue</h3>
          </div>
          <p className="text-2xl pt-5 text-gray-900">No Data Available</p>
          {/* <p className="text-xs sm:text-sm text-gray-500">Credit Usage <span className="text-green-500">100.00%</span></p> */}
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