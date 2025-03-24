import React, { useEffect, useState } from 'react';
import { FaUsers } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { HiUsers } from "react-icons/hi";
import Table from '../Components/Table';
import Button from '../Components/Button';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import PatientQueue from './PatientQueue';
import DashboardContent from './DashboardContent';
import BackButton from '../Components/BackButton';
import Heading from '../Components/Heading';
import { useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';
import ThemeToggle from '../Components/ThemeToggle';
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
function Dashboard() {
  // console.log("api", apiBaseUrl);

  const { toggleTheme } = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState('patientQueue');
  const navigate = useNavigate();
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Update the date/time every second (1000 ms)
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Format the date and time to match "Wed 26 February, 11:02 AM"
  const formatDateTime = (date) => {
    const options = {
      weekday: 'short', // "Wed"
      day: 'numeric',   // "26"
      month: 'long',    // "February"
      hour: '2-digit',  // "11"
      minute: '2-digit',// "02"
      hour12: true,     // Use 12-hour clock with AM/PM
    };
    return date.toLocaleString('en-US', options).replace(',', ',');
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    // <div className="grid grid-cols-1 gap-3 w-[95%]  lg:ms-[70px]  mx-auto max-w-7xl">
    //   <div className="sticky top-0 z-[5] bg-background">
    //     <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 items-center mb-2">
    //       {/* Left: BackButton */}
    //       <div className="flex justify-start">
    //         <BackButton />
    //       </div>

    //       {/* Center: Clinic Name */}
    //       <div className="flex justify-center">
    //         <h2 className="text-sm sm:text-base md:text-lg font-bold text-text text-center">
    //           Clinic Name
    //         </h2>
    //       </div>

    //       {/* Right: Date/Time and ThemeToggle */}
    //       <div className="flex justify-end items-center gap-2 sm:gap-4">
    //         <h2 className="text-xs sm:text-sm md:text-base font-semibold text-text whitespace-nowrap">
    //           {formatDateTime(currentDateTime)}
    //         </h2>
    //         <ThemeToggle />
    //       </div>
    //     </div>
    <div className="grid grid-cols-1 mx-auto gap-3 w-[96%] lg:ml-[50px]">
      <div className="sticky top-0 z-[5] bg-background">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 items-center mb-2">
          {/* Left: BackButton */}
          <div className="flex justify-start">
            <BackButton />
          </div>

          {/* Center: Clinic Name and Date/Time */}
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="text-sm sm:text-base md:text-lg font-bold text-text text-center">
              Clinic Name
            </h2>
            <h2 className="text-xs sm:text-sm md:text-base font-semibold text-text whitespace-nowrap">
              {formatDateTime(currentDateTime)}
            </h2>
          </div>

          {/* Right: ThemeToggle (centered vertically on small screens, right-aligned on larger screens) */}
          <div className="flex justify-end items-center sm:items-center gap-2 sm:gap-4 relative">
            <div className="absolute sm:static inset-y-0 right-0 flex items-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
        {/* Tabs */}
        <div className="flex mb-4  overflow-x-auto">
          <button
            onClick={() => handleTabChange('patientQueue')}
            className={`px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium ${activeTab === 'patientQueue'
              ? 'border-b-2 border-primary text-primary'
              : 'text-text lg:hover:text-green-900 duration-300'
              } whitespace-nowrap`}
          >
            Patient Queue
          </button>
          <button
            onClick={() => handleTabChange('dashboardSections')}
            className={`px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium ${activeTab === 'dashboardSections'
              ? 'border-b-2 border-primary text-primary'
              : 'text-text lg:hover:text-green-900 duration-300'
              } whitespace-nowrap`}
          >
            Dashboard
          </button>
        </div>
      </div>
      {/* Tab Content */}
      {activeTab === 'patientQueue' && (<PatientQueue />)}

      {activeTab === 'dashboardSections' && (<DashboardContent />)}
    </div>
  );
}

export default Dashboard;
