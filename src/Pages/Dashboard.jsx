// import React from 'react';
// import { RiSurgicalMaskLine } from "react-icons/ri";
// import { BsLungs } from "react-icons/bs";
// import { FaWalking } from "react-icons/fa";
// import { LiaMicroscopeSolid } from "react-icons/lia";
// import { LiaRupeeSignSolid } from "react-icons/lia";
// import { RiVerifiedBadgeLine } from "react-icons/ri";
// import { CiStethoscope } from "react-icons/ci";
// import { RiPsychotherapyLine } from "react-icons/ri";
// import { RiHotelBedLine } from "react-icons/ri";
// import ThemeToggle from "../Components/ThemeToggle"
// const DashboardCards = () => {
//     const scheduleData = [
//         {
//             icon: RiSurgicalMaskLine, // Reference the component directly (no JSX)
//             number: '9',
//             label: 'Patients',
//             bgColor: 'bg-blue-200',
//         },
//         {
//             icon: BsLungs,
//             number: '3',
//             label: 'Surgeries',
//             bgColor: 'bg-lime-200',
//         },
//         {
//             icon: FaWalking,
//             number: '2',
//             label: 'Discharges',
//             bgColor: 'bg-orange-200',
//         },
//     ];
//     const cardData = [
//         {
//             icon: RiSurgicalMaskLine,
//             number: '890',
//             title: 'New Patients',
//             percentage: '+40%',
//             color: 'success',
//         },
//         {
//             icon: BsLungs,
//             number: '360',
//             title: 'OPD Patients',
//             percentage: '+30%',
//             color: 'primary',
//         },
//         {
//             icon: LiaMicroscopeSolid,
//             number: '980',
//             title: 'Lab tests',
//             percentage: '+60%',
//             color: 'danger',
//         },
//         {
//             icon: LiaRupeeSignSolid,
//             number: '$98000',
//             title: 'Total Earnings',
//             percentage: '+20%',
//             color: 'warning',
//         },
//     ];
//     const cards = [
//         {
//             icon: RiVerifiedBadgeLine,
//             title: 'Appointments',
//             number: '639',
//         },
//         {
//             icon: CiStethoscope,
//             title: 'Doctors',
//             number: '83',
//         },
//         {
//             icon: RiPsychotherapyLine,
//             title: 'Staff',
//             number: '296',
//         },
//         {
//             icon: BsLungs,
//             title: 'Operations',
//             number: '49',
//         },
//         {
//             icon: RiHotelBedLine,
//             title: 'Admitted',
//             number: '372',
//         },
//         {
//             icon: FaWalking,
//             title: 'Discharged',
//             number: '253',
//         },
//     ];
//     return (
//         <div className='w-[95%] lg:ms-[70px] bg-white '>
//             <div className="grid grid-cols-1 gap-3" >
//                 <div className="mb-3">
//                     <div className="bg-gradient-to-r to-[#77db8f] from-blue-800 rounded-lg shadow">
//                         {/* <ThemeToggle /> */}
//                         <div className="p-6 text-white">
//                             <h6 className="text-sm font-semibold">Good Morning,</h6>
//                             <h2 className="text-2xl font-bold">Dr. Patrick Kim</h2>
//                             <h5 className="text-lg">Your schedule today.</h5>
//                             <div className="mt-4 flex gap-4 overflow-x-auto">
//                                 {scheduleData.map((item, index) => (
//                                     <div key={index} className="flex items-center o">
//                                         <div className={`w-12 h-12 ${item.bgColor} rounded-md flex items-center justify-center mr-3 `}>
//                                             <item.icon className="text-xl text-gray-800" />
//                                         </div>
//                                         <div className="flex flex-col">
//                                             <h2 className="m-0 text-xl font-bold leading-tight">{item.number}</h2>
//                                             <p className="m-0 text-sm">{item.label}</p>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3  ">
//                 {cardData.map((card, index) => (
//                     <div key={index} className="mb-3">
//                         <div className="bg-white rounded-lg shadow-lg p-4">
//                             <div className="flex items-center">
//                                 <div className={`p-2 border border-${card.color} rounded-full mr-3`}>
//                                     <div className={`w-10 h-10 bg-${card.color}-100 rounded-full flex items-center justify-center`}>
//                                         <card.icon className="text-xl text-gray-800" />
//                                         {/* <i className={`ri ${card.icon} text-xl text-${card.color}`}></i> */}
//                                     </div>
//                                 </div>
//                                 <div className="flex flex-col">
//                                     <h2 className="text-2xl font-bold leading-tight">{card.number}</h2>
//                                     <p className="m-0 text-gray-600">{card.title}</p>
//                                 </div>
//                             </div>
//                             <div className="flex items-end justify-between mt-1">
//                                 <a href="#" className={`text-${card.color} flex items-center hover:underline`}>
//                                     <span>View All</span>
//                                     <i className="ri ri-arrow-right-line ml-1"></i>
//                                 </a>
//                                 <div className="text-right">
//                                     <p className={`mb-0 text-${card.color}`}>{card.percentage}</p>
//                                     <span className={`badge bg-${card.color}-100 text-${card.color} text-xs`}>
//                                         this month
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-6 gap-3 my-2">
//                 {cards.map((card, index) => (
//                     <div key={index} className="mb-3">
//                         <div className="bg-white rounded-lg shadow-lg p-4">
//                             <div className="flex flex-col items-center">
//                                 <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mb-3 border">
//                                     <card.icon className="text-xl text-black" />
//                                 </div>
//                                 <h6 className="text-black text-sm font-semibold">{card.title}</h6>
//                                 <h2 className="text-black text-2xl font-bold m-0">{card.number}</h2>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default DashboardCards;


import React, { useEffect, useState } from 'react';
import { FaUsers } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { HiUsers } from "react-icons/hi";
import BackButton from '../Components/BackButton'
function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');
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

  return (
    <div className="w-[95%] lg:ms-[70px] bg-white mx-auto">
      {/* Header with Search and Date */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <BackButton />
        <h2 className="text-base sm:text-lg font-semibold text-gray-800">
          {formatDateTime(currentDateTime)}
        </h2>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Total Appointments */}
        <div className="bg-white p-4 rounded-lg  border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-yellow-500 text-lg"><HiUsers /></span>
            <h3 className="text-sm sm:text-base font-medium text-gray-600">Total Appointments</h3>
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

export default Dashboard;