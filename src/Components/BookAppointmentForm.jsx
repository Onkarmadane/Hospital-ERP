import React, { useState } from 'react';
import PrimaryButton from './PrimaryButton'
import Heading from './Heading';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import SecondaryButton from './SecondaryButton'

const BookAppointmentForm = () => {
  const navigate = useNavigate(); // Get navigation function from React Router
  const [formData, setFormData] = useState({
    patientName: '',
    date: '',
    time: '',
    reason: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Log form data for debugging

    // Show success alert with SweetAlert2
    Swal.fire({
      title: 'Appointment Booked!',
      text: `Appointment for ${formData.patientName} has been successfully scheduled on ${formData.date} at ${formData.time}.`,
      icon: 'success',
      confirmButtonText: 'OK',
      timer: 2000, // Auto-close after 2 seconds
      timerProgressBar: true,
    });
  };
  const goBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="h-screen w-[95%] lg:ms-[70px] text-black">
      <div className="flex items-center justify-between p-4 border-b">
        <h5 className="text-lg font-semibold">Book Appointments</h5>
        {/* <PrimaryButton >Book Appointment</PrimaryButton> */}
      </div>
      {/* <Heading title="Book Appointment" className=" text-2xl font-semibold"/> */}
      {/* <div className=" bg-gradient-to-r to-[#77db8f] from-blue-800 text-white p-4 rounded-t-lg">
              <h5 className=" text-2xl font-semibold">Book Appointment</h5>
            </div> */}
      <div className="row gx-3">
        <div className="col-sm-12">
          <div className="bg-white">
            <div className=" p-7">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="mb-4">
                    <label htmlFor="a1" className="block text-gray-700 font-medium mb-2">
                      Patient Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border border-blue-200 rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-blue-200 focus:outline-none"
                      id="a1"
                      placeholder="Enter fullname"
                      value={formData.patientName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="a2" className="block text-gray-700 font-medium mb-2">
                      Patient Email
                    </label>
                    <input
                      type="email"
                      className="w-full p-3 border border-blue-200 rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-blue-200 focus:outline-none"
                      id="a2"
                      placeholder="Enter email address"
                      value={formData.patientEmail}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="a3" className="block text-gray-700 font-medium mb-2">
                      Gender
                    </label>
                    <select
                      className="w-full p-3 border border-blue-200 rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-blue-200 focus:outline-none"
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
                    <label htmlFor="a4" className="block text-gray-700 font-medium mb-2">
                      Age
                    </label>
                    <input
                      type="number"
                      className="w-full p-3 border border-blue-200 rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-blue-200 focus:outline-none"
                      id="a4"
                      placeholder="Enter age"
                      value={formData.age}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="a5" className="block text-gray-700 font-medium mb-2">
                      Patient Phone
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border border-blue-200 rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-blue-200 focus:outline-none"
                      id="a5"
                      placeholder="Enter phone number"
                      value={formData.patientPhone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="a6" className="block text-gray-700 font-medium mb-2">
                      Select Date
                    </label>
                    <input
                      type="date"
                      className="w-full p-3 border border-blue-200 rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-blue-200 focus:outline-none"
                      id="a6"
                      value={formData.date}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="a7" className="block text-gray-700 font-medium mb-2">
                      Select Time
                    </label>
                    <input
                      type="time"
                      className="w-full p-3 border border-blue-200 rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-blue-200 focus:outline-none"
                      id="a7"
                      value={formData.time}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="a8" className="block text-gray-700 font-medium mb-2">
                      Specialist Doctor
                    </label>
                    <select
                      className="w-full p-3 border border-blue-200 rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-blue-200 focus:outline-none"
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
                    <label htmlFor="a9" className="block text-gray-700 font-medium mb-2">
                      Problem
                    </label>
                    <textarea
                      className="w-full p-3 border border-blue-200 rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-blue-200 focus:outline-none h-24"
                      id="a9"
                      placeholder="Enter Problem"
                      value={formData.problem}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="col-span-full flex justify-end gap-4">
                    <SecondaryButton onClick={goBack}
                    >
                      Cancel
                    </SecondaryButton>
                    <PrimaryButton
                      type="submit"
                      className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark"
                    >
                      Book Appointment
                    </PrimaryButton>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointmentForm;