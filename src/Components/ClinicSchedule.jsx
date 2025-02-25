// import React, { useState, useEffect } from 'react';
// import '../App.css'; // Optional: For styling

// const Schedule = () => {
//     // State to track current time and highlight the active time slot
//     const [currentTime, setCurrentTime] = useState(new Date());

//     // Update current time every minute
//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrentTime(new Date());
//         }, 60000); // Update every minute
//         return () => clearInterval(timer); // Cleanup on unmount
//     }, []);

//     // Generate time slots for a full day with 5-minute intervals
//     const generateTimeSlots = () => {
//         const timeSlots = [];
//         let currentHour = 0;
//         let currentMinute = 0;

//         while (currentHour < 24) {
//             const timeString = `${currentHour.toString().padStart(2, '0')}:${currentMinute
//                 .toString()
//                 .padStart(2, '0')} ${currentHour < 12 ? 'AM' : 'PM'}`;
//             timeSlots.push(timeString);

//             currentMinute += 5;
//             if (currentMinute >= 60) {
//                 currentMinute = 0;
//                 currentHour += 1;
//             }
//         }
//         return timeSlots;
//     };

//     const timeSlots = generateTimeSlots();

//     // Format current time to match the time slot format
//     const formatCurrentTime = (date) => {
//         const hours = date.getHours();
//         const minutes = date.getMinutes();
//         const period = hours < 12 ? 'AM' : 'PM';
//         const formattedHours = hours % 12 || 12; // Convert to 12-hour format
//         return `${formattedHours.toString().padStart(2, '0')}:${minutes
//             .toString()
//             .padStart(2, '0')} ${period}`;
//     };
//     // Calculate the position of the current time as a percentage of the day
//     const getCurrentTimePosition = (date) => {
//         const totalMinutes = date.getHours() * 60 + date.getMinutes();
//         const totalDayMinutes = 24 * 60; // 1440 minutes in a day
//         return (totalMinutes / totalDayMinutes) * 100; // Percentage of the day
//     };
//     // Find the current time slot to highlight
//     const currentTimeSlot = formatCurrentTime(currentTime);
//     const isCurrentTimeSlot = (timeSlot) => timeSlot === currentTimeSlot;
//     const currentTimePosition = getCurrentTimePosition(currentTime);

//     return (
//         <div className=" schedule-container text-black bg-white">
//             <div className="header">
//                 <h2 className='text-center'>HealthWell Clinic Friday February 21</h2>
//                 <div className="tabs text-end">
//                     <span>Day</span>
//                     <span>Week</span>
//                     <span>Month</span>
//                     <span>Agenda</span>
//                 </div>
//             </div>

//             <div className="schedule-stats">
//                 Total Appointments: 0 Remaining: 0 Completed: 0 No Show: 0
//             </div>

//             <div className="time-slots">
//                 {timeSlots.map((time, index) => (
//                     <div
//                         key={index}
//                         className={`time-slot ${isCurrentTimeSlot(time) ? 'active' : ''}`}
//                     >
//                         {time}
//                     </div>
//                 ))}
//             </div>
//             {/* Current time indicator as a horizontal line */}
//             <div
//                 className="rbc-current-time-indicator absolute left-0 right-0 h-0.5 bg-red-500"
//                 style={{ top: `${currentTimePosition}%` }}
//             ></div>
//             <div className="current-time-indicator">
//                 Current Time: {currentTimeSlot} (Active)
//             </div>
//         </div>
//     );
// };

// export default Schedule;

import React, { useState, useEffect } from 'react';
import '../App.css'; // Optional: For styling
import Sidebar from './Sidebar';

const Schedule = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000);
        return () => clearInterval(timer);
    }, []);

    const generateTimeSlots = () => {
        const timeSlots = [];
        let currentHour = 0;
        let currentMinute = 0;

        while (currentHour < 24) {
            const timeString = `${currentHour.toString().padStart(2, '0')}:${currentMinute
                .toString()
                .padStart(2, '0')} ${currentHour < 12 ? 'AM' : 'PM'}`;
            timeSlots.push(timeString);

            currentMinute += 5;
            if (currentMinute >= 60) {
                currentMinute = 0;
                currentHour += 1;
            }
        }
        return timeSlots;
    };

    const timeSlots = generateTimeSlots();

    const formatCurrentTime = (date) => {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const period = hours < 12 ? 'AM' : 'PM';
        const formattedHours = hours % 12 || 12;
        return `${formattedHours.toString().padStart(2, '0')}:${minutes
            .toString()
            .padStart(2, '0')} ${period}`;
    };

    const getCurrentTimePosition = (date) => {
        const totalMinutes = date.getHours() * 60 + date.getMinutes();
        const totalDayMinutes = 24 * 60;
        return (totalMinutes / totalDayMinutes) * 100;
    };

    const currentTimeSlot = formatCurrentTime(currentTime);
    const isCurrentTimeSlot = (timeSlot) => timeSlot === currentTimeSlot;
    const currentTimePosition = getCurrentTimePosition(currentTime);

    return (<>
        <div className="schedule-container text-black bg-white w-[75%]">
            <div className="time-slots relative">
                {timeSlots.map((time, index) => (
                    <div
                        key={index}
                        className="time-slot border-t border-gray-400 flex items-center h-10 relative"
                    >
                        <span className="w-16 text-right pr-2">{time}</span>
                        <div className="flex-1 border-b border-gray-300"></div>
                    </div>
                ))}
                <div
                    className="rbc-current-time-indicator absolute left-16 right-0 bg-blue-500 h-0.5"
                    style={{ top: `${currentTimePosition}%` }}
                ></div>
            </div>

        </div>
    </>
    );
};

export default Schedule;