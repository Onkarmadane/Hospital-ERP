
import React, { useEffect, useState } from 'react';
import Week from '../Components/Week';
import Month from '../Components/Month';
import Schedule from '../Components/ClinicSchedule';
import Sidebar from '../Components/Sidebar';

function Appointment() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState("Day");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for mobile sidebar toggle

  // View components
  const DayView = () => <Schedule />;
  const WeekView = () => <Week />;
  const MonthView = () => <Month />;

  // Update current time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Format current time to match the time slot format
  const formatCurrentTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours < 12 ? 'AM' : 'PM';
    const formattedHours = hours % 12 || 12;
    return `${formattedHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${period}`;
  };

  // Calculate the position of the current time as a percentage of the day
  const getCurrentTimePosition = (date) => {
    const totalMinutes = date.getHours() * 60 + date.getMinutes();
    const totalDayMinutes = 24 * 60;
    return (totalMinutes / totalDayMinutes) * 100;
  };

  const currentTimeSlot = formatCurrentTime(currentTime);
  const currentTimePosition = getCurrentTimePosition(currentTime);

  // Render the appropriate view based on the active tab
  const renderView = () => {
    switch (activeTab) {
      case "Day":
        return <DayView />;
      case "Week":
        return <WeekView />;
      case "Month":
      default:
        return <MonthView />;
    }
  };

  return (
    <div className="flex h-full w-full bg-white mx-auto content-center">
     
      {/* Desktop Main Content (header, stats, and schedule view) */}
      <div className=" flex flex-col md:flex-1 md:flex bg-white   ">
        {/* Header */}
        <div className="header text-black p-4 border-b border-gray-200 sticky top-0 bg-white">
          <h2 className="text-center text-xl md:text-2xl font-bold">
            HealthWell Clinic Schedule<p className="font-bold text-primary">{currentTimeSlot}</p>
          </h2>
          <div className="tabs flex justify-end space-x-4 mt-2 me-5">
            {["Day", "Week", "Month"].map((tab) => (
              <span
                key={tab}
                className={`cursor-pointer p-2 ${activeTab === tab ? "text-primary font-bold border-b-2 border-primary" : "hover:text-gray-600"} md:text-base text-sm`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </span>
            ))}
          </div>
        </div>

        {/* Schedule Stats */}
        <div className="schedule-stats text-black text-center p-2 md:p-4 bg-gray-50 border-b border-gray-200">
          <p className="text-sm md:text-lg">
            Total Appointments: 0 | Remaining: 0 | Completed: 0 | No Show: 0
          </p>
        </div>

        {/* Schedule View */}
        <div className="w-full flex-1 mt-0 overflow-auto p-2 md:p-4">
          {renderView()}
        </div>
      </div>
    </div>
  );
}

export default Appointment;