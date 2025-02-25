import React, { useState, useEffect, useRef } from 'react';
import PrimaryButton from '../Components/PrimaryButton';
import { RiEditBoxLine } from "react-icons/ri";
import { RiEyeLine } from "react-icons/ri";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoMdPersonAdd } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


// Function to get initials from name
const getInitials = (name) => {
  const nameParts = name.trim().split(' ');
  if (nameParts.length === 1) {
    return nameParts[0].charAt(0).toUpperCase();
  }
  return (nameParts[0].charAt(0) + nameParts[nameParts.length - 1].charAt(0)).toUpperCase();
};

// Modal Component
const Modal = ({ isOpen, onClose, children, title }) => {
  const modalRef = useRef(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  // Close modal on outside click
  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleOutsideClick}
    >
      <div 
        ref={modalRef}
        className="bg-white rounded-lg p-6 w-full max-w-md max-h-[80vh] overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          < PrimaryButton
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </PrimaryButton>
        </div>
        {children}
      </div>
    </div>
  );
};

const AllPatient = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recordsPerPage, setRecordsPerPage] = useState(12);
  const [patientsList, setPatientsList] = useState([
    { id: '#80762', name: 'Wendi Combs', gender: 'Female', age: 28, blood: 'AB+', treatment: 'Cyclospora', mobile: '0987654321', email: 'test@testing.com', address: '360 Branden Knoll' },
    { id: '#82348', name: 'Reba Fisher', gender: 'Female', age: 59, blood: 'A+', treatment: 'Alphaviruses', mobile: '0987654321', email: 'test@testing.com', address: '806 Je Alley, Robelfurt' },
    { id: '#82894', name: 'Nick Morrow', gender: 'Male', age: 69, blood: 'A+', treatment: 'Thyroid', mobile: '0987654321', email: 'test@testing.com', address: '835 Lorena Stream' },
  ]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editFormData, setEditFormData] = useState({});

  const navigate = useNavigate();

  // Handle Book Appointment
  function handleBookAppoinmentClick() {
    navigate('/doctor/Appointment/bookappointmentform');
  }

  // Delete Patient
  const handleDelete = (patientId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This action will permanently delete the patient. You won’t be able to undo this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedPatients = patientsList.filter(patient => patient.id !== patientId);
        setPatientsList(updatedPatients);
        Swal.fire(
          'Deleted!',
          'The patient has been deleted.',
          'success'
        );
      }
    });
  };

  // View Patient
  const handleView = (patient) => {
    setSelectedPatient(patient);
    setIsViewModalOpen(true);
  };

  // Edit Patient
  const handleEdit = (patient) => {
    setSelectedPatient(patient);
    setEditFormData({ ...patient });
    setIsEditModalOpen(true);
  };

  // Handle Edit Form Change
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prev => ({ ...prev, [name]: value }));
  };

 // Handle Edit Submit with SweetAlert2
 const handleEditSubmit = (e) => {
  e.preventDefault();
  const updatedPatients = patientsList.map(patient => 
    patient.id === editFormData.id ? { ...editFormData } : patient
  );
  setPatientsList(updatedPatients);
  setIsEditModalOpen(false);
  Swal.fire({
    title: 'Success!',
    text: 'Patient details have been updated successfully.',
    icon: 'success',
    confirmButtonText: 'OK',
    timer: 1500, // Auto-close after 1.5 seconds
    timerProgressBar: true,
  });
};
  // Filter patients
  const filteredPatients = patientsList.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 gap-3 w-[95%] lg:ms-[70px]">
      <div className="bg-white rounded-lg">
        {/* Card Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h5 className="text-lg font-semibold">Patients List</h5>
          <PrimaryButton 
            className='btn-sm flex justify-center items-center gap-3' 
            onClick={handleBookAppoinmentClick}
          >
            <IoMdPersonAdd /> Add Patient
          </PrimaryButton>
        </div>

        {/* Card Body */}
        <div className="p-4">
          {/* Table Controls */}
          <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
            <div className="flex items-center gap-2">
              <label className="text-sm">Display</label>
              <select
                className="border rounded p-1 text-sm bg-white"
                value={recordsPerPage}
                onChange={(e) => setRecordsPerPage(Number(e.target.value))}
              >
                <option value="12">12</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
              <span className="text-sm">Records Per Page</span>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm">Search:</label>
              <input
                type="search"
                className="border rounded p-1 text-sm w-full md:w-64 bg-white text-black"
                placeholder="Search patients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-2 text-left">No.</th>
                  <th className="p-2 text-left">Patient Name</th>
                  <th className="p-2 text-left">Gender</th>
                  <th className="p-2 text-left">Age</th>
                  <th className="p-2 text-left">Blood Group</th>
                  <th className="p-2 text-left">Treatment</th>
                  <th className="p-2 text-left">Mobile</th>
                  <th className="p-2 text-left">Email</th>
                  <th className="p-2 text-left">Address</th>
                  <th className="p-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredPatients.slice(0, recordsPerPage).map((patient, index) => (
                  <tr key={patient.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-2">{patient.id}</td>
                    <td className="p-2 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center mr-2 shadow">
                        {getInitials(patient.name)}
                      </div>
                      {patient.name}
                    </td>
                    <td className="p-2">
                      <span
                        className={`px-2 py-1 rounded text-xs ${patient.gender === 'Female'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-blue-100 text-blue-800'
                          }`}
                      >
                        {patient.gender}
                      </span>
                    </td>
                    <td className="p-2">{patient.age}</td>
                    <td className="p-2">{patient.blood}</td>
                    <td className="p-2">{patient.treatment}</td>
                    <td className="p-2">{patient.mobile}</td>
                    <td className="p-2">{patient.email}</td>
                    <td className="p-2">{patient.address}</td>
                    <td className="p-2">
                      <div className="flex gap-1">
                        <button
                          className="text-red-500 border border-red-500 rounded p-1 hover:bg-red-50"
                          title="Delete"
                          onClick={() => handleDelete(patient.id)}
                        >
                          <RiDeleteBinLine />
                        </button>
                        <button
                          className="text-green-500 border border-green-500 rounded p-1 hover:bg-green-50"
                          title="Edit Patient Details"
                          onClick={() => handleEdit(patient)}
                        >
                          <RiEditBoxLine />
                        </button>
                        <button
                          className="text-blue-500 border border-blue-500 rounded p-1 hover:bg-blue-50"
                          title="View Dashboard"
                          onClick={() => handleView(patient)}
                        >
                          <RiEyeLine />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col md:flex-row justify-between mt-4 text-sm">
            <div>Showing Page 1 of 1</div>
            <div className="flex gap-2 mt-2 md:mt-0">
              <button className="px-3 py-1 border rounded text-gray-500 cursor-not-allowed">Previous</button>
              <button className="px-3 py-1 border rounded bg-primary text-white">1</button>
              <button className="px-3 py-1 border rounded text-gray-500 cursor-not-allowed">Next</button>
            </div>
          </div>
        </div>
      </div>

      {/* View Patient Modal */}
      <Modal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        title="Patient Details"
      >
        {selectedPatient && (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center shadow">
                {getInitials(selectedPatient.name)}
              </div>
              <h4 className="font-medium">{selectedPatient.name}</h4>
            </div>
            <p><strong>ID:</strong> {selectedPatient.id}</p>
            <p><strong>Gender:</strong> {selectedPatient.gender}</p>
            <p><strong>Age:</strong> {selectedPatient.age}</p>
            <p><strong>Blood Group:</strong> {selectedPatient.blood}</p>
            <p><strong>Treatment:</strong> {selectedPatient.treatment}</p>
            <p><strong>Mobile:</strong> {selectedPatient.mobile}</p>
            <p><strong>Email:</strong> {selectedPatient.email}</p>
            <p><strong>Address:</strong> {selectedPatient.address}</p>
          </div>
        )}
      </Modal>

      {/* Edit Patient Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Edit Patient"
      >
        {selectedPatient && (
          <form onSubmit={handleEditSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={editFormData.name}
                onChange={handleEditChange}
                className="w-full border rounded p-2 bg-white text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Gender</label>
              <select
                name="gender"
                value={editFormData.gender}
                onChange={handleEditChange}
                className="w-full border rounded p-2 bg-white text-black"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Age</label>
              <input
                type="number"
                name="age"
                value={editFormData.age}
                onChange={handleEditChange}
                className="w-full border rounded p-2 bg-white text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Blood Group</label>
              <input
                type="text"
                name="blood"
                value={editFormData.blood}
                onChange={handleEditChange}
                className="w-full border rounded p-2 bg-white text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Treatment</label>
              <input
                type="text"
                name="treatment"
                value={editFormData.treatment}
                onChange={handleEditChange}
                className="w-full border rounded p-2 bg-white text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Mobile</label>
              <input
                type="text"
                name="mobile"
                value={editFormData.mobile}
                onChange={handleEditChange}
                className="w-full border rounded p-2 bg-white text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={editFormData.email}
                onChange={handleEditChange}
                className="w-full border rounded p-2 bg-white text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Address</label>
              <input
                type="text"
                name="address"
                value={editFormData.address}
                onChange={handleEditChange}
                className="w-full border rounded p-2 bg-white text-black"
              />
            </div>
            <div className="flex justify-end gap-2">
              <PrimaryButton
                type="button"
                onClick={() => setIsEditModalOpen(false)}
                className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </PrimaryButton>
              <PrimaryButton
                type="submit"
                className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark"
              >
                Save Changes
              </PrimaryButton>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
};

export default AllPatient;