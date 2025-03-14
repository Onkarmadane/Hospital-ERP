import React, { useState } from 'react';
import Button from '../Components/Button';
import Table from '../Components/Table';
import { MdOutlineAdd } from "react-icons/md";
import Swal from 'sweetalert2';
import BackButton from '../Components/BackButton';
import { MdOutlineClose } from "react-icons/md";
import Modal from '../Components/Modal';
import { BiSave } from "react-icons/bi";
import { RiDeleteBinLine, RiEditBoxLine, RiEyeLine, RiSaveLine, RiCloseLine } from 'react-icons/ri';
import { GiMedicines } from "react-icons/gi";
import { FaPills } from 'react-icons/fa';
import Search from '../Components/Search';
import Input from '../Components/FormFields/InputField';

function MedicineSetup() {
    const [activeTab, setActiveTab] = useState('medicine');
    const [searchTerm, setSearchTerm] = useState('');
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedMedicine, setSelectedMedicine] = useState(null);
    const [editFormData, setEditFormData] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [medicines, setMedicines] = useState([]);
    const [formData, setFormData] = useState({
        medicineName: '',
        genericName: '',
        dosage: '',
        unit: '',
        when: '',
        frequency: '',
        notes: '',
        medicineType: '',
    });

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newMedicine = {
            id: Date.now(),
            medicineName: formData.medicineName,
            genericName: formData.genericName,
            dosage: formData.dosage,
            unit: formData.unit,
            when: formData.when,
            frequency: formData.frequency,
            notes: formData.notes,
            medicineType: formData.medicineType,
        };
        setMedicines((prevMedicines) => [...prevMedicines, newMedicine]);
        setFormData({
            medicineName: '',
            genericName: '',
            dosage: '',
            unit: '',
            when: '',
            frequency: '',
            notes: '',
            medicineType: '',
        });
        closeModal();
        Swal.fire({
            title: 'Medicine Added Successfully',
            icon: 'success',
        });
    };

    const modalFooter = (
        <>
            <Button variant="secondary" onClick={closeModal} >
                <RiCloseLine className="inline" /> Cancel
            </Button>
            <Button variant="primary" onClick={handleSubmit} className='text-white'>
                <RiSaveLine className="inline" /> Add
            </Button>
        </>
    );

    const [medicineData, setMedicineData] = useState([
        { id: 1, MedicineName: "BASUGINE INJ VIAL 10...", GenericName: "INSULIN GLARGINE 100 IU", Dosage: "", Unit: "", When: "nan", Frequency: "", Notes: "nan", MedicineType: "INJECTION" },
        { id: 2, MedicineName: "BASALOG INJ VIAL 100...", GenericName: "INSULIN GLARGINE 100 IU", Dosage: "", Unit: "", When: "nan", Frequency: "", Notes: "nan", MedicineType: "INJECTION" },
        { id: 2, MedicineName: "BASALOG INJ VIAL 100...", GenericName: "INSULIN GLARGINE 100 IU", Dosage: "", Unit: "", When: "nan", Frequency: "", Notes: "nan", MedicineType: "INJECTION" },
        { id: 2, MedicineName: "BASALOG INJ VIAL 100...", GenericName: "INSULIN GLARGINE 100 IU", Dosage: "", Unit: "", When: "nan", Frequency: "", Notes: "nan", MedicineType: "INJECTION" },
        { id: 2, MedicineName: "BASALOG INJ VIAL 100...", GenericName: "INSULIN GLARGINE 100 IU", Dosage: "", Unit: "", When: "nan", Frequency: "", Notes: "nan", MedicineType: "INJECTION" },
        { id: 2, MedicineName: "BASALOG INJ VIAL 100...", GenericName: "INSULIN GLARGINE 100 IU", Dosage: "", Unit: "", When: "nan", Frequency: "", Notes: "nan", MedicineType: "INJECTION" },
        { id: 2, MedicineName: "BASALOG INJ VIAL 100...", GenericName: "INSULIN GLARGINE 100 IU", Dosage: "", Unit: "", When: "nan", Frequency: "", Notes: "nan", MedicineType: "INJECTION" },
        { id: 2, MedicineName: "BASALOG INJ VIAL 100...", GenericName: "INSULIN GLARGINE 100 IU", Dosage: "", Unit: "", When: "nan", Frequency: "", Notes: "nan", MedicineType: "INJECTION" },
        { id: 2, MedicineName: "BASALOG INJ VIAL 100...", GenericName: "INSULIN GLARGINE 100 IU", Dosage: "", Unit: "", When: "nan", Frequency: "", Notes: "nan", MedicineType: "INJECTION" },
        { id: 2, MedicineName: "BASALOG INJ VIAL 100...", GenericName: "INSULIN GLARGINE 100 IU", Dosage: "", Unit: "", When: "nan", Frequency: "", Notes: "nan", MedicineType: "INJECTION" },
        { id: 2, MedicineName: "BASALOG INJ VIAL 100...", GenericName: "INSULIN GLARGINE 100 IU", Dosage: "", Unit: "", When: "nan", Frequency: "", Notes: "nan", MedicineType: "INJECTION" },
        { id: 2, MedicineName: "BASALOG INJ VIAL 100...", GenericName: "INSULIN GLARGINE 100 IU", Dosage: "", Unit: "", When: "nan", Frequency: "", Notes: "nan", MedicineType: "INJECTION" },
        { id: 2, MedicineName: "BASALOG INJ VIAL 100...", GenericName: "INSULIN GLARGINE 100 IU", Dosage: "", Unit: "", When: "nan", Frequency: "", Notes: "nan", MedicineType: "INJECTION" },
        // Add the rest of your static data here...
    ]);

    const [batchData, setBatchData] = useState([
        { id: 1, BatchNo: "PARA202301", Medicine: "Paracetamol", BatchCreationDate: "2023-12-15", ManufactureDate: "2023-12-10", ExpiryDate: "2025-12-31" },
        { id: 2, BatchNo: "IBU202302", Medicine: "Ibuprofen", BatchCreationDate: "2024-01-15", ManufactureDate: "2024-01-10", ExpiryDate: "2025-06-30" },
        { id: 2, BatchNo: "IBU202302", Medicine: "Ibuprofen", BatchCreationDate: "2024-01-15", ManufactureDate: "2024-01-10", ExpiryDate: "2025-06-30" },
        { id: 2, BatchNo: "IBU202302", Medicine: "Ibuprofen", BatchCreationDate: "2024-01-15", ManufactureDate: "2024-01-10", ExpiryDate: "2025-06-30" },
        { id: 2, BatchNo: "IBU202302", Medicine: "Ibuprofen", BatchCreationDate: "2024-01-15", ManufactureDate: "2024-01-10", ExpiryDate: "2025-06-30" },
        { id: 2, BatchNo: "IBU202302", Medicine: "Ibuprofen", BatchCreationDate: "2024-01-15", ManufactureDate: "2024-01-10", ExpiryDate: "2025-06-30" },
        { id: 2, BatchNo: "IBU202302", Medicine: "Ibuprofen", BatchCreationDate: "2024-01-15", ManufactureDate: "2024-01-10", ExpiryDate: "2025-06-30" },
        { id: 2, BatchNo: "IBU202302", Medicine: "Ibuprofen", BatchCreationDate: "2024-01-15", ManufactureDate: "2024-01-10", ExpiryDate: "2025-06-30" },
        { id: 2, BatchNo: "IBU202302", Medicine: "Ibuprofen", BatchCreationDate: "2024-01-15", ManufactureDate: "2024-01-10", ExpiryDate: "2025-06-30" },
        { id: 2, BatchNo: "IBU202302", Medicine: "Ibuprofen", BatchCreationDate: "2024-01-15", ManufactureDate: "2024-01-10", ExpiryDate: "2025-06-30" },
        { id: 2, BatchNo: "IBU202302", Medicine: "Ibuprofen", BatchCreationDate: "2024-01-15", ManufactureDate: "2024-01-10", ExpiryDate: "2025-06-30" },
        { id: 2, BatchNo: "IBU202302", Medicine: "Ibuprofen", BatchCreationDate: "2024-01-15", ManufactureDate: "2024-01-10", ExpiryDate: "2025-06-30" },
        { id: 2, BatchNo: "IBU202302", Medicine: "Ibuprofen", BatchCreationDate: "2024-01-15", ManufactureDate: "2024-01-10", ExpiryDate: "2025-06-30" },
        { id: 2, BatchNo: "IBU202302", Medicine: "Ibuprofen", BatchCreationDate: "2024-01-15", ManufactureDate: "2024-01-10", ExpiryDate: "2025-06-30" },
        { id: 2, BatchNo: "IBU202302", Medicine: "Ibuprofen", BatchCreationDate: "2024-01-15", ManufactureDate: "2024-01-10", ExpiryDate: "2025-06-30" },
        { id: 2, BatchNo: "IBU202302", Medicine: "Ibuprofen", BatchCreationDate: "2024-01-15", ManufactureDate: "2024-01-10", ExpiryDate: "2025-06-30" },
        // Add the rest of your static data here...
    ]);

    const medicineColumns = [
        { header: 'Medicine Name', accessor: 'MedicineName' },
        { header: 'Generic Name', accessor: 'GenericName', className: 'hidden md:table-cell' },
        { header: 'Dosage', accessor: 'Dosage', className: 'hidden lg:table-cell' },
        { header: 'Unit', accessor: 'Unit', className: 'hidden lg:table-cell' },
        { header: 'When', accessor: 'When', className: 'hidden xl:table-cell' },
        { header: 'Frequency', accessor: 'Frequency', className: 'hidden xl:table-cell' },
        { header: 'Notes', accessor: 'Notes', className: 'hidden 2xl:table-cell' },
        { header: 'Medicine Type', accessor: 'MedicineType', className: 'hidden md:table-cell' },
        {
            header: 'Action',
            accessor: 'Action',
            Cell: ({ row }) => (
                <div className="flex flex-col sm:flex-row gap-1">
                    <button className="text-red-500 border border-red-500 rounded p-1 lg:hover:bg-red-50" title="Delete" onClick={() => handleDelete(row.original)}>
                        <RiDeleteBinLine size={16} />
                    </button>
                    <button className="text-green-500 border border-green-500 rounded p-1 lg:hover:bg-green-50" title="Edit Details" onClick={() => handleEdit(row.original)}>
                        <RiEditBoxLine size={16} />
                    </button>
                    <button className="text-blue-500 border border-blue-500 rounded p-1 lg:hover:bg-blue-50" title="View Details" onClick={() => handleView(row.original)}>
                        <RiEyeLine size={16} />
                    </button>
                </div>
            ),
        },
    ];

    const batchColumns = [
        { header: 'Batch No', accessor: 'BatchNo' },
        { header: 'Medicine', accessor: 'Medicine' },
        { header: 'Batch Creation Date', accessor: 'BatchCreationDate', className: 'hidden md:table-cell' },
        { header: 'Manufacture Date', accessor: 'ManufactureDate', className: 'hidden lg:table-cell' },
        { header: 'Expiry Date', accessor: 'ExpiryDate', className: 'hidden lg:table-cell' },
        {
            header: 'Action',
            accessor: 'Action',
            Cell: ({ row }) => (
                <div className="flex flex-col sm:flex-row gap-1">
                    <button className="text-red-500 border border-red-500 rounded p-1 lg:hover:bg-red-50" title="Delete" onClick={() => handleBatchDelete(row.original)}>
                        <RiDeleteBinLine size={16} />
                    </button>
                    <button className="text-green-500 border border-green-500 rounded p-1 lg:hover:bg-green-50" title="Edit Details" onClick={() => handleEdit(row.original)}>
                        <RiEditBoxLine size={16} />
                    </button>
                    <button className="text-blue-500 border border-blue-500 rounded p-1 lg:hover:bg-blue-50" title="View Details" onClick={() => handleView(row.original)}>
                        <RiEyeLine size={16} />
                    </button>
                </div>
            ),
        },
    ];

    const handleDelete = (medicine) => {
        Swal.fire({
            title: 'Are you sure?',
            text: `This action will permanently delete ${medicine.MedicineName}. You won’t be able to undo this!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                setMedicineData(medicineData.filter(item => item.id !== medicine.id));
                Swal.fire('Deleted!', 'The medicine has been deleted.', 'success');
            }
        });
    };

    const handleBatchDelete = (batch) => {
        Swal.fire({
            title: 'Are you sure?',
            text: `This action will permanently delete ${batch.Medicine} (Batch: ${batch.BatchNo}). You won’t be able to undo this!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                setBatchData(batchData.filter(item => item.id !== batch.id));
                Swal.fire('Deleted!', 'The batch has been deleted.', 'success');
            }
        });
    };

    const handleEdit = (item) => {
        setSelectedMedicine(item);
        setEditFormData({ ...item });
        setIsEditModalOpen(true);
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        if (activeTab === 'medicine') {
            const updatedInventory = medicineData.map(item =>
                item.id === selectedMedicine.id ? { ...editFormData } : item
            );
            setMedicineData(updatedInventory);
        } else {
            const updatedBatches = batchData.map(item =>
                item.id === selectedMedicine.id ? { ...editFormData } : item
            );
            setBatchData(updatedBatches);
        }
        setIsEditModalOpen(false);
        Swal.fire({
            title: 'Success!',
            text: 'Details have been updated successfully.',
            icon: 'success',
            confirmButtonText: 'OK',
            timer: 1500,
            timerProgressBar: true,
        });
    };

    const handleView = (item) => {
        setSelectedMedicine(item);
        setIsViewModalOpen(true);
    };

    const filteredInventory = medicineData.filter(item =>
        item.MedicineName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.GenericName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredBatches = batchData.filter(item =>
        item.Medicine.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.BatchNo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="grid grid-cols-1 gap-3 w-[95%] lg:ms-[70px] px-1 mx-auto ">
            {/* Header */}
            <div className="sticky top-0 bg-white">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 border-b pb-3">
                    <BackButton />
                    <h5 className="text-base sm:text-lg md:text-xl font-semibold">Medicine Setup</h5>
                    {/* Single flex container for buttons and search */}
                    <div className="flex flex-row items-center gap-2 sm:gap-3 md:gap-4 flex-wrap w-full sm:w-auto">
                        <Button
                            variant="primary"
                            className={`flex items-center text-white outline-none border-none justify-center gap-2 sm:gap-2.5 md:gap-3 whitespace-nowrap text-sm sm:text-base md:text-lg px-3 py-1.5 sm:px-4 sm:py-2 rounded-md transition-colors ${activeTab === 'batch' ? 'bg-secondary text-green-900 lg:hover:bg-primary duration-300' : 'text-gray-800 font-bold lg:hover:bg-gray-300 shadow-lg'
                                }`}
                            size="sm"
                            onClick={() => setActiveTab('medicine')}
                        >
                            <GiMedicines />  Medicine Name
                        </Button>
                        <Button
                            variant="primary"
                            className={`flex text-white items-center outline-none border-none justify-center gap-2 sm:gap-2.5 md:gap-3 whitespace-nowrap text-sm sm:text-base md:text-lg px-3 py-1.5 sm:px-4 sm:py-2 rounded-md transition-colors ${activeTab === 'medicine' ? 'bg-secondary  text-green-900 lg:hover:bg-primary duration-300' : 'text-gray-800 lg:hover:bg-gray-300 shadow-lg font-bold '
                                }`}
                            size="sm"
                            onClick={() => setActiveTab('batch')}
                        >
                            <FaPills /> Generic Name
                        </Button>
                        {/* Search bar */}
                        <div className="flex items-center gap-2 flex-grow">
                            {/* <label className="text-xs sm:text-sm whitespace-nowrap">Search:</label>
                            <input
                                type="search"
                                className="border rounded p-1 text-xs h-10 sm:text-sm sm:w-1/3 md:w-full lg:w-full bg-white text-black"
                                placeholder="Search By Name or Generic Name..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            /> */}
                            <Input
                                type="search"
                                placeholder="Search By Name or Generic Name..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        {/* <Search/> */}
                        <Button variant="primary" size="sm" onClick={openModal} className="text-white">
                            <MdOutlineAdd size={24} /> Add
                        </Button>

                    </div>
                </div>
            </div>

            {/* Table Content based on Active Tab */}
            <div className="mb-20">
                {activeTab === 'medicine' ? (
                    <Table columns={medicineColumns} data={filteredInventory} className='w-1/2' />
                ) : (
                    <Table columns={batchColumns} data={filteredBatches} className='w-1/2' />
                )}
            </div>

            {/* View Modal */}
            <Modal
                isOpen={isViewModalOpen}
                onClose={() => setIsViewModalOpen(false)}
                title="Medicine Details"
            >
                {selectedMedicine && (
                    <div className="space-y-4">
                        {activeTab === 'medicine' ? (
                            <>
                                <p><strong>Medicine Name:</strong> {selectedMedicine.MedicineName}</p>
                                <p><strong>Generic Name:</strong> {selectedMedicine.GenericName}</p>
                                <p><strong>Dosage:</strong> {selectedMedicine.Dosage || 'N/A'}</p>
                                <p><strong>Unit:</strong> {selectedMedicine.Unit || 'N/A'}</p>
                                <p><strong>When:</strong> {selectedMedicine.When || 'N/A'}</p>
                                <p><strong>Frequency:</strong> {selectedMedicine.Frequency || 'N/A'}</p>
                                <p><strong>Notes:</strong> {selectedMedicine.Notes || 'N/A'}</p>
                                <p><strong>Medicine Type:</strong> {selectedMedicine.MedicineType}</p>
                            </>
                        ) : (
                            <>
                                <p><strong>Batch No:</strong> {selectedMedicine.BatchNo}</p>
                                <p><strong>Medicine:</strong> {selectedMedicine.Medicine}</p>
                                <p><strong>Batch Creation Date:</strong> {selectedMedicine.BatchCreationDate}</p>
                                <p><strong>Manufacture Date:</strong> {selectedMedicine.ManufactureDate}</p>
                                <p><strong>Expiry Date:</strong> {selectedMedicine.ExpiryDate}</p>
                            </>
                        )}
                        {/* <div className="flex justify-end">
                            <Button variant="secondary" onClick={() => setIsViewModalOpen(false)}>
                                Close
                            </Button>
                        </div> */}
                    </div>
                )}
            </Modal>

            {/* Edit Modal */}
            <Modal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                title="Edit Medicine Details"
            >
                {selectedMedicine && (
                    <form onSubmit={handleEditSubmit} className="space-y-4">
                        {activeTab === 'medicine' ? (
                            <>
                                <div>
                                    <label className="block text-sm font-medium">Medicine Name</label>
                                    <input
                                        type="text"
                                        name="MedicineName"
                                        value={editFormData.MedicineName}
                                        onChange={handleEditChange}
                                        className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Generic Name</label>
                                    <input
                                        type="text"
                                        name="GenericName"
                                        value={editFormData.GenericName}
                                        onChange={handleEditChange}
                                        className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Dosage</label>
                                    <input
                                        type="text"
                                        name="Dosage"
                                        value={editFormData.Dosage}
                                        onChange={handleEditChange}
                                        className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Unit</label>
                                    <input
                                        type="text"
                                        name="Unit"
                                        value={editFormData.Unit}
                                        onChange={handleEditChange}
                                        className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">When</label>
                                    <input
                                        type="text"
                                        name="When"
                                        value={editFormData.When}
                                        onChange={handleEditChange}
                                        className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Frequency</label>
                                    <input
                                        type="text"
                                        name="Frequency"
                                        value={editFormData.Frequency}
                                        onChange={handleEditChange}
                                        className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Notes</label>
                                    <input
                                        type="text"
                                        name="Notes"
                                        value={editFormData.Notes}
                                        onChange={handleEditChange}
                                        className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Medicine Type</label>
                                    <input
                                        type="text"
                                        name="MedicineType"
                                        value={editFormData.MedicineType}
                                        onChange={handleEditChange}
                                        className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                                        required
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <div>
                                    <label className="block text-sm font-medium">Batch No</label>
                                    <input
                                        type="text"
                                        name="BatchNo"
                                        value={editFormData.BatchNo}
                                        onChange={handleEditChange}
                                        className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Medicine</label>
                                    <input
                                        type="text"
                                        name="Medicine"
                                        value={editFormData.Medicine}
                                        onChange={handleEditChange}
                                        className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Batch Creation Date</label>
                                    <input
                                        type="date"
                                        name="BatchCreationDate"
                                        value={editFormData.BatchCreationDate}
                                        onChange={handleEditChange}
                                        className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Manufacture Date</label>
                                    <input
                                        type="date"
                                        name="ManufactureDate"
                                        value={editFormData.ManufactureDate}
                                        onChange={handleEditChange}
                                        className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Expiry Date</label>
                                    <input
                                        type="date"
                                        name="ExpiryDate"
                                        value={editFormData.ExpiryDate}
                                        onChange={handleEditChange}
                                        className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                                        required
                                    />
                                </div>
                            </>
                        )}
                        <div className="flex justify-end gap-2">
                            <Button variant="secondary" onClick={() => setIsEditModalOpen(false)}>
                                <MdOutlineClose size={20} /> Cancel
                            </Button>
                            <Button type="submit" variant="primary">
                                <BiSave size={20} /> Save
                            </Button>
                        </div>
                    </form>
                )}
            </Modal>

            {/* Create Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                title="Add New Medicine"
                footer={modalFooter}
            >
                <form id="medicineForm" onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="medicineName" className="block text-sm font-medium">Medicine Name</label>
                        <input
                            type="text"
                            id="medicineName"
                            name="medicineName"
                            value={formData.medicineName}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                            placeholder="Enter medicine name"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="genericName" className="block text-sm font-medium">Generic Name</label>
                        <input
                            type="text"
                            id="genericName"
                            name="genericName"
                            value={formData.genericName}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                            placeholder="Enter generic name"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="dosage" className="block text-sm font-medium">Dosage</label>
                        <input
                            type="text"
                            id="dosage"
                            name="dosage"
                            value={formData.dosage}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                            placeholder="Enter dosage (e.g., 500 mg)"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="unit" className="block text-sm font-medium">Unit</label>
                        <select
                            id="unit"
                            name="unit"
                            value={formData.unit}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                            required
                        >
                            <option value="">Select unit</option>
                            <option value="mg">mg</option>
                            <option value="ml">ml</option>
                            <option value="tablet">Tablet</option>
                            <option value="capsule">Capsule</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="when" className="block text-sm font-medium">When</label>
                        <select
                            id="when"
                            name="when"
                            value={formData.when}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                            required
                        >
                            <option value="">Select timing</option>
                            <option value="morning">Morning</option>
                            <option value="afternoon">Afternoon</option>
                            <option value="evening">Evening</option>
                            <option value="night">Night</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="frequency" className="block text-sm font-medium">Frequency</label>
                        <input
                            type="text"
                            id="frequency"
                            name="frequency"
                            value={formData.frequency}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                            placeholder="e.g., Once daily, Twice daily"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="notes" className="block text-sm font-medium">Notes</label>
                        <textarea
                            id="notes"
                            name="notes"
                            value={formData.notes}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                            placeholder="Add any additional notes"
                            rows="3"
                        />
                    </div>
                    <div>
                        <label htmlFor="medicineType" className="block text-sm font-medium">Medicine Type</label>
                        <select
                            id="medicineType"
                            name="medicineType"
                            value={formData.medicineType}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                            required
                        >
                            <option value="">Select type</option>
                            <option value="tablet">Tablet</option>
                            <option value="capsule">Capsule</option>
                            <option value="syrup">Syrup</option>
                            <option value="injection">Injection</option>
                        </select>
                    </div>
                </form>
            </Modal>
        </div>
    );
}

export default MedicineSetup;