import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { useNavigate } from 'react-router-dom';
import Heading from '../Components/Heading';
import PrimaryButton from '../Components/PrimaryButton';
import { FaAddressBook } from "react-icons/fa";

const Appointment = () => {
  const navigate = useNavigate();
  // const  = new Date();
  // const [Date, setDate] = useState(Date*())
  // Static data for appointments
  const staticEvents = [
    {
      title: 'John Doe - 10:00 AM',
      start: '2025-02-01',
      url: '/appointment/1',
      extendedProps: {
        patientName: 'John Doe',
        time: '10:00 AM',
        reason: 'Checkup',
      },
      backgroundColor: '#fff',
      borderColor: '#77db8f',
      textColor: '#000',
    },
    {
      title: 'Jane Smith - 02:30 PM',
      start: '2025-02-02',
      url: '/appointment/2',
      extendedProps: {
        patientName: 'Jane Smith',
        time: '02:30 PM',
        reason: 'Follow-up',
      },
      backgroundColor: '#fff',
      borderColor: '#77db8f',
      textColor: '#000',
    },
    {
      title: 'Mike Johnson - 09:15 AM',
      start: '2025-02-11',
      url: '/appointment/3',
      extendedProps: {
        patientName: 'Mike Johnson',
        time: '09:15 AM',
        reason: 'Consultation',
      },
      backgroundColor: '#fff',
      borderColor: '#77db8f',
      textColor: '#000',
    },
    {
      title: 'Mike Johnson - 09:15 AM',
      start: '2025-02-24',
      url: '/appointment/3',
      extendedProps: {
        patientName: 'Mike Johnson',
        time: '09:15 AM',
        reason: 'Consultation',
      },
      backgroundColor: '#fff',
      borderColor: "#77db8f",
      textColor: '#000',
    },
  ];

  const [events] = useState(staticEvents); // Set static data directly

  function handleBookAppointmentClick() {
    navigate('/doctor/Appointment/bookappointmentform');
  }

  const renderEventContent = (eventInfo) => {
    const { patientName, time, reason } = eventInfo.event.extendedProps;
    return (
      <div className="p-1 text-sm">
        <div className="font-medium">{patientName}</div>
        <div className="text-gray-600">{time}</div>
        <div className="text-gray-500 italic">{reason}</div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 gap-3 w-[95%] lg:ms-[70px] h-screen bg-white">
      <div className=" rounded-lg flex flex-col min-h-0">
        <div className="flex items-center justify-between p-4 border-b shrink-0">
          <h5 className="text-lg font-semibold">Appointments</h5>
          <PrimaryButton
            onClick={handleBookAppointmentClick}
            className="flex items-center gap-3"
          >
            <FaAddressBook /> Book Appointment
          </PrimaryButton>
        </div>

        <div className="p-4 overflow-x-auto flex-grow">
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridDay"
            initialDate="2025-02-01"
            events={events}
            headerToolbar={{
              left: 'prevYear,prev,next,nextYear,today',
              center: 'title',
              right: 'dayGridDay,dayGridWeek,dayGridMonth',
            }}
            height="100%" // Dynamic height instead of fixed
            eventContent={renderEventContent}
            dayMaxEvents={true}
            eventDisplay="block"
            eventBorderColor="#fff"
            eventBackgroundColor="#fff"
            eventTextColor="#000"
          />
        </div>
      </div>
    </div>
  );
};

export default Appointment;