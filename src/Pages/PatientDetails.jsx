import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaEdit, FaUser, FaBars } from 'react-icons/fa';
import Button from '../Components/Button';
import BackButton from '../Components/BackButton';
import { FaPlus } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa6";
import { FaHeartbeat, FaCalendarCheck, FaPrescriptionBottle, FaFileMedical, FaFlask } from 'react-icons/fa';
const PatientDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const patientData = location.state?.patient || {
        name: 'Pharmacy Test Member',
        dob: '16 Feb 1999',
        age: '26',
        phone: '8965823672',
        email: 'rishabh.sahu@.com',
        gender: 'Male',
        familyProfiles: [
            'Pharmacy Test Member', 'Rishabh Sahu', 'Rishabh Sahu',
            'Rishabh 1244', 'Rishabh Member',
            'Milind Sir', 'Rishabh Sahu', 'Rupesh Sahu', 'Rishabh Family Test'
        ]
    };

    const [activeTab, setActiveTab] = useState('Profile');
    const [activeHealthTab, setActiveHealthTab] = useState('Appointments');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const isSmall = window.innerWidth < 768; // md breakpoint
            setIsSmallScreen(isSmall);
            setIsSidebarOpen(!isSmall); // Open sidebar by default on large screens
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getInitial = (name) => name.charAt(0).toUpperCase();

    const calculateAge = (dob) => {
        const birthDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    const handleEdit = () => {
        navigate('/doctor/Appointment/patient-form', { state: { patient: patientData } });
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const renderProfileContent = () => (
        <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className='flex  flex-wrap gap-2 items-center'>
                <div className="font-semibold text-text">Patient Name:</div>
                <div>{patientData.name}</div>
            </div>
            <div className='flex  flex-wrap gap-2 items-center'>
                <div className="font-semibold text-text">Date of Birth:</div>
                <div>{patientData.dob}</div>
            </div>
            <div className='flex  flex-wrap gap-2 items-center'>
                <div className="font-semibold text-text">Age:</div>
                <div>{calculateAge(patientData.dob)}</div>
            </div>
            <div className='flex  flex-wrap gap-2 items-center'>
                <div className="font-semibold text-text">Contact Number:</div>
                <div>{patientData.phone}</div>
            </div>
            <div className='flex  flex-wrap gap-2 items-center'>
                <div className="font-semibold text-text">Email:</div>
                <div>{patientData.email || 'Not provided'}</div>
            </div>
            <div className='flex  flex-wrap gap-2 items-center'>
                <div className="font-semibold text-text">Gender:</div>
                <div>{patientData.gender}</div>
            </div>
            <div className="col-span-1 sm:col-span-2">
                <div className="font-semibold text-text">Family Profiles:</div>
                <div className="flex flex-wrap gap-2 mt-2">
                    {patientData.familyProfiles.map((family, index) => (
                        <span key={index} className="bg-secondary px-2 py-1 rounded text-sm text-text">
                            {family}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderHealthBoardContent = () => {
        const healthTabs = [
            { name: 'Appointments', content: renderAppointmentsTab, icon: <FaCalendarCheck /> },
            { name: 'Prescriptions', content: renderPrescriptionsTab, icon: <FaPrescriptionBottle /> },
            { name: 'Certificates', content: renderCertificatesTab, icon: <FaFileMedical /> },
            { name: 'Lab Tests', content: renderLabTestsTab, icon: <FaFlask /> },
        ];

        return (
            <div className="h-full w-full overflow-auto">
                {/* Health Board Sub-Tabs */}
                <div className="flex flex-wrap gap-2  pb-2 mb-4">
                    {healthTabs.map((tab) => (
                        <button
                            key={tab.name}
                            className={`px-3 flex gap-2 items-center py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium ${activeHealthTab === tab.name
                                ? 'border-b-2 border-primary text-primary'
                                : 'text-text lg:hover:text-primary duration-300'
                                }`}
                            onClick={() => setActiveHealthTab(tab.name)}
                            title={tab.name}
                        >
                            {tab.icon}
                            {tab.name}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="mt-4 w-full m-auto">
                    {healthTabs.find((tab) => tab.name === activeHealthTab).content()}
                </div>
            </div>
        );
    };

    const renderAppointmentsTab = () => (
        <div className="h-full">
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-2">
                    <span className="font-bold text-text">Type:</span>
                    <select className="h-9 w-32 border border-gray-300 px-2 rounded-md bg-background text-text focus:outline-none focus:ring-2 focus:ring-blue-400">
                        <option value="upcoming">Upcoming</option>
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <div className="flex items-center gap-2">
                    <label className="text-text font-bold">Doctor:</label>
                    <input type="checkbox" className="w-5 h-5 accent-blue-500 cursor-pointer" />
                </div>
            </div>
            <div className="mt-3 flex items-center justify-center min-h-[50vh]">
                <div className="text-center p-6 max-w-md">
                    <h1 className="text-xl font-bold text-text mb-2">No Slots Available</h1>
                    <p className="text-text">Please check back later or try selecting a different appointment type.</p>
                </div>
            </div>
        </div>
    );

    const renderPrescriptionsTab = () => (
        <div className="h-full flex items-center justify-center min-h-[50vh]">
            <div className="text-center p-6 max-w-md">
                <h1 className="text-xl font-bold text-text mb-2">You don’t have any prescription record</h1>
                <p className="text-text">Tap on "Upload New" to add a prescription.</p>
            </div>
        </div>
    );

    const renderCertificatesTab = () => (
        <div className="h-full flex items-center justify-center min-h-[50vh]">
            <div className="text-center p-6 max-w-md">
                <h1 className="text-xl font-bold text-text mb-2">You don’t have any Certificate</h1>
                <p className="text-text w-[70%] mx-auto">To add Certificates, Tap on the Upload New Button.</p>
            </div>
        </div>
    );

    const renderLabTestsTab = () => (
        <div className="h-full flex items-center justify-center min-h-[50vh]">
            <div className="text-center p-6 max-w-md">
                <h1 className="text-xl font-bold text-text mb-2">You don’t have any labtest</h1>
                <p className="text-text w-[70%] mx-auto">Hey you don't have any labtests</p>
            </div>
        </div>
    );

    return (
        <div className="w-[96%] lg:ms-[50px] text-text px-2">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between  gap-4">
                <div className="flex items-center gap-4 lg:py-2">
                    <BackButton />
                    <h5 className="text-lg font-semibold">Patients Details</h5>
                </div>
                <Button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-200 rounded-full text-white">
                    <FaPlus />
                </Button>
            </div>

            <div className="flex items-center">
                <div className="w-[50px] h-[50px] rounded-full overflow-hidden border flex-shrink-0 my-1 ">
                    <div className="w-full h-full text-xl rounded-full flex justify-center items-center font-bold text-white bg-primary border-none outline-none">
                        {getInitial(patientData.name)}
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-10 flex-1 px-3 sm:text-left">
                    <div className="flex flex-col">
                        <span className="text-lg font-semibold">{patientData.name}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-text">{calculateAge(patientData.dob)} Yrs</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-text">{patientData.gender}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-text">{patientData.phone}</span>
                    </div>
                </div>

            </div>
            <div className="flex my-3 gap-3 text-text">
                <button className={`px-3 flex  gap-3 items-center py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium ${activeTab === 'Profile' ? 'border-b-2  border-primary text-primary' : 'text-text lg:hover:text-primary duration-300 '}whitespace-nowrap text-primary`} onClick={() => { setActiveTab('Profile'); }}><FaUser />Profile</button>
                <button className={`px-3 flex items-center gap-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium ${activeTab === 'Health Board' ? 'border-b-2 border-primary text-primary' : 'text-text lg:hover:text-primary duration-300 '}whitespace-nowrap text-primary`} onClick={() => { setActiveTab('Health Board'); }}><FaClipboardList />Health Board</button>
            </div>
            <div className="w-full">
                {activeTab === 'Profile' && renderProfileContent()}
                {activeTab === 'Health Board' && renderHealthBoardContent()}
            </div>
            {/* </div> */}
        </div>
    );
};

export default PatientDetails;