import React, { useEffect, useState } from 'react'

function Week() {
    
      // State to track current time and highlight the active time slot
      const [currentTime, setCurrentTime] = useState(new Date());
    
      // Update current time every minute
      useEffect(() => {
        const timer = setInterval(() => {
          setCurrentTime(new Date());
        }, 60000); // Update every minute
        return () => clearInterval(timer); // Cleanup on unmount
      }, []);
    
      // Generate time slots for a full day with 5-minute intervals
      const generateTimeSlots = () => {
        const timeSlots = [];
        let currentHour = 0;
        let currentMinute = 0;
    
        while (currentHour < 24) {
          const hours = currentHour % 12 || 12; // Convert to 12-hour format
          const period = currentHour < 12 ? 'AM' : 'PM';
          const timeString = `${hours}:${currentMinute.toString().padStart(2, '0')} ${period}`;
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
    
      // Calculate the position of the current time as a percentage of the day
      const getCurrentTimePosition = (date) => {
        const totalMinutes = date.getHours() * 60 + date.getMinutes();
        const totalDayMinutes = 24 * 60; // 1440 minutes in a day
        return (totalMinutes / totalDayMinutes) * 100; // Percentage of the day
      };
    
      const currentTimePosition = getCurrentTimePosition(currentTime);
    
      // Static events data (based on the document)
      const events = [
        { day: 'Monday', start: '10:25 AM', end: '10:30 AM', title: 'booked', user: 'Pharmacy Test Member', age: '26', gender: 'M', type: 'In-person' },
        { day: 'Friday', start: '2:35 PM', end: '2:40 PM', title: 'booked', user: 'Rishabh Sahu', age: '24.1', gender: 'M', type: 'In-person' },
        { day: 'Friday', start: '2:45 PM', end: '2:50 PM', title: 'booked', user: 'Rishabh Sahu', age: '24.1', gender: 'M', type: 'In-person' },
        { day: 'Friday', start: '5:20 PM', end: '5:40 PM', title: 'open' },
        { day: 'Friday', start: '5:40 PM', end: '6:00 PM', title: 'open' },
        { day: 'Friday', start: '6:00 PM', end: '6:20 PM', title: 'open' },
        { day: 'Friday', start: '6:20 PM', end: '6:40 PM', title: 'open' },
        { day: 'Friday', start: '6:40 PM', end: '7:00 PM', title: 'open' },
        { day: 'Friday', start: '7:00 PM', end: '7:20 PM', title: 'open' },
        { day: 'Friday', start: '7:20 PM', end: '7:40 PM', title: 'open' },
        { day: 'Friday', start: '7:40 PM', end: '8:00 PM', title: 'open' },
        { day: 'Friday', start: '8:00 PM', end: '8:20 PM', title: 'open' },
        { day: 'Friday', start: '8:20 PM', end: '8:40 PM', title: 'open' },
        { day: 'Friday', start: '8:40 PM', end: '9:00 PM', title: 'open' },
        { day: 'Friday', start: '9:00 PM', end: '9:20 PM', title: 'open' },
        { day: 'Friday', start: '9:20 PM', end: '9:40 PM', title: 'open' },
        { day: 'Friday', start: '9:40 PM', end: '10:00 PM', title: 'open' },
        { day: 'Friday', start: '10:05 PM', end: '10:15 PM', title: 'open' },
        { day: 'Friday', start: '10:15 PM', end: '10:25 PM', title: 'open' },
        { day: 'Friday', start: '10:25 PM', end: '10:35 PM', title: 'open' },
        { day: 'Friday', start: '10:35 PM', end: '10:45 PM', title: 'open' },
        { day: 'Friday', start: '10:45 PM', end: '10:55 PM', title: 'open' },
      ];
    
      // Days of the week for the header
      const days = [
        { date: '16 Sun', isToday: false },
        { date: '17 Mon', isToday: false },
        { date: '18 Tue', isToday: false },
        { date: '19 Wed', isToday: false },
        { date: '20 Thu', isToday: false },
        { date: '21 Fri', isToday: true },
        { date: '22 Sat', isToday: false },
      ];
    
      // Check if a time slot overlaps with any event for a specific day
      const isEventTime = (timeSlot, day) => {
        return events.some(
          (event) =>
            event.day === day &&
            (timeSlot === event.start || (timeSlot > event.start && timeSlot < event.end))
        );
      };
    
    
      return (
        <div className="schedule-container text-black bg-white w-[75%] ">
      <table className="w-full border-collapse overflow-auto">
        <thead>
          <tr>
            <th className="rbc-time-header-gutter w-[71.375px] min-w-[71.375px] max-w-[71.375px] border-r border-gray-300"></th>
            {days.map((day, index) => (
              <th
                key={index}
                className={`rbc-header p-2 text-center border border-gray-300 ${day.isToday ? 'rbc-today bg-gray-100' : ''}`}
              >
                <button
                  type="button"
                  className="rbc-button-link text-gray-700 hover:text-gray-900"
                >
                  <span role="columnheader" aria-sort="none">
                    {day.date}
                  </span>
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((time, timeIndex) => (
            <tr key={timeIndex} className="border-b border-gray-300">
              <td className="rbc-time-gutter rbc-time-column p-2 text-sm text-gray-700 border-r border-gray-300">
                {time}
              </td>
              {days.map((day, dayIndex) => (
                <td
                  key={dayIndex}
                  className={`rbc-day-slot rbc-time-column p-1 ${day.isToday ? 'rbc-now rbc-today bg-gray-50' : ''} relative`}
                >
                  <div className={`rbc-timeslot-group h-6 ${isEventTime(time, day.date.split(' ')[1]) ? 'bg-green-100' : ''}`}>
                    <div className="rbc-time-slot h-full">
                      {isEventTime(time, day.date.split(' ')[1]) && (
                        <div className="rbc-event bg-blue-200 p-1 text-xs text-gray-800 flex items-center justify-between">
                          <div className="rbc-event-label">
                            {events.find((event) => event.day.toLowerCase() === day.date.split(' ')[1].toLowerCase() && event.start === time)?.title === 'booked' ? (
                              <>
                                <div className="user-details flex items-center">
                                  <img
                                    src={
                                      events.find((event) => event.day.toLowerCase() === day.date.split(' ')[1].toLowerCase() && event.start === time)?.user === 'Pharmacy Test Member'
                                        ? 'https://cufront-assets.s3.amazonaws.com/icons+/Frame+166+%283%29.png'
                                        : 'https://cufront-assets.s3.amazonaws.com/icons+/Frame+166+%281%29.png'
                                    }
                                    alt="User"
                                    className="w-5 h-5 mr-2"
                                  />
                                  <h4 className="md:text-base 2xl:text-lg flex-1">
                                    {events.find((event) => event.day.toLowerCase() === day.date.split(' ')[1].toLowerCase() && event.start === time)?.user}
                                  </h4>
                                  <span className="flex items-center gap-1 text-[#878787]">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth="0"
                                      viewBox="0 0 512 512"
                                      color="#878787"
                                      height="8"
                                      width="8"
                                      xmlns="http://www.w3.org/2000/svg"
                                      style={{ color: 'rgb(135, 135, 135)' }}
                                    >
                                      <path d="M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208z"></path>
                                    </svg>
                                    (13 d)
                                  </span>
                                  <span aria-describedby="popup">
                                    <img
                                      src="https://cufront-assets.s3.amazonaws.com/icons+/Vector.png"
                                      style={{ width: '15px' }}
                                      className="ml-1"
                                    />
                                  </span>
                                  <span className="md:text-base lg:text-base 2xl:text-lg">
                                    {events.find((event) => event.day.toLowerCase() === day.date.split(' ')[1].toLowerCase() && event.start === time)?.age}
                                  </span>
                                  <span className="md:text-base lg:text-base 2xl:text-lg">
                                    {events.find((event) => event.day.toLowerCase() === day.date.split(' ')[1].toLowerCase() && event.start === time)?.gender}
                                  </span>
                                </div>
                                <div className="flex-1">
                                  <p className="text-lg md:text-base lg:text-lg xlarge:text-xl">
                                    {events.find((event) => event.day.toLowerCase() === day.date.split(' ')[1].toLowerCase() && event.start === time)?.type}
                                  </p>
                                </div>
                              </>
                            ) : (
                              <div id="open-block-event-container" className="flex items-center justify-between">
                                <p className="sm:ml-[29px] lg:text-base xl:text-lg xlarge:text-xl">Open</p>
                                <div className="icons sm:mr-[29px] flex-shrink-0" style={{ marginLeft: 'auto', width: 'fit-content' }}>
                                  <span>
                                    <img
                                      src="https://cufront-assets.s3.amazonaws.com/icons+/blocked.png"
                                      style={{ width: '1.2rem' }}
                                      alt="Blocked"
                                      className="w-5 h-5"
                                    />
                                  </span>
                                </div>
                              </div>
                            )}
                          </div>
                          <div className="icons flex">
                            {/* Icons as per the document (placeholders for SVGs and images) */}
                            <span className="lg:text-sm xl:text-base xlarge:text-lg text-red-500" aria-describedby="popup">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 24 24"
                                color="red"
                                height="1.2em"
                                width="1.2em"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ color: 'red' }}
                              >
                                <path d="M21 3C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.455L2 22.5V4C2 3.44772 2.44772 3 3 3H21ZM20 5H4V18.385L5.76333 17H20V5ZM17 7V15H15V7H17ZM11 8V9.999L13 10V12L11 11.999V14H9V11.999L7 12V10L9 9.999V8H11Z"></path>
                              </svg>
                            </span>
                            <span className="lg:text-sm xl:text-base xlarge:text-lg text-[#57D08B]" aria-describedby="popup">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 384 512"
                                height="1.2em"
                                width="1.2em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm68.53 179.48l11.31 11.31c6.25 6.25 6.25 16.38 0 22.63l-29.9 29.9L304 409.38c6.25 6.25 6.25 16.38 0 22.63l-11.31 11.31c-6.25 6.25-16.38 6.25-22.63 0L240 413.25l-30.06 30.06c-6.25 6.25-16.38 6.25-22.63 0L176 432c-6.25-6.25-6.25-16.38 0-22.63l30.06-30.06L146.74 320H128v48c0 8.84-7.16 16-16 16H96c-8.84 0-16-7.16-16-16V208c0-8.84 7.16-16 16-16h80c35.35 0 64 28.65 64 64 0 24.22-13.62 45.05-33.46 55.92L240 345.38l29.9-29.9c6.25-6.25 16.38-6.25 22.63 0zM176 272h-48v-32h48c8.82 0 16 7.18 16 16s-7.18 16-16 16zm208-150.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"></path>
                              </svg>
                            </span>
                            <span className="lg:text-sm xl:text-base xlarge:text-lg text-red-500" aria-describedby="popup">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 512 512"
                                color="red"
                                height="21"
                                width="21"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ color: 'red' }}
                              >
                                <path d="M160 256a16 16 0 0 1 16-16h144V136c0-32-33.79-56-64-56H104a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h160a56.06 56.06 0 0 0 56-56V272H176a16 16 0 0 1-16-16zm299.31-11.31-80-80a16 16 0 0 0-22.62 22.62L409.37 240H320v32h89.37l-52.68 52.69a16 16 0 1 0 22.62 22.62l80-80a16 16 0 0 0 0-22.62z"></path>
                              </svg>
                            </span>
                            <span className="lg:text-sm xl:text-base xlarge:text-lg text-[#9644FF]" aria-describedby="popup">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 512 512"
                                height="1.3em"
                                width="1.3em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M256 256c52.805 0 96-43.201 96-96s-43.195-96-96-96-96 43.201-96 96 43.195 96 96 96zm0 48c-63.598 0-192 32.402-192 96v48h384v-48c0-63.598-128.402-96-192-96z"></path>
                              </svg>
                            </span>
                            <span className="lg:text-sm xl:text-base xlarge:text-lg text-[#3592FF]" aria-describedby="popup">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 24 24"
                                height="1.3em"
                                width="1.3em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path fill="none" d="M0 0h24v24H0V0z"></path>
                                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.3 14.71L11 12.41V7h2v4.59l3.71 3.71-1.42 1.41z"></path>
                              </svg>
                            </span>
                            <span aria-describedby="popup">
                              <img
                                src={
                                  events.find((event) => event.day.toLowerCase() === day.date.split(' ')[1].toLowerCase() && event.start === time)?.user === 'Pharmacy Test Member'
                                    ? 'https://cufront-assets.s3.amazonaws.com/Vector+(1).png'
                                    : 'https://cufront-assets.s3.amazonaws.com/Frame+487.png'
                                }
                                width="15px"
                                height="16px"
                                className="ml-1"
                                alt="Icon"
                              />
                            </span>
                            <span className="lg:text-sm xl:text-base xlarge:text-lg text-[#F53C59]" aria-describedby="popup">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                version="1.1"
                                viewBox="0 0 16 16"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z"></path>
                              </svg>
                            </span>
                            <span className="lg:text-sm xl:text-base xlarge:text-lg text-[#0042C3]" aria-describedby="popup">
                              <a href="tel:8965823672" className="">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 512 512"
                                  height="1.2em"
                                  width="1.2em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M391 480c-19.52 0-46.94-7.06-88-30-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0 1 28.64-15.2c1-.43 1.93-.84 2.76-1.21 4.95-2.23 12.45-5.6 21.95-2 6.34 2.38 12 7.25 20.86 16 18.17 17.92 43 57.83 52.16 77.43 6.15 13.21 10.22 21.93 10.23 31.71 0 11.45-5.76 20.28-12.75 29.81-1.31 1.79-2.61 3.5-3.87 5.16-7.61 10-9.28 12.89-8.18 18.05 2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47 1.48-1.13 3-2.3 4.59-3.47 10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18 18 9.08 59.11 33.59 77.14 51.78 8.77 8.84 13.66 14.48 16.05 20.81 3.6 9.53.21 17-2 22-.37.83-.78 1.74-1.21 2.75a176.49 176.49 0 0 1-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.42 67.42 0 0 1 391 480z"></path>
                                </svg>
                              </a>
                            </span>
                            <span className="lg:text-sm xl:text-base xlarge:text-lg text-[#F5CE03] cursor-pointer" aria-describedby="popup">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 16 16"
                                height="1.3em"
                                width="1.3em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path fillRule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Current time indicator as a horizontal line */}
                  {day.isToday && (
                    <div
                      className="rbc-current-time-indicator absolute left-0 right-0 h-0.5 bg-red-500"
                      style={{ top: `${currentTimePosition}%` }}
                    ></div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      );
    };
    


export default Week