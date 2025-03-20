import React, { useState } from 'react';
import Button from './Button';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { CiBookmarkCheck } from "react-icons/ci";
// import input from './FormFields/inputField';
import { MdOutlineClose } from "react-icons/md";
import Heading from './Heading';
const BookAppointmentForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    patientName: '',
    patientEmail: '',
    gender: '0',
    age: '',
    patientPhone: '',
    date: '',
    time: '',
    specialist: '0',
    problem: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    Swal.fire({
      title: 'Appointment Booked!',
      text: `Appointment for ${formData.patientName} has been successfully scheduled on ${formData.date} at ${formData.time}.`,
      icon: 'success',
      confirmButtonText: 'OK',
      timer: 2000,
      timerProgressBar: true,
    });
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className=" w-[95%] lg:ms-[70px] text-text min-h-screen">
        {/* <div className="flex items-center justify-between p-4 border-b"> */}
          <Heading className='flex justify-start p-4'>Book Appointments</Heading>
        {/* </div> */}
        <div className="bg-background p-7">
          <form onSubmit={handleSubmit} className="space-y-6 bg-background">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="mb-4">
                <label htmlFor="a1" className="block text-text font-medium mb-2">
                  Patient Name
                </label>
                <input
                  type="text"
                  name="patientName"
                  className="w-full p-3 border border-primary rounded-lg bg-background focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                  id="a1"
                  placeholder="Enter fullname"
                  value={formData.patientName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="a2" className="block text-text font-medium mb-2">
                  Patient Email
                </label>
                <input
                  type="email"
                  name="patientEmail"
                  className="w-full p-3 border border-primary rounded-lg bg-background focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                  id="a2"
                  placeholder="Enter email address"
                  value={formData.patientEmail}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="a3" className="block text-text font-medium mb-2">
                  Gender
                </label>
                <select
                  name="gender"
                  className="w-full p-3 border border-primary rounded-lg bg-background focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                  id="a3"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="0">Select</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="a4" className="block text-text font-medium mb-2">
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  className="w-full p-3 border border-primary rounded-lg bg-background focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                  id="a4"
                  placeholder="Enter age"
                  value={formData.age}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="a5" className="block text-text font-medium mb-2">
                  Patient Phone
                </label>
                <input
                  type="text"
                  name="patientPhone"
                  className="w-full p-3 border border-primary rounded-lg bg-background focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                  id="a5"
                  placeholder="Enter phone number"
                  value={formData.patientPhone}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="a6" className="block text-text font-medium mb-2">
                  Select Date
                </label>
                <input
                  type="date"
                  name="date"
                  className="w-full p-3 border border-primary rounded-lg bg-background focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                  id="a6"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="a7" className="block text-text font-medium mb-2">
                  Select Time
                </label>
                <input
                  type="time"
                  name="time"
                  className="w-full p-3 border border-primary rounded-lg text-text bg-background focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                  id="a7"
                  value={formData.time}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="a8" className="block text-text font-medium mb-2">
                  Specialist Doctor
                </label>
                <select
                  name="specialist"
                  className="w-full p-3 border border-primary rounded-lg bg-background focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                  id="a8"
                  value={formData.specialist}
                  onChange={handleChange}
                >
                  <option value="0">Select</option>
                  <option value="1">Gynecologist</option>
                  <option value="2">Psychiatrists</option>
                  <option value="3">Surgeon</option>
                  <option value="4">Urologist</option>
                  <option value="5">Paediatrician</option>
                </select>
              </div>
              <div className="mb-4 col-span-full">
                <label htmlFor="a9" className="block text-text font-medium mb-2">
                  Problem
                </label>
                <textarea
                  name="problem"
                  className="w-full p-3 border border-primary rounded-lg bg-background  focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none h-24"
                  id="a9"
                  placeholder="Enter Problem"
                  value={formData.problem}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="col-span-full flex justify-end gap-4">
                <Button variant="secondary" size="lg" onClick={goBack}>
                <MdOutlineClose/> Cancel
                </Button>
                <Button variant="primary" size="lg" type="submit" className='text-white'>
                  <CiBookmarkCheck /> Book Appointment
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* </div > */}
    </>
  );
};

export default BookAppointmentForm;