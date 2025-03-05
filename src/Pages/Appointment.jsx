// import React, { useState, useCallback } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css'; // Default styles
// import { useNavigate } from 'react-router-dom';
// // import PrimaryButton from '../Components/PrimaryButton';
// import { FaAddressBook } from 'react-icons/fa';
// import BackButton from '../Components/BackButton'
// import Button from '../Components/Button'

// const Appointment = () => {
//   const navigate = useNavigate();
//   const [currentDateTime, setCurrentDateTime] = useState(new Date());


//   // Localizer for React Big Calendar
//   const localizer = momentLocalizer(moment);

//   // Static data for appointments
//   const staticEvents = [
//     {
//       title: 'John Doe - 10:00 AM', // Include patientName and time in title
//       start: new Date('2025-02-01T10:00:00'),
//       end: new Date('2025-02-01T10:30:00'),
//       patientName: 'John Doe',
//       time: '10:00 AM',
//       reason: 'Checkup',
//       url: '/appointment/1',
//     },
//     {
//       title: 'Jane Smith - 02:30 PM',
//       start: new Date('2025-02-02T14:30:00'),
//       end: new Date('2025-02-02T15:00:00'),
//       patientName: 'Jane Smith',
//       time: '02:30 PM',
//       reason: 'Follow-up',
//       url: '/appointment/2',
//     },
//     {
//       title: 'Mike Johnson - 09:15 AM',
//       start: new Date('2025-02-11T09:15:00'),
//       end: new Date('2025-02-11T09:45:00'),
//       patientName: 'Mike Johnson',
//       time: '09:15 AM',
//       reason: 'Consultation',
//       url: '/appointment/3',
//     },
//     {
//       title: 'Mike Johnson - 09:15 AM',
//       start: new Date('2025-02-24T09:15:00'),
//       end: new Date('2025-02-24T09:45:00'),
//       patientName: 'Mike Johnson',
//       time: '09:15 AM',
//       reason: 'Consultation',
//       url: '/appointment/3',
//     },
//   ];

//   const [events] = useState(staticEvents);
//   const [currentView, setCurrentView] = useState('month'); // Track current view
//   const [scrollTime, setScrollTime] = useState(new Date()); // Default to current time

//   // Navigate to booking form
//   const handleBookAppointmentClick = () => {
//     navigate('/doctor/Appointment/bookappointmentform');
//   };

//   // Custom event rendering for detailed views (week/day)
//   const renderEventContent = (event) => {
//     return (
//       <div className="p-1 text-sm">
//         <div className="font-medium">{event.patientName}</div>
//         <div className="text-gray-600">{event.time}</div>
//         <div className="text-gray-500 italic">{event.reason}</div>
//       </div>
//     );
//   };

//   // Handle event click to navigate to URL
//   const handleEventClick = (event) => {
//     if (event.url) {
//       navigate(event.url);
//     }
//   };

//   // Handle view change
//   const handleViewChange = useCallback((view) => {
//     setCurrentView(view);
//     if (view === 'day') {
//       setScrollTime(new Date()); // Scroll to current time when switching to day view
//     }
//   }, []);

//   // Handle navigation (e.g., "today" button)
//   const handleNavigate = useCallback((date, view, action) => {
//     if (view === 'day' && action === 'TODAY') {
//       setScrollTime(new Date()); // Scroll to current time when "today" is clicked in day view
//     }
//   }, []);

//   // Dynamically set step and timeslots based on view
//   const calendarProps = {
//     step: currentView === 'day' ? 5 : 30, // 5 minutes for day view, 30 for others
//     timeslots: currentView === 'day' ? 6 : 2, // 6 slots (5 min) for day, 2 slots (30 min) for others
//   };
//   // Format the date and time to match "Wed 26 February, 11:02 AM"
//   const formatDateTime = (date) => {
//     const options = {
//       weekday: 'short', // "Wed"
//       day: 'numeric',   // "26"
//       month: 'long',    // "February"
//       hour: '2-digit',  // "11"
//       minute: '2-digit',// "02"
//       hour12: true,     // Use 12-hour clock with AM/PM
//     };
//     return date.toLocaleString('en-US', options).replace(',', ',');
//   };


//   return (
//     <div className="w-[95%] lg:ms-[70px] bg-white mx-auto">
//       <div className="rounded-lg flex flex-col min-h-0">
//         <div className="flex items-center gap-2 justify-between text-center pb-4 border-b shrink-0">
//           <div className="lg:block md:block sm:hidden">
//             <BackButton />
//           </div>
//           <h5 className="text-lg font-semibold text-center lg:ps-20">Appointments</h5>
//           <Button variant="primary" size="sm" onClick={handleBookAppointmentClick}> <FaAddressBook />Book Appointment</Button>
//         </div>
//         <div className="flex flex-wrap items-center justify-between">
//           <p className='text-center p-3'>Total Appointments:<b>10</b> Remaining: <b>05</b> Completed: <b>05</b> No Show: <b>0</b></p>
//           <h2 className="text-base sm:text-lg font-semibold text-gray-800">
//             {formatDateTime(currentDateTime)}
//           </h2>
//         </div>

//         <div className="p-4 overflow-x-auto flex-grow w-full">
//           <Calendar
//             localizer={localizer}
//             events={events}
//             startAccessor="start"
//             endAccessor="end"
//             defaultView="day" // Default view
//             views={['day', 'week', 'month']} // Available views
//             defaultDate={new Date('2025-02-01')} // Initial date
//             components={{
//               event: renderEventContent, // Custom event rendering for week/day
//             }}
//             onSelectEvent={handleEventClick} // Handle event clicks
//             onView={handleViewChange} // Update view state
//             onNavigate={handleNavigate} // Handle navigation actions
//             style={{ height: '100%', minHeight: 100 }} // Dynamic height
//             eventPropGetter={(event) => ({
//               style: {
//                 backgroundColor: '#77db8f',
//                 borderColor: '#77db8f',
//                 color: '#000',
//               },
//             })}
//             step={calendarProps.step} // Dynamic step
//             timeslots={calendarProps.timeslots} // Dynamic timeslots
//             scrollToTime={scrollTime} // Scroll to current time in day view
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Appointment;

import React, { useState, useCallback } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'; // Default styles
import { useNavigate } from 'react-router-dom';
// import PrimaryButton from '../Components/PrimaryButton';
import { FaAddressBook } from 'react-icons/fa';
import BackButton from '../Components/BackButton';
import Button from '../Components/Button';
import { FaPhoneAlt } from "react-icons/fa";
import Tooltip from '../Components/Tooltip'
import { FaFilePrescription } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { IoLogOut } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { RiEditFill } from "react-icons/ri";
const Appointment = () => {
  const navigate = useNavigate();
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  // Localizer for React Big Calendar
  const localizer = momentLocalizer(moment);


  // Static data for appointments (updated to include necessary patient info)
  const staticEvents = [
    {
      title: 'Rishabh Sahu - 2:55 PM',
      start: new Date('2025-02-28T14:55:00'), // February 28, 2025, 2:55 PM
      end: new Date('2025-02-28T15:00:00'),   // February 28, 2025, 3:00 PM
      patientName: 'Rishabh Sahu',
      age: '22 d',
      duration: '25.1',
      type: 'In-person',
      phone: '8965823672', // Added for the phone link
    },
    // Add more events as needed, matching your staticEvents structure
    {
      title: 'John Doe - 10:00 AM',
      start: new Date('2025-02-01T10:00:00'),
      end: new Date('2025-02-01T10:05:00'),
      patientName: 'John Doe',
      time: '10:00 AM',
      reason: 'Checkup',
      url: '/appointment/1',
    },
    {
      title: 'Jane Smith - 02:30 PM',
      start: new Date('2025-02-02T14:30:00'),
      end: new Date('2025-02-02T15:00:00'),
      patientName: 'Jane Smith',
      time: '02:30 PM',
      reason: 'Follow-up',
      url: '/appointment/2',
    },
    {
      title: 'Mike Johnson - 09:15 AM',
      start: new Date('2025-02-11T09:15:00'),
      end: new Date('2025-02-11T09:45:00'),
      patientName: 'Mike Johnson',
      time: '09:15 AM',
      reason: 'Consultation',
      url: '/appointment/3',
    },
    {
      title: 'Mike Johnson - 09:15 AM',
      start: new Date('2025-02-24T09:15:00'),
      end: new Date('2025-02-24T09:45:00'),
      patientName: 'Mike Johnson',
      time: '09:15 AM',
      reason: 'Consultation',
      url: '/appointment/3',
    },
  ];

  const [events] = useState(staticEvents);
  const [currentView, setCurrentView] = useState('month'); // Track current view
  const [scrollTime, setScrollTime] = useState(new Date()); // Default to current time

  // Navigate to booking form
  const handleBookAppointmentClick = () => {
    navigate('/doctor/Appointment/bookappointmentform');
  };

  const renderEventContent = (event) => {
    // Handle button click actions
    const handleCallClick = () => {
      console.log(`Calling ${event.patientName} at ${event.phone || 'No phone number'}`);
    };

    const handleNotificationClick = () => {
      console.log(`Sending notification to ${event.patientName}`);
    };

    const handleActionClick = (action) => {
      console.log(`${action} for ${event.patientName}`);
    };

    return (
      <div className="rbc-event-content flex w-auto bg-primary mx-auto ">
        <div className="rbc-event text-black w-auto h-auto bg-primary flex flex-row items-center gap-2 p-2 mx-auto">
          <div className="flex items-center justify-between gap-2 w-auto px-2">
            {/* User Details */}
            <p className="w-auto font-semibold text-lg md:text-base lg:text-lg 2xl:text-xl">
              {event.patientName || 'Patient Name'}
            </p>
            {event.age && (
              <span className="flex items-center gap-1">
                <FaPhoneAlt />
                <span className="text-[#878787]">({event.age})</span>
              </span>
            )}
            <Tooltip content="Edit Details">
              <button
                className="lg:text-sm xl:text-base xlarge:text-lg text-white hover:text-gray-500 transition-colors"
                aria-describedby="popup-243"
                onClick={() => handleActionClick('Reschedule')}
              >
                <RiEditFill size={24} />
              </button>
            </Tooltip>
            {event.duration && (
              <>
                <span className="md:text-base lg:text-base 2xl:text-lg">{event.duration}</span>
                <span className="md:text-base lg:text-base 2xl:text-lg">M</span>
              </>
            )}
            {event.type && (
              <p className="text-lg md:text-base lg:text-lg xlarge:text-xl ml-2 text-gray-700">
                {event.type}
              </p>
            )}

            {/* Contact Icons as Buttons */}
            <div className="flex items-center justify-between  gap-2  pr-4">
              <Tooltip content="Call Patient">
                <button
                  className="lg:text-sm xl:text-base xlarge:text-lg text-white hover:text-gray-500 transition-colors"
                  aria-describedby="popup-240"
                  onClick={handleCallClick}
                >
                  <FaFilePrescription size={24} />
                </button>
              </Tooltip>
              <Tooltip content="Quick Dial">
                <button
                  className="lg:text-sm xl:text-base xlarge:text-lg text-white hover:text-gray-500 transition-colors"
                  aria-describedby="popup-241"
                  onClick={() => handleActionClick('Quick Dial')}
                >
                  <IoLogOut size={24} />
                </button>
              </Tooltip>
              <Tooltip content="Schedule Follow-up">
                <button
                  className="lg:text-sm xl:text-base xlarge:text-lg text-white hover:text-gray-500 transition-colors"
                  aria-describedby="popup-242"
                  onClick={() => handleActionClick('Schedule Follow-up')}
                >
                  <FaUser size={24} />
                </button>
              </Tooltip>
              <Tooltip content="Reschedule">
                <button
                  className="lg:text-sm xl:text-base xlarge:text-lg text-white hover:text-gray-500 transition-colors"
                  aria-describedby="popup-243"
                  onClick={() => handleActionClick('Reschedule')}
                >
                  <FaClock size={24} />
                </button>
              </Tooltip>
              {event.phone && (
                <Tooltip content="Dial Now">
                  <button
                    className="lg:text-sm xl:text-base xlarge:text-lg text-white hover:text-gray-500 transition-colors"
                    aria-describedby="popup-247"
                    onClick={handleCallClick}
                  >
                    <a href={`tel:${event.phone}`} onClick={(e) => e.preventDefault()}>
                      <FaPhoneAlt size={24} />
                    </a>
                  </button>
                </Tooltip>
              )}
              <Tooltip content="View Details">
                <button
                  className="lg:text-sm xl:text-base xlarge:text-lg text-white hover:text-gray-500 transition-colors"
                  aria-describedby="popup-248"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleActionClick('View Details')}
                >
                  <FaPhoneAlt size={24} />
                </button>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Handle event click to navigate to URL
  const handleEventClick = (event) => {
    if (event.url) {
      navigate(event.url);
    }
  };

  // Handle view change
  const handleViewChange = useCallback((view) => {
    setCurrentView(view);
    if (view === 'day') {
      setScrollTime(new Date()); // Scroll to current time when switching to day view
    }
  }, []);

  // Handle navigation (e.g., "today" button)
  const handleNavigate = useCallback((date, view, action) => {
    if (view === 'day' && action === 'TODAY') {
      setScrollTime(new Date()); // Scroll to current time when "today" is clicked in day view
    }
  }, []);

  // Dynamically set step and timeslots based on view
  const calendarProps = {
    step: currentView === 'day' ? 5 : 2.5, // 5 minutes for day view, 30 for others
    timeslots: currentView === 'day' ? 6 : 2, // 6 slots (5 min) for day, 2 slots (30 min) for others
  };

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
      <div className="rounded-lg flex flex-col min-h-0">
        <div className="flex  gap-2 justify-between text-center pb-4 border-b shrink-0">
          <div className="lg:block md:block sm:hidden">
            <BackButton />
          </div>
          <h5 className="text-lg font-semibold text-center lg:ps-20">Appointments</h5>
          <Button variant="primary" size="sm" onClick={handleBookAppointmentClick}>
            <FaAddressBook /> Book Appointment
          </Button>
        </div>
        <div className="flex flex-wrap  justify-between">
          <p className="text-center p-3">
            Total Appointments: <b>10</b> Remaining: <b>5</b> Completed: <b>5</b> No Show: <b>0</b>
          </p>
          <h2 className="text-base sm:text-lg font-semibold text-gray-800">
            {formatDateTime(currentDateTime)}
          </h2>
        </div>

        <div className="p-4 overflow-x-auto flex-grow w-full text-black">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            defaultView="day" // Default view set to day
            views={['day', 'week', 'month']} // Available views: day, week, month
            defaultDate={new Date('2025-02-01')} // Initial date
            components={{
              event: renderEventContent, // Custom event rendering function
            }}
            onSelectEvent={handleEventClick} // Handle event clicks
            onView={handleViewChange} // Update view state
            onNavigate={handleNavigate} // Handle navigation (e.g., next/prev day)
            style={{ height: '800px', minHeight: '500px' }} // Fixed height styling
            eventPropGetter={() => ({
              style: {
                backgroundColor: 'transparent', // Transparent background for events
                border: 'none', // No borders for events
              },
            })}
            step={calendarProps.step} // Time slot interval (e.g., 15, 30, 60 minutes)
            timeslots={calendarProps.timeslots} // Number of time slots per interval
            scrollToTime={scrollTime} // Scroll to a specific time in day view
          />
        </div>
      </div>
    </div>
  );
};

export default Appointment;