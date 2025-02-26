import React, { useState, useCallback } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'; // Default styles
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../Components/PrimaryButton';
import { FaAddressBook } from 'react-icons/fa';

const Appointment = () => {
  const navigate = useNavigate();

  // Localizer for React Big Calendar
  const localizer = momentLocalizer(moment);

  // Static data for appointments
  const staticEvents = [
    {
      title: 'John Doe - 10:00 AM', // Include patientName and time in title
      start: new Date('2025-02-01T10:00:00'),
      end: new Date('2025-02-01T10:30:00'),
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

  // Custom event rendering for detailed views (week/day)
  const renderEventContent = (event) => {
    return (
      <div className="p-1 text-sm">
        <div className="font-medium">{event.patientName}</div>
        <div className="text-gray-600">{event.time}</div>
        <div className="text-gray-500 italic">{event.reason}</div>
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
    step: currentView === 'day' ? 5 : 30, // 5 minutes for day view, 30 for others
    timeslots: currentView === 'day' ? 6 : 2, // 6 slots (5 min) for day, 2 slots (30 min) for others
  };
  

  return (
    <div className="grid grid-cols-1 gap-3 lg:ms-[70px] h-screen bg-white">
      <div className="rounded-lg flex flex-col min-h-0">
        <div className="flex items-center justify-between p-4 border-b shrink-0">
          <h5 className="text-lg font-semibold">Appointments</h5>
          <PrimaryButton
            onClick={handleBookAppointmentClick}
          >
            <FaAddressBook />Book Appointment
          </PrimaryButton>
        </div>

        <div className="p-4 overflow-x-auto flex-grow w-full">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            defaultView="day" // Default view
            views={['day', 'week', 'month']} // Available views
            defaultDate={new Date('2025-02-01')} // Initial date
            components={{
              event: renderEventContent, // Custom event rendering for week/day
            }}
            onSelectEvent={handleEventClick} // Handle event clicks
            onView={handleViewChange} // Update view state
            onNavigate={handleNavigate} // Handle navigation actions
            style={{ height: '100%', minHeight: 100 }} // Dynamic height
            eventPropGetter={(event) => ({
              style: {
                backgroundColor: '#77db8f',
                borderColor: '#77db8f',
                color: '#000',
              },
            })}
            step={calendarProps.step} // Dynamic step
            timeslots={calendarProps.timeslots} // Dynamic timeslots
            scrollToTime={scrollTime} // Scroll to current time in day view
          />
        </div>
      </div>
    </div>
  );
};

export default Appointment;