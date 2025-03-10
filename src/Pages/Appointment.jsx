import React, { useState, useCallback } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'; // Default styles
import { NavLink, useNavigate } from 'react-router-dom';
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
import Modal from '../Components/Modal'
import '../App.css'
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
      phone: '8965823672', // Added for the phone link
      // url: '/appointment/1',
    },
    {
      title: 'Jane Smith - 02:30 PM',
      start: new Date('2025-02-02T14:30:00'),
      end: new Date('2025-02-02T15:00:00'),
      patientName: 'Jane Smith',
      time: '02:30 PM',
      reason: 'Follow-up',
      phone: '8965823672', // Added for the phone link
      // url: '/appointment/2',
    },
    {
      title: 'Mike Johnson - 09:15 AM',
      start: new Date('2025-02-11T09:15:00'),
      end: new Date('2025-02-11T09:45:00'),
      patientName: 'Mike Johnson',
      time: '09:15 AM',
      reason: 'Consultation',
      phone: '8965823672', // Added for the phone link
      // url: '/appointment/3',
    },
    {
      title: 'Mike Johnson - 09:15 AM',
      start: new Date('2025-02-24T09:15:00'),
      end: new Date('2025-02-24T09:45:00'),
      patientName: 'Mike Johnson',
      time: '09:15 AM',
      reason: 'Consultation',
      phone: '8965823672', // Added for the phone link
      // url: '/appointment/3',
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
    // State for modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Handle button click actions
    const handleCallClick = () => {
      console.log(`Calling ${event.patientName} at ${event.phone || 'No phone number'}`);
      setIsModalOpen(false); // Close modal after action
    };

    const handleNotificationClick = () => {
      console.log(`Sending notification to ${event.patientName}`);
      setIsModalOpen(false);
    };

    const handleActionClick = (action) => {
      console.log(`${action} for ${event.patientName}`);
      setIsModalOpen(false);
    };

    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };

    // Modal content
    const modalContent = (
      <div className="space-y-4">
        {/* Patient Details */}
        <div className="space-y-2">
          {event.age && <p className="text-gray-700">Age: {event.age}</p>}
          {event.duration && <p className="text-gray-700">Duration: {event.duration}M</p>}
          {event.type && <p className="text-gray-700">Type: {event.type}</p>}
          {event.phone && <p className="text-gray-700">Phone: {event.phone}</p>}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2">

          <button
            className="flex items-center justify-center gap-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 items-center"
            onClick={() => handleActionClick('Edit Details')}
          >
            <NavLink
              to="/doctor/Appointment/patient-form" // Replace with your desired route
              onClick={(e) => {
                e.stopPropagation(); // Prevent event bubbling
                handleActionClick("Reschedule"); // Existing action handler
              }}
              className="flex" // Ensure NavLink doesn't interfere with button styling
            >
              <button
                className="lg:text-sm xl:text-base xlarge:text-lg text-white hover:text-gray-500 transition-colors"
                aria-describedby="popup-243"
              >
                <RiEditFill size={24} />
              </button>Edit
            </NavLink>
            {/* <RiEditFill size={20} /> Edit */}
          </button>
          {/* {event.phone && ( */}
          <button
            className="flex items-center justify-center gap-2 p-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={handleCallClick}
          >
            <NavLink
              to="/*" // Replace with your desired route
              onClick={(e) => {
                e.stopPropagation(); // Prevent event bubbling
                handleActionClick("Reschedule"); // Existing action handler
              }}
              className="flex" // Ensure NavLink doesn't interfere with button styling
            >
              <FaPhoneAlt size={20} /> Call
            </NavLink>
          </button>
          {/* )} */}
          <button
            className="flex items-center justify-center gap-2 p-2 bg-purple-500 text-white rounded hover:bg-purple-600"
            onClick={() => handleActionClick('End Consultation')}
          >
            <NavLink
              to="/*" // Replace with your desired route
              onClick={(e) => {
                e.stopPropagation(); // Prevent event bubbling
                handleActionClick("Reschedule"); // Existing action handler
              }}
              className="flex" // Ensure NavLink doesn't interfere with button styling
            >
              <IoLogOut size={20} /> End Consultation
            </NavLink>
          </button>
          <button
            className="flex items-center justify-center gap-2 p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
            onClick={() => handleActionClick('View Profile')}
          >
            <NavLink
              to="/*" // Replace with your desired route
              onClick={(e) => {
                e.stopPropagation(); // Prevent event bubbling
                handleActionClick("Reschedule"); // Existing action handler
              }}
              className="flex" // Ensure NavLink doesn't interfere with button styling
            >
              <FaUser size={20} /> View Profile
            </NavLink>
          </button>
          <button
            className="flex items-center justify-center gap-2 p-2 bg-orange-500 text-white rounded hover:bg-orange-600"
            onClick={() => handleActionClick('Reschedule')}
          >
            <FaClock size={20} /> Reschedule
          </button>
          <button
            className="flex items-center justify-center gap-2 p-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            onClick={() => handleActionClick('View Details')}
          >
            <NavLink
              to="/*" // Replace with your desired route
              onClick={(e) => {
                e.stopPropagation(); // Prevent event bubbling
                handleActionClick("Reschedule"); // Existing action handler
              }}
              className="flex" // Ensure NavLink doesn't interfere with button styling
            >
              <FaFilePrescription size={20} /> Details
            </NavLink>
          </button>
        </div>
      </div>
    );

    return (
      <div className="rbc-event-content w-full bg-primary mx-auto flex items-center">
        <div
          className="rbc-event text-black w-full bg-primary flex items-center justify-between p-2 cursor-pointer sm:cursor-default"
          onClick={() => window.innerWidth < 640 && toggleModal()} // Open modal on small screens
        >
          <div className="flex items-center gap-2 min-w-0">
            <p className="font-semibold text-lg md:text-base lg:text-lg 2xl:text-xl truncate">
              {event.patientName || 'Patient Name'}
            </p>
            {event.age && (
              <span className="flex items-center gap-1 text-[#878787] whitespace-nowrap">
                <FaPhoneAlt size={16} />
                <span>({event.age})</span>
              </span>
            )}
            {event.duration && (
              <span className="md:text-base lg:text-lg 2xl:text-xl whitespace-nowrap">
                {event.duration}M
              </span>
            )}
            {event.type && (
              <p className="text-lg md:text-base lg:text-lg 2xl:text-xl text-gray-700 truncate">
                {event.type}
              </p>
            )}
          </div>

          {/* Contact Icons as Buttons - Hidden on small screens */}
          <div className="hidden sm:flex items-center justify-between gap-2 flex-shrink-0 pr-4">
            <Tooltip content="Edit Details">
              <NavLink
                to="/doctor/Appointment/patient-form" // Replace with your desired route
                onClick={(e) => {
                  e.stopPropagation(); // Prevent event bubbling
                  handleActionClick("Reschedule"); // Existing action handler
                }}
                className="inline-block" // Ensure NavLink doesn't interfere with button styling
              >
                <button
                  className="lg:text-sm xl:text-base xlarge:text-lg text-white hover:text-gray-500 transition-colors"
                  aria-describedby="popup-243"
                >
                  <RiEditFill size={24} />
                </button>
              </NavLink>
            </Tooltip>
            <Tooltip content="Start Consultation">
              <button
                className="lg:text-sm xl:text-base xlarge:text-lg text-white hover:text-gray-500 transition-colors"
                aria-describedby="popup-240"
                onClick={(e) => { e.stopPropagation(); handleCallClick(); }}
              >
                <NavLink
                  to="/*" // Replace with your desired route
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent event bubbling
                    handleActionClick("Reschedule"); // Existing action handler
                  }}
                  className="inline-block" // Ensure NavLink doesn't interfere with button styling
                >
                  <FaFilePrescription size={24} />
                </NavLink>
              </button>
            </Tooltip>
            <Tooltip content="End Consultation">
              <button
                className="lg:text-sm xl:text-base xlarge:text-lg text-white hover:text-gray-500 transition-colors"
                aria-describedby="popup-241"
                onClick={(e) => { e.stopPropagation(); handleActionClick('Quick Dial'); }}
              >
                <NavLink
                  to="/*" // Replace with your desired route
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent event bubbling
                    handleActionClick("Reschedule"); // Existing action handler
                  }}
                  className="inline-block" // Ensure NavLink doesn't interfere with button styling
                >
                  <IoLogOut size={24} />
                </NavLink>
              </button>
            </Tooltip>
            <Tooltip content="View Details">
              <button
                className="lg:text-sm xl:text-base xlarge:text-lg text-white hover:text-gray-500 transition-colors"
                aria-describedby="popup-242"
                onClick={(e) => { e.stopPropagation(); handleActionClick('Schedule Follow-up'); }}
              >
                <NavLink
                  to="/*" // Replace with your desired route
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent event bubbling
                    handleActionClick("Reschedule"); // Existing action handler
                  }}
                  className="inline-block" // Ensure NavLink doesn't interfere with button styling
                >
                  <FaUser size={24} />
                </NavLink>
              </button>
            </Tooltip>
            <Tooltip content="Reschedule">
              <button
                className="lg:text-sm xl:text-base xlarge:text-lg text-white hover:text-gray-500 transition-colors"
                aria-describedby="popup-243"
                onClick={(e) => { e.stopPropagation(); handleActionClick('Reschedule'); }}
              >
                <NavLink
                  to="/*" // Replace with your desired route
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent event bubbling
                    handleActionClick("Reschedule"); // Existing action handler
                  }}
                  className="inline-block" // Ensure NavLink doesn't interfere with button styling
                >
                  <FaClock size={24} />
                </NavLink>
              </button>
            </Tooltip>
            {event.phone && (
              <Tooltip content="Dial Now">
                <button
                  className="lg:text-sm xl:text-base xlarge:text-lg text-white hover:text-gray-500 transition-colors"
                  aria-describedby="popup-247"
                  onClick={(e) => { e.stopPropagation(); handleCallClick(); }}
                >

                  <a href={`tel:${event.phone}`} onClick={(e) => e.preventDefault()}>
                    <FaPhoneAlt size={24} />
                  </a>
                </button>
              </Tooltip>
            )}
            <Tooltip content="Contact Details">
              <button
                className="lg:text-sm xl:text-base xlarge:text-lg text-white hover:text-gray-500 transition-colors"
                aria-describedby="popup-248"
                style={{ cursor: 'pointer' }}
                onClick={(e) => { e.stopPropagation(); handleActionClick('View Details'); }}
              >
                <NavLink
                  to="/*" // Replace with your desired route
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent event bubbling
                    handleActionClick("Reschedule"); // Existing action handler
                  }}
                  className="inline-block" // Ensure NavLink doesn't interfere with button styling
                >
                  <FaPhoneAlt size={24} />
                </NavLink>
              </button>
            </Tooltip>
          </div>
        </div>

        {/* Modal Integration */}
        <Modal
          isOpen={isModalOpen}
          onClose={toggleModal}
          title={event.patientName || 'Patient Name'}
          className="w-full max-w-md mx-auto p-4 sm:p-6"
        >
          {modalContent}
        </Modal>
      </div>
    );
  };
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
    // <div className="w-[95%] lg:ms-[70px] bg-white mx-auto ">
    //   <div className="rounded-lg flex flex-col  min-h-0">
    //     <div className="bg-white sticky top-0 z-999">
    //       <div className="flex bg-white  gap-2 justify-between text-center pb-4 border-b shrink-0">
    //         <div className="lg:block md:block sm:hidden">
    //           <BackButton />
    //         </div>
    //         <h5 className="text-lg font-semibold text-center bg-white lg:ps-20">Appointments</h5>
    //         <Button variant="primary" size="sm" onClick={handleBookAppointmentClick}>
    //           <FaAddressBook /> Book Appointment
    //         </Button>
    //       </div>
    //       <div className="flex flex-wrap  justify-between">
    //         <p className="text-center p-3">
    //           Total Appointments: <b>10</b> Remaining: <b>5</b> Completed: <b>5</b> No Show: <b>0</b>
    //         </p>
    //         <h2 className="text-base sm:text-lg font-semibold text-gray-800">
    //           {formatDateTime(currentDateTime)}
    //         </h2>
    //       </div>
    //     </div>
    //     <div className="p-4 overflow-x-auto flex-grow w-full text-black -z-5">
    //       <Calendar
    //         localizer={localizer}
    //         events={events}
    //         startAccessor="start"
    //         endAccessor="end"
    //         defaultView="day" // Default view set to day
    //         views={['day', 'week', 'month']} // Available views: day, week, month
    //         defaultDate={new Date('2025-02-01')} // Initial date
    //         components={{
    //           event: renderEventContent, // Custom event rendering function
    //         }}
    //         onSelectEvent={handleEventClick} // Handle event clicks
    //         onView={handleViewChange} // Update view state
    //         onNavigate={handleNavigate} // Handle navigation (e.g., next/prev day)
    //         style={{ height: '800px', minHeight: '500px' }} // Fixed height styling
    //         eventPropGetter={() => ({
    //           style: {
    //             backgroundColor: 'transparent', // Transparent background for events
    //             border: 'none', // No borders for events
    //           },
    //         })}
    //         step={calendarProps.step} // Time slot interval (e.g., 15, 30, 60 minutes)
    //         timeslots={calendarProps.timeslots} // Number of time slots per interval
    //         scrollToTime={scrollTime} // Scroll to a specific time in day view
    //       />
    //     </div>
    //   </div>
    // </div>
    <div className="w-[95%] lg:ms-[70px] bg-white mx-auto">
      <div className="rounded-lg flex flex-col min-h-0">
        {/* Sticky Header */}
        <div className="bg-white sticky top-0 z-[10] border-b pb-4">
          <div className="flex items-center gap-2 justify-between text-center">
            <div className="lg:block md:block sm:hidden">
              <BackButton />
            </div>
            <h5 className="text-lg font-semibold text-center flex-1">Appointments</h5>
            <Button variant="primary" size="sm" onClick={handleBookAppointmentClick}>
              <FaAddressBook /> Book Appointment
            </Button>
          </div>
          <div className="flex flex-wrap justify-between items-center mt-2">
            <p className="text-center p-3">
              Total Appointments: <b>10</b> Remaining: <b>5</b> Completed: <b>5</b> No Show: <b>0</b>
            </p>
            <h2 className="text-base sm:text-lg font-semibold text-gray-800">
              {formatDateTime(currentDateTime)}
            </h2>
          </div>
        </div>

        {/* Calendar Section */}
        <div className="p-4 overflow-x-auto flex-grow w-full text-black hide-scroll">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            defaultView="day"
            views={['day', 'week', 'month']}
            defaultDate={new Date('2025-02-01')}
            components={{
              event: renderEventContent,
            }}
            onSelectEvent={handleEventClick}
            onView={handleViewChange}
            onNavigate={handleNavigate}
            style={{ height: '800px', minHeight: '500px' }}
            eventPropGetter={() => ({
              style: {
                backgroundColor: 'transparent',
                border: 'none',
              },
            })}
            step={calendarProps.step}
            timeslots={calendarProps.timeslots}
            scrollToTime={scrollTime}
          />
        </div>
      </div>
    </div>
  );
};

export default Appointment;