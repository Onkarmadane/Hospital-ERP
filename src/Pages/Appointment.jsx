import React, { useState, useCallback, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import BackButton from '../Components/BackButton';
import Button from '../Components/Button';
import { FaAddressBook } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import Tooltip from '../Components/Tooltip';
import { FaFilePrescription } from 'react-icons/fa';
import { IoIosLogOut } from 'react-icons/io';
import { CiUser } from 'react-icons/ci';
import { IoLogOut } from 'react-icons/io5';
import { FaClock } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { RiEditFill } from 'react-icons/ri';
import Modal from '../Components/Modal';
import '../App.css';
import Input from '../Components/FormFields/InputField';
import AppointmenData from '../data.json'
import Heading from '../Components/Heading';

const Appointment = () => {
  const navigate = useNavigate();
  const currentDateTime = new Date('2025-03-14T10:13:00'); // Fixed to March 14, 2025, 10:13 AM per your context

  // Localizer for React Big Calendar
  const localizer = momentLocalizer(moment);

  // Static data for appointments
  const staticEvents = [
    {
      title: 'Rishabh Sahu - 2:55 PM',
      start: new Date('2025-02-28T14:55:00'),
      end: new Date('2025-02-28T15:00:00'),
      patientName: 'Rishabh Sahu',
      age: '22 d',
      duration: '25.1',
      type: 'In-person',
      phone: '8965823672',
    },
    {
      title: 'John Doe - 10:00 AM',
      start: new Date('2025-02-01T10:00:00'),
      end: new Date('2025-02-01T10:05:00'),
      patientName: 'John Doe',
      time: '10:00 AM',
      reason: 'Checkup',
      phone: '8965823672',
    },
    {
      title: 'Jane Smith - 02:30 PM',
      start: new Date('2025-02-02T14:30:00'),
      end: new Date('2025-02-02T15:00:00'),
      patientName: 'Jane Smith',
      time: '02:30 PM',
      reason: 'Follow-up',
      phone: '8965823672',
    },
    {
      title: 'Mike Johnson - 09:15 AM',
      start: new Date('2025-03-14T09:15:00'), // Updated to March 14, 2025
      end: new Date('2025-03-14T09:45:00'),
      patientName: 'Mike Johnson',
      time: '09:15 AM',
      reason: 'Consultation',
      phone: '8965823672',
    },
    {
      title: 'Sarah Lee - 10:00 PM',
      start: new Date('2025-03-14T22:00:00'), // Updated to March 14, 2025, 10 PM
      end: new Date('2025-03-14T22:30:00'),
      patientName: 'Sarah Lee',
      time: '10:00 PM',
      reason: 'Consultation',
      phone: '8965823672',
    },
  ];

  const [events] = useState(staticEvents);
  const [currentView, setCurrentView] = useState('day');
  const [scrollTime, setScrollTime] = useState(() => {
    // Find the latest upcoming event on or after the current time
    const now = currentDateTime;
    const upcomingEvents = events
      .filter(event => event.start >= now)
      .sort((a, b) => b.start - a.start); // Sort descending to get latest first
    return upcomingEvents.length > 0 ? upcomingEvents[0].start : now;
  });

  // Define working hours with dynamic user input
  const [workingStart, setWorkingStart] = useState(() => {
    const date = new Date();
    date.setHours(8, 0, 0, 0); // Default to 8:00 AM
    return date;
  });
  const [workingEnd, setWorkingEnd] = useState(() => {
    const date = new Date();
    date.setHours(23, 0, 0, 0); // Default to 11:00 PM to accommodate 10 PM appointment
    return date;
  });

  // Handle working hours change
  const handleWorkingStartChange = (e) => {
    const [hours, minutes] = e.target.value.split(':');
    const newDate = new Date(workingStart);
    newDate.setHours(parseInt(hours), parseInt(minutes), 0, 0);
    if (newDate < workingEnd) {
      setWorkingStart(newDate);
      setScrollTime(newDate); // Update scroll time to new start if no upcoming events
    } else {
      alert('Start time must be before end time');
    }
  };

  const handleWorkingEndChange = (e) => {
    const [hours, minutes] = e.target.value.split(':');
    const newDate = new Date(workingEnd);
    newDate.setHours(parseInt(hours), parseInt(minutes), 0, 0);
    if (newDate > workingStart) {
      setWorkingEnd(newDate);
    } else {
      alert('End time must be after start time');
    }
  };

  // Navigate to booking form
  const handleBookAppointmentClick = () => {
    navigate('/doctor/Appointment/bookappointmentform');
  };

  const renderEventContent = (event) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCallClick = () => {
      console.log(`Calling ${event.patientName} at ${event.phone || 'No phone number'}`);
      setIsModalOpen(false);
    };

    const handleActionClick = (action) => {
      console.log(`${action} for ${event.patientName}`);
      setIsModalOpen(false);
    };

    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };

    const modalContent = (
      <div className="space-y-4">
        <div className="space-y-2">
          {event.age && <p className="text-gray-700">Age: {event.age}</p>}
          {event.duration && <p className="text-gray-700">Duration: {event.duration}M</p>}
          {event.type && <p className="text-gray-700">Type: {event.type}</p>}
          {event.phone && <p className="text-gray-700">Phone: {event.phone}</p>}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button
            className="flex items-center justify-center gap-2 p-2 bg-blue-500 text-text rounded hover:bg-blue-600"
            onClick={() => handleActionClick('Edit Details')}
          >
            <NavLink
              to="/doctor/Appointment/patient-form"
              onClick={(e) => {
                e.stopPropagation();
                handleActionClick('Reschedule');
              }}
              className="flex items-center"
            >
              <RiEditFill size={24} /> Edit
            </NavLink>
          </button>
          <button
            className="flex items-center justify-center gap-2 p-2 bg-green-500 text-text rounded hover:bg-green-600"
            onClick={handleCallClick}
          >
            <a
              href="tel:888888888"
              onClick={(e) => {
                e.stopPropagation();
                handleActionClick('Reschedule');
              }}
              className="gap-2 flex items-center"
            >
              <FaPhoneAlt size={24} /> Call
            </a>
          </button>
          <button
            className="flex items-center justify-center gap-2 p-2 bg-purple-500 text-text rounded hover:bg-purple-600"
            onClick={() => handleActionClick('End Consultation')}
          >
            <NavLink
              to="/*"
              onClick={(e) => {
                e.stopPropagation();
                handleActionClick('Reschedule');
              }}
              className="gap-2 flex inline-block items-center"
            >
              <IoLogOut size={20} /> End Consultation
            </NavLink>
          </button>
          <button
            className="flex items-center justify-center gap-2 p-2 bg-yellow-500 text-text rounded hover:bg-yellow-600"
            onClick={() => handleActionClick('View Profile')}
          >
            <NavLink
              to="/doctor/Appointment/patient-details"
              onClick={(e) => {
                e.stopPropagation();
                handleActionClick('Reschedule');
              }}
              className="gap-2 flex inline-block items-center"
            >
              <FaUser size={20} /> View Profile
            </NavLink>
          </button>
          <button
            className="flex items-center justify-center gap-2 p-2 bg-orange-500 text-text rounded hover:bg-orange-600"
            onClick={() => handleActionClick('Reschedule')}
          >
            <FaClock size={20} /> Reschedule
          </button>
          <button
            className="flex items-center justify-center gap-2 p-2 bg-gray-500 text-text rounded hover:bg-gray-600"
            onClick={() => handleActionClick('View Details')}
          >
            <NavLink
              to="/*"
              onClick={(e) => {
                e.stopPropagation();
                handleActionClick('Reschedule');
              }}
              className="gap-2 flex inline-block items-center"
            >
              <FaFilePrescription size={20} /> Start Consultation
            </NavLink>
          </button>
        </div>
      </div>
    );

    return (
      <div className="rbc-event-content w-full bg-background mx-auto flex items-center">
        <div
          className="rbc-event text-text w-full bg-background flex items-center justify-between p-2 cursor-pointer sm:cursor-default"
          onClick={() => window.innerWidth < 640 && toggleModal()}
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
          <div className="hidden sm:flex items-center justify-between gap-2 flex-shrink-0 pl-[250px]">
            <Tooltip content="Edit Details">
              <NavLink
                to="/doctor/Appointment/patient-form"
                onClick={(e) => {
                  e.stopPropagation();
                  handleActionClick('Reschedule');
                }}
                className="inline-block"
              >
                <button
                  className="lg:text-sm xl:text-base xlarge:text-lg text-white lg:hover:text-gray-500 transition-colors"
                  aria-describedby="popup-243"
                >
                  <RiEditFill size={24} />
                </button>
              </NavLink>
            </Tooltip>
            <Tooltip content="Start Consultation">
              <button
                className="lg:text-sm xl:text-base xlarge:text-lg text-white lg:hover:text-gray-500 transition-colors"
                aria-describedby="popup-240"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCallClick();
                }}
              >
                <NavLink
                  to="/doctor/Appointment/patient-form"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleActionClick('Reschedule');
                  }}
                  className="inline-block"
                >
                  <FaFilePrescription size={24} />
                </NavLink>
              </button>
            </Tooltip>
            <Tooltip content="End Consultation">
              <button
                className="lg:text-sm xl:text-base xlarge:text-lg text-white lg:hover:text-gray-500 transition-colors"
                aria-describedby="popup-241"
                onClick={(e) => {
                  e.stopPropagation();
                  handleActionClick('Quick Dial');
                }}
              >
                <NavLink
                  to="/*"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleActionClick('Reschedule');
                  }}
                  className="inline-block"
                >
                  <IoLogOut size={24} />
                </NavLink>
              </button>
            </Tooltip>
            <Tooltip content="View Details">
              <button
                className="lg:text-sm xl:text-base xlarge:text-lg text-white lg:hover:text-gray-500 transition-colors"
                aria-describedby="popup-242"
                onClick={(e) => {
                  e.stopPropagation();
                  handleActionClick('Schedule Follow-up');
                }}
              >
                <NavLink
                  to="/doctor/Appointment/patient-details"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleActionClick('Reschedule');
                  }}
                  className="inline-block"
                >
                  <FaUser size={24} />
                </NavLink>
              </button>
            </Tooltip>
            <Tooltip content="Reschedule">
              <button
                className="lg:text-sm xl:text-base xlarge:text-lg text-white lg:hover:text-gray-500 transition-colors"
                aria-describedby="popup-243"
                onClick={(e) => {
                  e.stopPropagation();
                  handleActionClick('Reschedule');
                }}
              >
                <NavLink
                  to="/*"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleActionClick('Reschedule');
                  }}
                  className="inline-block"
                >
                  <FaClock size={24} />
                </NavLink>
              </button>
            </Tooltip>
            {event.phone && (
              <Tooltip content="Dial Now">
                <button
                  className="lg:text-sm xl:text-base xlarge:text-lg text-white lg:hover:text-gray-500 transition-colors"
                  aria-describedby="popup-247"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCallClick();
                  }}
                >
                  <a href={`tel:${event.phone}`} onClick={(e) => e.preventDefault()}>
                    <FaPhoneAlt size={24} />
                  </a>
                </button>
              </Tooltip>
            )}
            <Tooltip content="Contact Details">
              <button
                className="lg:text-sm xl:text-base xlarge:text-lg text-white lg:hover:text-gray-500 transition-colors"
                aria-describedby="popup-248"
                style={{ cursor: 'pointer' }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleActionClick('View Details');
                }}
              >
                <a
                  href="tel:888888888"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleActionClick('Reschedule');
                  }}
                  className="inline-block"
                >
                  <FaPhoneAlt size={24} />
                </a>
              </button>
            </Tooltip>
          </div>
        </div>
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

  const handleViewChange = useCallback((view) => {
    setCurrentView(view);
    const now = currentDateTime;
    const upcomingEvents = events
      .filter(event => event.start >= now)
      .sort((a, b) => b.start - a.start); // Latest first
    if (view === 'day') {
      setScrollTime(upcomingEvents.length > 0 ? upcomingEvents[0].start : workingStart);
    }
  }, [events, currentDateTime, workingStart]);

  const handleNavigate = useCallback((date, view, action) => {
    const now = currentDateTime;
    const isToday = moment(date).isSame(now, 'day');
    const upcomingEvents = events
      .filter(event => event.start >= now && moment(event.start).isSame(date, 'day'))
      .sort((a, b) => b.start - a.start); // Latest first on the selected day

    if (view === 'day') {
      if (action === 'TODAY' && isToday) {
        // Jump to current time if within working hours, else to workingStart
        const scrollTarget = now >= workingStart && now <= workingEnd ? now : workingStart;
        setScrollTime(scrollTarget);
      } else if (upcomingEvents.length > 0) {
        // Jump to latest upcoming event on the selected day
        setScrollTime(upcomingEvents[0].start);
      } else {
        // Default to working start if no events
        setScrollTime(workingStart);
      }
    }
  }, [events, currentDateTime, workingStart, workingEnd]);

  const calendarProps = {
    step: currentView === 'day' ? 5 : 2.5,
    timeslots: currentView === 'day' ? 6 : 2,
  };

  const formatDateTime = (date) => {
    const options = {
      weekday: 'short',
      day: 'numeric',
      month: 'long',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    };
    return date.toLocaleString('en-US', options).replace(',', ',');
  };

  return (
    <div className="grid grid-cols-1 mx-auto gap-3 w-[96%] lg:ml-[50px] text-text">
      <div className="rounded-lg flex flex-col min-h-0">
        {/* Sticky Header */}
        <div className="bg-background sticky top-0 z-[10]  pb-4">
          <div className="flex items-center gap-2 justify-between text-center pb-2">
            <div className="lg:block md:block sm:hidden">
              <BackButton />
            </div>
            <Heading>Appointments</Heading>
            <Button variant="primary" size="sm" onClick={handleBookAppointmentClick} className="text-white">
              <FaAddressBook /> Book Appointment
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center mt-2 text-center sm:text-left">
            <p className="p-3">
              Total Appointments: <b>10</b> Remaining: <b>5</b> Completed: <b>5</b> No Show: <b>0</b>
            </p>
            <h2 className="text-base sm:text-lg font-semibold text-text lg:text-right sm:text-right">
              {formatDateTime(currentDateTime)}
            </h2>
          </div>
          {/* Working Hours Selection */}
          <div className="flex flex-wrap items-center gap-4 p-3 justify-center sm:justify-start">
            <label className="flex items-center gap-2">
              <span className="text-sm font-medium">Start Time:</span>
              <Input
                type="time"
                value={moment(workingStart).format('HH:mm')}
                onChange={handleWorkingStartChange}
                className="border rounded p-1 text-sm"
              />
            </label>
            <label className="flex items-center gap-2">
              <span className="text-sm font-medium">End Time:</span>
              <Input
                type="time"
                value={moment(workingEnd).format('HH:mm')}
                onChange={handleWorkingEndChange}
                className="border rounded p-1 text-sm"
              />
            </label>
          </div>
        </div>

        {/* Calendar Section */}
        <div className=" overflow-x-auto flex-grow w-full text-text bg-background hide-scroll">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            defaultView="day"
            views={['day', 'week', 'month']}
            defaultDate={new Date('2025-03-14')} // Set to current date (March 14, 2025)
            components={{
              event: renderEventContent,
            }}
            onSelectEvent={handleEventClick}
            onView={handleViewChange}
            onNavigate={handleNavigate}
            style={{ height: '800px', minHeight: '500px' }}
            eventPropGetter={() => ({
              style: {
                backgroundColor: '#000',
                border: 'none',
              },
            })}
            step={calendarProps.step}
            timeslots={calendarProps.timeslots}
            scrollToTime={scrollTime}
            min={workingStart}
            max={workingEnd}
          />
        </div>
      </div>
    </div>
  );
};

export default Appointment;


