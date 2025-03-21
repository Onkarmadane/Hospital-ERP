import React, { useState } from 'react';
import { RiEditBoxLine, RiSaveLine, RiCloseLine, RiLogoutBoxLine } from 'react-icons/ri';
import Swal from 'sweetalert2';
import Input from '../Components/FormFields/InputField';
import Button from '../Components/Button';
import { Navigate, useNavigate } from 'react-router-dom';

const initialData = {
  name: 'Dr. John Doe',
  photoUrl: 'https://example.com/photo.jpg',
  email: 'johndoe@example.com',
  phone: '123-456-7890',
  address: '123 Main St, City, Country',
  specialization: 'Cardiology',
  experience: '10 years',
  education: 'MD, Harvard Medical School',
};

function Profile() {
  const [profileData, setProfileData] = useState(initialData);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(null);
const navigate = useNavigate();
  const handleEdit = () => {
    setFormData({ ...profileData });
    setIsEditing(true);
  };

  const handleSave = () => {
    setProfileData({ ...formData });
    setIsEditing(false);
    Swal.fire({
      title: 'Success!',
      text: 'Profile updated successfully.',
      icon: 'success',
      timer: 1500,
      timerProgressBar: true,
    });
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to log out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log out!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Logged out!', 'You have been logged out.', 'success').then(() => {
          navigate('/'); // Navigate to root route after success dialog closes
        });
      }
    });
  };
  return (
    <div className="h-screen w-[95%] lg:ms-[70px] text-text mx-auto">
      <ProfileHeader name={profileData.name} photoUrl={profileData.photoUrl} />
      <ProfileInfo
        profileData={profileData}
        formData={formData}
        isEditing={isEditing}
        handleInputChange={handleInputChange}
      />
      <div className="mt-4 flex justify-between items-center mx-auto">
        <div>
          {isEditing ? (
            <div className="flex gap-2">
              <Button
                onClick={handleSave}
                // className="flex items-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                <RiSaveLine className="mr-2" /> Save
              </Button>
              <Button
              variant='secondary'
                onClick={handleCancel}
                // className="flex items-center px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                <RiCloseLine className="mr-2" /> Cancel
              </Button>
            </div>
          ) : (
            <Button
              onClick={handleEdit}
              className="flex items-center px-4 py-2 bg-blue-500 text-white rounded "
            >
              <RiEditBoxLine className="mr-2" /> Edit
            </Button>
          )}
        </div>
        <Button
        variant='secondary'
          onClick={handleLogout}
        //   className="flex items-center px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          <RiLogoutBoxLine className="mr-2" /> Logout
        </Button>
      </div>
    </div>
  );
}

function ProfileHeader({ name, photoUrl }) {
  return (
    <div className="flex items-center mb-4">
      <img src={photoUrl} alt={name} className="w-16 h-16 rounded-full mr-4" />
      <h2 className="text-2xl font-bold">{name}</h2>
    </div>
  );
}

function ProfileInfo({ profileData, formData, isEditing, handleInputChange }) {
  const personalFields = [
    { label: 'Email', name: 'email', type: 'email' },
    { label: 'Phone', name: 'phone', type: 'tel' },
    { label: 'Address', name: 'address', type: 'text' },
  ];

  const professionalFields = [
    { label: 'Specialization', name: 'specialization', type: 'text' },
    { label: 'Experience', name: 'experience', type: 'text' },
    { label: 'Education', name: 'education', type: 'text' },
  ];

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {personalFields.map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium text-text">
                {field.label}
              </label>
              {isEditing ? (
                <Input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                //   className="border-primary focus:border-primary focus:ring-2 focus:ring-primary bg-background"
                />
              ) : (
                <p className="mt-1">{profileData[field.name]}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Professional Information</h3>
        <div className="">
          {professionalFields.map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium text-text">
                {field.label}
              </label>
              {isEditing ? (
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  className="border-primary focus:border-primary focus:ring-2 focus:ring-primary bg-background"
                />
              ) : (
                <p className="mt-1">{profileData[field.name]}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile; 