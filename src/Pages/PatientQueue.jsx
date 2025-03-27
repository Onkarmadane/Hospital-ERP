import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Button from '../Components/Button';
import Input from '../Components/FormFields/InputField';
import Table from '../Components/Table';
import Modal from '../Components/Modal';
import { FaList, FaTh } from 'react-icons/fa';
import { RiEditBoxLine, RiEyeLine, RiDeleteBinLine } from 'react-icons/ri';
import { IoMdPersonAdd } from 'react-icons/io';
import { MdOutlineClose } from 'react-icons/md';
import { BiSave } from 'react-icons/bi';
import useConfirmDialog from '../Context/useConfirmDialog';

const getInitials = (name) => {
  const nameParts = name.trim().split(' ');
  if (nameParts.length === 1) {
    return nameParts[0].charAt(0).toUpperCase();
  }
  return (nameParts[0].charAt(0) + nameParts[nameParts.length - 1].charAt(0)).toUpperCase();
};

function PatientQueue() {
  const [searchTerm, setSearchTerm] = useState('');
  const [recordsPerPage, setRecordsPerPage] = useState(12);
  const [viewMode, setViewMode] = useState('list');
  const showConfirmDialog = useConfirmDialog();
  const [patientsList, setPatientsList] = useState([
    { id: '#80762', name: 'Wendi Combs', gender: 'Female', age: 28, blood: 'AB+', treatment: 'Cyclospora', mobile: '0987654321', email: 'test@testing.com', address: '360 Branden Knoll' },
    { id: '#82348', name: 'Reba Fisher', gender: 'Female', age: 59, blood: 'A+', treatment: 'Alphaviruses', mobile: '0987654321', email: 'test@testing.com', address: '806 Je Alley, Robelfurt' },
    { id: '#82348', name: 'Reba Fisher', gender: 'Female', age: 59, blood: 'A+', treatment: 'Alphaviruses', mobile: '0987654321', email: 'test@testing.com', address: '806 Je Alley, Robelfurt' },
    { id: '#82348', name: 'Reba Fisher', gender: 'Female', age: 59, blood: 'A+', treatment: 'Alphaviruses', mobile: '0987654321', email: 'test@testing.com', address: '806 Je Alley, Robelfurt' },
    { id: '#82894', name: 'Nick Morrow', gender: 'Male', age: 69, blood: 'A+', treatment: 'Thyroid', mobile: '0987654321', email: 'test@testing.com', address: '835 Lorena Stream' },
    { id: '#80762', name: 'Wendi Combs', gender: 'Female', age: 28, blood: 'AB+', treatment: 'Cyclospora', mobile: '0987654321', email: 'test@testing.com', address: '360 Branden Knoll' },
    { id: '#82348', name: 'Reba Fisher', gender: 'Female', age: 59, blood: 'A+', treatment: 'Alphaviruses', mobile: '0987654321', email: 'test@testing.com', address: '806 Je Alley, Robelfurt' },
    { id: '#82348', name: 'Reba Fisher', gender: 'Female', age: 59, blood: 'A+', treatment: 'Alphaviruses', mobile: '0987654321', email: 'test@testing.com', address: '806 Je Alley, Robelfurt' },
    { id: '#82348', name: 'Reba Fisher', gender: 'Female', age: 59, blood: 'A+', treatment: 'Alphaviruses', mobile: '0987654321', email: 'test@testing.com', address: '806 Je Alley, Robelfurt' },
    { id: '#82894', name: 'Nick Morrow', gender: 'Male', age: 69, blood: 'A+', treatment: 'Thyroid', mobile: '0987654321', email: 'test@testing.com', address: '835 Lorena Stream' },
    { id: '#80762', name: 'Wendi Combs', gender: 'Female', age: 28, blood: 'AB+', treatment: 'Cyclospora', mobile: '0987654321', email: 'test@testing.com', address: '360 Branden Knoll' },
    { id: '#82348', name: 'Reba Fisher', gender: 'Female', age: 59, blood: 'A+', treatment: 'Alphaviruses', mobile: '0987654321', email: 'test@testing.com', address: '806 Je Alley, Robelfurt' },
    { id: '#82348', name: 'Reba Fisher', gender: 'Female', age: 59, blood: 'A+', treatment: 'Alphaviruses', mobile: '0987654321', email: 'test@testing.com', address: '806 Je Alley, Robelfurt' },
    { id: '#82348', name: 'Reba Fisher', gender: 'Female', age: 59, blood: 'A+', treatment: 'Alphaviruses', mobile: '0987654321', email: 'test@testing.com', address: '806 Je Alley, Robelfurt' },
    { id: '#82894', name: 'Nick Morrow', gender: 'Male', age: 69, blood: 'A+', treatment: 'Thyroid', mobile: '0987654321', email: 'test@testing.com', address: '835 Lorena Stream' },
  ]);

  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editFormData, setEditFormData] = useState({});

  const navigate = useNavigate();

  //   useEffect(() => {
  //     fetch('../data.json')
  //       .then((response) => response.json())
  //       .then((data) => setPatientsList(data.patientQueue))
  //       .catch((error) => console.error('Error fetching data:', error));
  //   }, []);

  const handleBookAppoinmentClick = () => {
    navigate('/doctor/Appointment/bookappointmentform');
  };

  const handleDelete = (patientId) => {
    showConfirmDialog({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      confirmButtonText: 'Yes, delete it!',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#77db8e9c',
      onConfirm: () => {
        // Delete logic
        console.log('Item deleted');
        Swal.fire({
          title: 'Deleted!', text: 'Your item has been deleted.', icon: 'success', confirmButtonColor: '#77db8f', // Set background color
          customClass: {
            confirmButton: 'no-focus-border' // Custom class to remove border/focus
          },
          buttonsStyling: true, // Keep default styling, override only what we need
          timer: 1500,
        });
      },
      onCancel: () => {
        console.log('Delete canceled');
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedPatients = patientsList.filter((patient) => patient.id !== patientId);
        setPatientsList(updatedPatients);
        Swal.fire({
          title: 'Deleted!', text: 'The patient has been deleted.', icon: 'success', confirmButtonColor: '#77db8f', // Set background color
          customClass: {
            confirmButton: 'no-focus-border' // Custom class to remove border/focus
          },
          buttonsStyling: true, // Keep default styling, override only what we need
          timer: 1500
        });
      }
    });
  };

  const handleView = (patient) => {
    setSelectedPatient(patient);
    setIsViewModalOpen(true);
  };

  const handleEdit = (patient) => {
    setSelectedPatient(patient);
    setEditFormData({ ...patient });
    setIsEditModalOpen(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedPatients = patientsList.map((patient) =>
      patient.id === editFormData.id ? { ...editFormData } : patient
    );
    setPatientsList(updatedPatients);
    setIsEditModalOpen(false);
    Swal.fire({
      title: 'Success!',
      text: 'Patient details have been updated successfully.',
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: '#77db8f', // Set background color
      customClass: {
        confirmButton: 'no-focus-border' // Custom class to remove border/focus
      },
      buttonsStyling: true, // Keep default styling, override only what we need
      timer: 1500,
      timer: 1500,
      timerProgressBar: true,
    });
  };

  const filteredPatients = patientsList.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    { header: 'No.', accessor: 'id' },
    {
      header: 'Patient Name',
      accessor: 'name',
      Cell: ({ row }) => (
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-2 shadow">
            {getInitials(row.original.name)}
          </div>
          {row.original.name}
        </div>
      ),
    },
    {
      header: 'Gender',
      accessor: 'gender',
      Cell: ({ row }) => (
        <span
          className={`px-2 py-1 rounded text-xs ${row.original.gender === 'Female'
            ? 'bg-yellow-100 text-yellow-800'
            : 'bg-blue-100 text-blue-800'
            }`}
        >
          {row.original.gender}
        </span>
      ),
    },
    { header: 'Age', accessor: 'age' },
    { header: 'Blood Group', accessor: 'blood' },
    { header: 'Treatment', accessor: 'treatment' },
    { header: 'Mobile', accessor: 'mobile' },
    { header: 'Email', accessor: 'email' },
    { header: 'Address', accessor: 'address' },
    {
      header: 'Actions',
      accessor: 'actions',
      Cell: ({ row }) => (
        <div className="flex gap-1">
          <button
            className="text-blue-500 border border-blue-500 rounded p-1 lg:hover:bg-blue-50"
            title="View Dashboard"
            onClick={() => handleView(row.original)}
          >
            <RiEyeLine />
          </button>
          <button
            className="text-green-500 border border-green-500 rounded p-1 lg:hover:bg-green-50"
            title="Edit Patient Details"
            onClick={() => handleEdit(row.original)}
          >
            <RiEditBoxLine />
          </button>
          <button
            className="text-red-500 border border-red-500 rounded p-1 lg:hover:bg-red-50"
            title="Delete"
            onClick={() => handleDelete(row.original.id)}
          >
            <RiDeleteBinLine />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b gap-4">
        <div className="flex items-center gap-2">
          <Input
            type="search"
            className="sm:w-[10px] md:w-[190px] lg:w-full"
            placeholder="Search patients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="flex items-center text-text gap-2">
            <select
              className="border-primary focus:border-primary focus:ring-2 focus:ring-primary bg-background h-9  border rounded-lg focus:outline-none transition-all duration-500 text-sm"
              value={recordsPerPage}
              onChange={(e) => setRecordsPerPage(Number(e.target.value))}
            >
              <option value="12">12</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
            <span className="text-sm">Records / Page</span>
          </div>
        </div>
        <div className="flex items-end gap-2 sm:gap-3 md:gap-4">
          <Button
            variant="primary"
            className={`text-white flex items-center outline-none border-none justify-center gap-2 sm:gap-2.5 md:gap-3 whitespace-nowrap text-sm sm:text-base md:text-lg px-3 py-1.5 sm:px-4 sm:py-2 rounded-md transition-colors ${viewMode === 'list'
              ? 'bg-primary text-white shadow-lg'
              : 'text-white bg-secondary lg:hover:bg-primary duration-300'
              }`}
            size="sm"
            onClick={() => setViewMode('list')}
            title="List View"
          >
            <FaList />
          </Button>
          <Button
            variant="primary"
            className={`text-white flex items-center outline-none border-none justify-center gap-2 sm:gap-2.5 md:gap-3 whitespace-nowrap text-sm sm:text-base md:text-lg px-3 py-1.5 sm:px-4 sm:py-2 rounded-md transition-colors ${viewMode === 'card'
              ? 'bg-primary text-white shadow-lg'
              : 'text-white bg-secondary lg:hover:bg-primary duration-300'
              }`}
            size="sm"
            onClick={() => setViewMode('card')}
            title="Card View"
          >
            <FaTh />
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={handleBookAppoinmentClick}
            className="text-white"
          >
            <IoMdPersonAdd /> Add Patient
          </Button>
        </div>
      </div>

      {/* List or Card View */}
      {viewMode === 'list' ? (
        <Table columns={columns} data={filteredPatients.slice(0, recordsPerPage)} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto mt-4 ">
          {filteredPatients.slice(0, recordsPerPage).map((patient) => (
            <div
              key={patient.id}
              className="bg-background rounded-lg shadow p-4 flex gap-2 border"
            >
              <div className="flex items-center gap-3 flex-1">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow">
                  {getInitials(patient.name)}
                </div>
                <div>
                  <h6 className="font-semibold text-text">{patient.name}</h6>
                  <p className="text-sm text-text">{patient.mobile}</p>
                  <p className="text-sm text-text">{patient.age}</p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <button
                  className="text-blue-500 border border-blue-500 rounded p-1 lg:hover:bg-blue-50"
                  title="View Dashboard"
                  onClick={() => handleView(patient)}
                >
                  <RiEyeLine />
                </button>
                <button
                  className="text-green-500 border border-green-500 rounded p-1 lg:hover:bg-green-50"
                  title="Edit Patient Details"
                  onClick={() => handleEdit(patient)}
                >
                  <RiEditBoxLine />
                </button>
                <button
                  className="text-red-500 border border-red-500 rounded p-1 lg:hover:bg-red-50"
                  title="Delete"
                  onClick={() => handleDelete(patient.id)}
                >
                  <RiDeleteBinLine />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex flex-col md:flex-row justify-between mt-4 text-sm">
        <div>Showing Page 1 of 1</div>
        <div className="flex gap-2 mt-2 md:mt-0">
          <button className="px-3 py-1 border rounded text-gray-500 cursor-not-allowed">
            Previous
          </button>
          <button className="px-3 py-1 border rounded bg-primary text-text">1</button>
          <button className="px-3 py-1 border rounded text-gray-500 cursor-not-allowed">
            Next
          </button>
        </div>
      </div>

      {/* View Patient Modal */}
      <Modal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        title="Patient Details"
        className="w-full max-w-md mx-auto p-4 sm:p-6 z-10"
      >
        {selectedPatient && (
          <div className="space-y-2 text-sm sm:text-base overflow-x-hidden">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow">
                {getInitials(selectedPatient.name)}
              </div>
              <h4 className="font-medium">{selectedPatient.name}</h4>
            </div>
            <p>
              <strong>ID:</strong> {selectedPatient.id}
            </p>
            <p>
              <strong>Gender:</strong> {selectedPatient.gender}
            </p>
            <p>
              <strong>Age:</strong> {selectedPatient.age}
            </p>
            <p>
              <strong>Blood Group:</strong> {selectedPatient.blood}
            </p>
            <p>
              <strong>Treatment:</strong> {selectedPatient.treatment}
            </p>
            <p>
              <strong>Mobile:</strong> {selectedPatient.mobile}
            </p>
            <p>
              <strong>Email:</strong> {selectedPatient.email}
            </p>
            <p>
              <strong>Address:</strong> {selectedPatient.address}
            </p>
          </div>
        )}
      </Modal>

      {/* Edit Patient Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Edit Patient"
        className="w-full max-w-md mx-auto p-4 sm:p-6 z-10"
        footer={
          <div className="flex justify-end gap-2">
            <Button
              variant="secondary"
              type="button"
              size="sm"
              onClick={() => setIsEditModalOpen(false)}
              className="px-3 sm:px-4 py-1 sm:py-2 border rounded text-gray-600 lg:hover:bg-gray-100 text-sm sm:text-base"
            >
              <MdOutlineClose /> Cancel
            </Button>
            <Button
              variant="primary"
              type="submit"
              form="edit-form"
              size="sm"
              className="px-3 sm:px-4 py-1 sm:py-2 bg-primary text-text rounded lg:hover:bg-primary-dark text-sm sm:text-base"
            >
              <BiSave /> Save Changes
            </Button>
          </div>
        }
      >
        {selectedPatient && (
          <form
            id="edit-form"
            onSubmit={handleEditSubmit}
            className="space-y-3 sm:space-y-4 text-sm sm:text-base overflow-x-hidden"
          >
            {Object.entries(editFormData).map(
              ([key, value]) =>
                key !== 'id' && (
                  <div key={key}>
                    <label className="block text-sm font-medium">
                      {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                    </label>
                    {key === 'gender' ? (
                      <select
                        name={key}
                        value={value}
                        onChange={handleEditChange}
                        className="w-full p-3 border border-primary rounded-lg bg-background focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    ) : (
                      <input
                        type={
                          key === 'age'
                            ? 'number'
                            : key === 'email'
                              ? 'email'
                              : 'text'
                        }
                        name={key}
                        value={value}
                        onChange={handleEditChange}
                        className="w-full p-3 border border-primary rounded-lg bg-background focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                      />
                    )}
                  </div>
                )
            )}
          </form>
        )}
      </Modal>
    </div>
  );
}

export default PatientQueue;