// import React, { useState } from 'react';
// import Button from '../Components/Button';
// import Table from '../Components/Table';
// import { MdOutlineAdd } from "react-icons/md";
// import { RiDeleteBinLine, RiEditBoxLine, RiEyeLine } from "react-icons/ri";
// import Swal from 'sweetalert2';
// import BackButton from '../Components/BackButton';
// import { MdOutlineClose } from "react-icons/md";
// import Modal from '../Components/Modal';
// import { BiSave } from "react-icons/bi";
// import { MdOutlineInventory } from "react-icons/md";
// import { CiBarcode } from "react-icons/ci";
// import Input from '../Components/FormFields/InputField';
// function Inventory() {
//   const [activeTab, setActiveTab] = useState('medicine');
//   const [inventoryData, setInventoryData] = useState([
//     {
//       id: 1,
//       Medicine: "Paracetamol",
//       BatchNo: "PARA202301",
//       InwardQuantity: 1000,
//       UnitofMeasure: "Tablets",
//       ExpiryDate: "2025-12-31",
//       Price: 0.25,
//       ReceivedDate: "2024-01-15",
//       AvailableBatchQty: 850,
//       TotalAvailableQty: 1200
//     },
//     {
//       id: 2,
//       Medicine: "Paracetamol",
//       BatchNo: "PARA202302",
//       InwardQuantity: 500,
//       UnitofMeasure: "Tablets",
//       ExpiryDate: "2025-11-30",
//       Price: 0.30,
//       ReceivedDate: "2024-02-01",
//       AvailableBatchQty: 450,
//       TotalAvailableQty: 1200
//     },
//     {
//       id: 3,
//       Medicine: "Ibuprofen",
//       BatchNo: "IBU202302",
//       InwardQuantity: 800,
//       UnitofMeasure: "Tablets",
//       ExpiryDate: "2025-06-30",
//       Price: 0.50,
//       ReceivedDate: "2024-03-01",
//       AvailableBatchQty: 700,
//       TotalAvailableQty: 700
//     },
//     {
//       id: 1,
//       Medicine: "Paracetamol",
//       BatchNo: "PARA202301",
//       InwardQuantity: 1000,
//       UnitofMeasure: "Tablets",
//       ExpiryDate: "2025-12-31",
//       Price: 0.25,
//       ReceivedDate: "2024-01-15",
//       AvailableBatchQty: 850,
//       TotalAvailableQty: 1200
//     },
//     {
//       id: 2,
//       Medicine: "Paracetamol",
//       BatchNo: "PARA202302",
//       InwardQuantity: 500,
//       UnitofMeasure: "Tablets",
//       ExpiryDate: "2025-11-30",
//       Price: 0.30,
//       ReceivedDate: "2024-02-01",
//       AvailableBatchQty: 450,
//       TotalAvailableQty: 1200
//     },
//     {
//       id: 3,
//       Medicine: "Ibuprofen",
//       BatchNo: "IBU202302",
//       InwardQuantity: 800,
//       UnitofMeasure: "Tablets",
//       ExpiryDate: "2025-06-30",
//       Price: 0.50,
//       ReceivedDate: "2024-03-01",
//       AvailableBatchQty: 700,
//       TotalAvailableQty: 700
//     },
//     {
//       id: 1,
//       Medicine: "Paracetamol",
//       BatchNo: "PARA202301",
//       InwardQuantity: 1000,
//       UnitofMeasure: "Tablets",
//       ExpiryDate: "2025-12-31",
//       Price: 0.25,
//       ReceivedDate: "2024-01-15",
//       AvailableBatchQty: 850,
//       TotalAvailableQty: 1200
//     },
//     {
//       id: 2,
//       Medicine: "Paracetamol",
//       BatchNo: "PARA202302",
//       InwardQuantity: 500,
//       UnitofMeasure: "Tablets",
//       ExpiryDate: "2025-11-30",
//       Price: 0.30,
//       ReceivedDate: "2024-02-01",
//       AvailableBatchQty: 450,
//       TotalAvailableQty: 1200
//     },
//     {
//       id: 3,
//       Medicine: "Ibuprofen",
//       BatchNo: "IBU202302",
//       InwardQuantity: 800,
//       UnitofMeasure: "Tablets",
//       ExpiryDate: "2025-06-30",
//       Price: 0.50,
//       ReceivedDate: "2024-03-01",
//       AvailableBatchQty: 700,
//       TotalAvailableQty: 700
//     },
//     {
//       id: 1,
//       Medicine: "Paracetamol",
//       BatchNo: "PARA202301",
//       InwardQuantity: 1000,
//       UnitofMeasure: "Tablets",
//       ExpiryDate: "2025-12-31",
//       Price: 0.25,
//       ReceivedDate: "2024-01-15",
//       AvailableBatchQty: 850,
//       TotalAvailableQty: 1200
//     },
//     {
//       id: 2,
//       Medicine: "Paracetamol",
//       BatchNo: "PARA202302",
//       InwardQuantity: 500,
//       UnitofMeasure: "Tablets",
//       ExpiryDate: "2025-11-30",
//       Price: 0.30,
//       ReceivedDate: "2024-02-01",
//       AvailableBatchQty: 450,
//       TotalAvailableQty: 1200
//     },
//     {
//       id: 3,
//       Medicine: "Ibuprofen",
//       BatchNo: "IBU202302",
//       InwardQuantity: 800,
//       UnitofMeasure: "Tablets",
//       ExpiryDate: "2025-06-30",
//       Price: 0.50,
//       ReceivedDate: "2024-03-01",
//       AvailableBatchQty: 700,
//       TotalAvailableQty: 700
//     },
//     {
//       id: 1,
//       Medicine: "Paracetamol",
//       BatchNo: "PARA202301",
//       InwardQuantity: 1000,
//       UnitofMeasure: "Tablets",
//       ExpiryDate: "2025-12-31",
//       Price: 0.25,
//       ReceivedDate: "2024-01-15",
//       AvailableBatchQty: 850,
//       TotalAvailableQty: 1200
//     },
//     {
//       id: 2,
//       Medicine: "Paracetamol",
//       BatchNo: "PARA202302",
//       InwardQuantity: 500,
//       UnitofMeasure: "Tablets",
//       ExpiryDate: "2025-11-30",
//       Price: 0.30,
//       ReceivedDate: "2024-02-01",
//       AvailableBatchQty: 450,
//       TotalAvailableQty: 1200
//     },
//     {
//       id: 3,
//       Medicine: "Ibuprofen",
//       BatchNo: "IBU202302",
//       InwardQuantity: 800,
//       UnitofMeasure: "Tablets",
//       ExpiryDate: "2025-06-30",
//       Price: 0.50,
//       ReceivedDate: "2024-03-01",
//       AvailableBatchQty: 700,
//       TotalAvailableQty: 700
//     },
//     {
//       id: 1,
//       Medicine: "Paracetamol",
//       BatchNo: "PARA202301",
//       InwardQuantity: 1000,
//       UnitofMeasure: "Tablets",
//       ExpiryDate: "2025-12-31",
//       Price: 0.25,
//       ReceivedDate: "2024-01-15",
//       AvailableBatchQty: 850,
//       TotalAvailableQty: 1200
//     },
//     {
//       id: 2,
//       Medicine: "Paracetamol",
//       BatchNo: "PARA202302",
//       InwardQuantity: 500,
//       UnitofMeasure: "Tablets",
//       ExpiryDate: "2025-11-30",
//       Price: 0.30,
//       ReceivedDate: "2024-02-01",
//       AvailableBatchQty: 450,
//       TotalAvailableQty: 1200
//     },
//     {
//       id: 3,
//       Medicine: "Ibuprofen",
//       BatchNo: "IBU202302",
//       InwardQuantity: 800,
//       UnitofMeasure: "Tablets",
//       ExpiryDate: "2025-06-30",
//       Price: 0.50,
//       ReceivedDate: "2024-03-01",
//       AvailableBatchQty: 700,
//       TotalAvailableQty: 700
//     },
//     {
//       id: 1,
//       Medicine: "Paracetamol",
//       BatchNo: "PARA202301",
//       InwardQuantity: 1000,
//       UnitofMeasure: "Tablets",
//       ExpiryDate: "2025-12-31",
//       Price: 0.25,
//       ReceivedDate: "2024-01-15",
//       AvailableBatchQty: 850,
//       TotalAvailableQty: 1200
//     },
//     {
//       id: 2,
//       Medicine: "Paracetamol",
//       BatchNo: "PARA202302",
//       InwardQuantity: 500,
//       UnitofMeasure: "Tablets",
//       ExpiryDate: "2025-11-30",
//       Price: 0.30,
//       ReceivedDate: "2024-02-01",
//       AvailableBatchQty: 450,
//       TotalAvailableQty: 1200
//     },
//     {
//       id: 3,
//       Medicine: "Ibuprofen",
//       BatchNo: "IBU202302",
//       InwardQuantity: 800,
//       UnitofMeasure: "Tablets",
//       ExpiryDate: "2025-06-30",
//       Price: 0.50,
//       ReceivedDate: "2024-03-01",
//       AvailableBatchQty: 700,
//       TotalAvailableQty: 700
//     },
//     {
//       id: 1,
//       Medicine: "Paracetamol",
//       BatchNo: "PARA202301",
//       InwardQuantity: 1000,
//       UnitofMeasure: "Tablets",
//       ExpiryDate: "2025-12-31",
//       Price: 0.25,
//       ReceivedDate: "2024-01-15",
//       AvailableBatchQty: 850,
//       TotalAvailableQty: 1200
//     },
//     {
//       id: 2,
//       Medicine: "Paracetamol",
//       BatchNo: "PARA202302",
//       InwardQuantity: 500,
//       UnitofMeasure: "Tablets",
//       ExpiryDate: "2025-11-30",
//       Price: 0.30,
//       ReceivedDate: "2024-02-01",
//       AvailableBatchQty: 450,
//       TotalAvailableQty: 1200
//     },
//     {
//       id: 3,
//       Medicine: "Ibuprofen",
//       BatchNo: "IBU202302",
//       InwardQuantity: 800,
//       UnitofMeasure: "Tablets",
//       ExpiryDate: "2025-06-30",
//       Price: 0.50,
//       ReceivedDate: "2024-03-01",
//       AvailableBatchQty: 700,
//       TotalAvailableQty: 700
//     },
//     {
//       id: 1,
//       Medicine: "Paracetamol",
//       BatchNo: "PARA202301",
//       InwardQuantity: 1000,
//       UnitofMeasure: "Tablets",
//       ExpiryDate: "2025-12-31",
//       Price: 0.25,
//       ReceivedDate: "2024-01-15",
//       AvailableBatchQty: 850,
//       TotalAvailableQty: 1200
//     },
//     {
//       id: 2,
//       Medicine: "Paracetamol",
//       BatchNo: "PARA202302",
//       InwardQuantity: 500,
//       UnitofMeasure: "Tablets",
//       ExpiryDate: "2025-11-30",
//       Price: 0.30,
//       ReceivedDate: "2024-02-01",
//       AvailableBatchQty: 450,
//       TotalAvailableQty: 1200
//     },
//     {
//       id: 3,
//       Medicine: "Ibuprofen",
//       BatchNo: "IBU202302",
//       InwardQuantity: 800,
//       UnitofMeasure: "Tablets",
//       ExpiryDate: "2025-06-30",
//       Price: 0.50,
//       ReceivedDate: "2024-03-01",
//       AvailableBatchQty: 700,
//       TotalAvailableQty: 700
//     },
//   ]);

//   const [batchData, setBatchData] = useState([
//     {
//       id: 1,
//       BatchNo: "PARA202301",
//       Medicine: "Paracetamol",
//       BatchCreationDate: "2023-12-15",
//       ManufactureDate: "2023-12-10",
//       ExpiryDate: "2025-12-31"
//     },
//     {
//       id: 2,
//       BatchNo: "IBU202302",
//       Medicine: "Ibuprofen",
//       BatchCreationDate: "2024-01-15",
//       ManufactureDate: "2024-01-10",
//       ExpiryDate: "2025-06-30"
//     },
//     {
//       id: 3,
//       BatchNo: "AMO202303",
//       Medicine: "Amoxicillin",
//       BatchCreationDate: "2024-01-05",
//       ManufactureDate: "2024-01-01",
//       ExpiryDate: "2024-11-30"
//     },

//     {
//       id: 1,
//       BatchNo: "PARA202301",
//       Medicine: "Paracetamol",
//       BatchCreationDate: "2023-12-15",
//       ManufactureDate: "2023-12-10",
//       ExpiryDate: "2025-12-31"
//     },
//     {
//       id: 2,
//       BatchNo: "IBU202302",
//       Medicine: "Ibuprofen",
//       BatchCreationDate: "2024-01-15",
//       ManufactureDate: "2024-01-10",
//       ExpiryDate: "2025-06-30"
//     },
//     {
//       id: 3,
//       BatchNo: "AMO202303",
//       Medicine: "Amoxicillin",
//       BatchCreationDate: "2024-01-05",
//       ManufactureDate: "2024-01-01",
//       ExpiryDate: "2024-11-30"
//     },
//     {
//       id: 1,
//       BatchNo: "PARA202301",
//       Medicine: "Paracetamol",
//       BatchCreationDate: "2023-12-15",
//       ManufactureDate: "2023-12-10",
//       ExpiryDate: "2025-12-31"
//     },
//     {
//       id: 2,
//       BatchNo: "IBU202302",
//       Medicine: "Ibuprofen",
//       BatchCreationDate: "2024-01-15",
//       ManufactureDate: "2024-01-10",
//       ExpiryDate: "2025-06-30"
//     },
//     {
//       id: 3,
//       BatchNo: "AMO202303",
//       Medicine: "Amoxicillin",
//       BatchCreationDate: "2024-01-05",
//       ManufactureDate: "2024-01-01",
//       ExpiryDate: "2024-11-30"
//     },
//     {
//       id: 1,
//       BatchNo: "PARA202301",
//       Medicine: "Paracetamol",
//       BatchCreationDate: "2023-12-15",
//       ManufactureDate: "2023-12-10",
//       ExpiryDate: "2025-12-31"
//     },
//     {
//       id: 2,
//       BatchNo: "IBU202302",
//       Medicine: "Ibuprofen",
//       BatchCreationDate: "2024-01-15",
//       ManufactureDate: "2024-01-10",
//       ExpiryDate: "2025-06-30"
//     },
//     {
//       id: 3,
//       BatchNo: "AMO202303",
//       Medicine: "Amoxicillin",
//       BatchCreationDate: "2024-01-05",
//       ManufactureDate: "2024-01-01",
//       ExpiryDate: "2024-11-30"
//     },
//     {
//       id: 1,
//       BatchNo: "PARA202301",
//       Medicine: "Paracetamol",
//       BatchCreationDate: "2023-12-15",
//       ManufactureDate: "2023-12-10",
//       ExpiryDate: "2025-12-31"
//     },
//     {
//       id: 2,
//       BatchNo: "IBU202302",
//       Medicine: "Ibuprofen",
//       BatchCreationDate: "2024-01-15",
//       ManufactureDate: "2024-01-10",
//       ExpiryDate: "2025-06-30"
//     },
//     {
//       id: 3,
//       BatchNo: "AMO202303",
//       Medicine: "Amoxicillin",
//       BatchCreationDate: "2024-01-05",
//       ManufactureDate: "2024-01-01",
//       ExpiryDate: "2024-11-30"
//     },
//     {
//       id: 1,
//       BatchNo: "PARA202301",
//       Medicine: "Paracetamol",
//       BatchCreationDate: "2023-12-15",
//       ManufactureDate: "2023-12-10",
//       ExpiryDate: "2025-12-31"
//     },
//     {
//       id: 2,
//       BatchNo: "IBU202302",
//       Medicine: "Ibuprofen",
//       BatchCreationDate: "2024-01-15",
//       ManufactureDate: "2024-01-10",
//       ExpiryDate: "2025-06-30"
//     },
//     {
//       id: 3,
//       BatchNo: "AMO202303",
//       Medicine: "Amoxicillin",
//       BatchCreationDate: "2024-01-05",
//       ManufactureDate: "2024-01-01",
//       ExpiryDate: "2024-11-30"
//     },
//   ]);

//   const [searchTerm, setSearchTerm] = useState('');
//   const [isViewModalOpen, setIsViewModalOpen] = useState(false);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [isReceiveModalOpen, setIsReceiveModalOpen] = useState(false);
//   const [selectedMedicine, setSelectedMedicine] = useState(null);
//   const [editFormData, setEditFormData] = useState({});
//   const [receiveFormData, setReceiveFormData] = useState({
//     Medicine: '',
//     BatchNo: '',
//     InwardQuantity: '',
//     UnitofMeasure: '',
//     ReceivedDate: '',
//     ExpiryDate: '',
//     Price: ''
//   });

//   // Columns for Medicine Stock Tab
//   const medicineColumns = [
//     { header: 'Medicine', accessor: 'Medicine' },
//     { header: 'Batch No', accessor: 'BatchNo' },
//     { header: 'Inward Qty', accessor: 'InwardQuantity' },
//     { header: 'Unit', accessor: 'UnitofMeasure' },
//     { header: 'Expiry', accessor: 'ExpiryDate' },
//     { header: 'Price', accessor: 'Price' },
//     { header: 'Received', accessor: 'ReceivedDate' },
//     { header: 'Batch Qty', accessor: 'AvailableBatchQty' },
//     { header: 'Total Qty', accessor: 'TotalAvailableQty' },
//     {
//       header: 'Action',
//       accessor: 'Action',
//       Cell: ({ row }) => (
//         <div className="flex gap-1">
//           <button className="text-red-500 border border-red-500 rounded p-1 hover:bg-red-50" title="Delete" onClick={() => handleDelete(row.original)}>
//             <RiDeleteBinLine size={16} />
//           </button>
//           <button className="text-green-500 border border-green-500 rounded p-1 hover:bg-green-50" title="Edit Details" onClick={() => handleEdit(row.original)}>
//             <RiEditBoxLine size={16} />
//           </button>
//           <button className="text-blue-500 border border-blue-500 rounded p-1 hover:bg-blue-50" title="View Details" onClick={() => handleView(row.original)}>
//             <RiEyeLine size={16} />
//           </button>
//         </div>
//       )
//     },
//   ];

//   // Columns for Batch Tab
//   const batchColumns = [
//     { header: 'Batch No', accessor: 'BatchNo' },
//     { header: 'Medicine', accessor: 'Medicine' },
//     { header: 'Batch Creation Date', accessor: 'BatchCreationDate' },
//     { header: 'Manufacture Date', accessor: 'ManufactureDate' },
//     { header: 'Expiry Date', accessor: 'ExpiryDate' },
//     {
//       header: 'Action',
//       accessor: 'Action',
//       Cell: ({ row }) => (
//         <div className="flex gap-1">
//           <button className="text-red-500 border border-red-500 rounded p-1 hover:bg-red-50" title="Delete" onClick={() => handleBatchDelete(row.original)}>
//             <RiDeleteBinLine size={16} />
//           </button>
//           <button className="text-green-500 border border-green-500 rounded p-1 hover:bg-green-50" title="Edit Details" onClick={() => handleEdit(row.original)}>
//             <RiEditBoxLine size={16} />
//           </button>
//           <button className="text-blue-500 border border-blue-500 rounded p-1 hover:bg-blue-50" title="View Details" onClick={() => handleView(row.original)}>
//             <RiEyeLine size={16} />
//           </button>
//         </div>
//       )
//     },
//   ];

//   // Handlers
//   const handleDelete = (medicine) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: `This action will permanently delete ${medicine.Medicine} (Batch: ${medicine.BatchNo}). You won’t be able to undo this!`,
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#d33',
//       cancelButtonColor: '#3085d6',
//       confirmButtonText: 'Yes, delete it!',
//       cancelButtonText: 'Cancel'
//     }).then((result) => {
//       if (result.isConfirmed) {
//         setInventoryData(inventoryData.filter(item => item.id !== medicine.id));
//         Swal.fire('Deleted!', 'The inventory item has been deleted.', 'success');
//       }
//     });
//   };

//   const handleBatchDelete = (batch) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: `This action will permanently delete ${batch.Medicine} (Batch: ${batch.BatchNo}). You won’t be able to undo this!`,
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#d33',
//       cancelButtonColor: '#3085d6',
//       confirmButtonText: 'Yes, delete it!',
//       cancelButtonText: 'Cancel'
//     }).then((result) => {
//       if (result.isConfirmed) {
//         setBatchData(batchData.filter(item => item.id !== batch.id));
//         Swal.fire('Deleted!', 'The batch has been deleted.', 'success');
//       }
//     });
//   };

//   const handleEdit = (item) => {
//     setSelectedMedicine(item);
//     setEditFormData({ ...item });
//     setIsEditModalOpen(true);
//   };

//   const handleEditChange = (e) => {
//     const { name, value } = e.target;
//     setEditFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleEditSubmit = (e) => {
//     e.preventDefault();
//     if (activeTab === 'medicine') {
//       const updatedInventory = inventoryData.map(item =>
//         item.id === selectedMedicine.id ? { ...editFormData } : item
//       );
//       setInventoryData(updatedInventory);
//     } else {
//       const updatedBatches = batchData.map(item =>
//         item.id === selectedMedicine.id ? { ...editFormData } : item
//       );
//       setBatchData(updatedBatches);
//     }
//     setIsEditModalOpen(false);
//     Swal.fire({
//       title: 'Success!',
//       text: 'Details have been updated successfully.',
//       icon: 'success',
//       confirmButtonText: 'OK',
//       timer: 1500,
//       timerProgressBar: true,
//     });
//   };

//   const handleView = (item) => {
//     setSelectedMedicine(item);
//     setIsViewModalOpen(true);
//   };

//   const handleReceiveChange = (e) => {
//     const { name, value } = e.target;
//     setReceiveFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleReceiveSubmit = (e) => {
//     e.preventDefault();
//     const newInventory = {
//       id: inventoryData.length + 1,
//       ...receiveFormData,
//       InwardQuantity: Number(receiveFormData.InwardQuantity),
//       Price: Number(receiveFormData.Price),
//       AvailableBatchQty: Number(receiveFormData.InwardQuantity),
//       TotalAvailableQty: Number(receiveFormData.InwardQuantity)
//     };

//     setInventoryData([...inventoryData, newInventory]);
//     setIsReceiveModalOpen(false);
//     setReceiveFormData({
//       Medicine: '',
//       BatchNo: '',
//       InwardQuantity: '',
//       UnitofMeasure: '',
//       ReceivedDate: '',
//       ExpiryDate: '',
//       Price: ''
//     });

//     Swal.fire({
//       title: 'Success!',
//       text: 'New inventory item has been received.',
//       icon: 'success',
//       timer: 1500,
//       timerProgressBar: true,
//     });
//   };

//   const filteredInventory = inventoryData.filter(item =>
//     item.Medicine.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     item.BatchNo.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const filteredBatches = batchData.filter(item =>
//     item.Medicine.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     item.BatchNo.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="grid grid-cols-1 gap-3 w-[95%] lg:ms-[70px] px-1 mx-auto">
//       {/* Header */}
//       <div className="sticky top-0 bg-background">
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 border-b pb-3 px-2 sm:px-4 lg:px-6">
//           <BackButton />
//           <h5 className="text-base sm:text-lg md:text-xl font-semibold">Inventory</h5>
//           {/* Single flex container for buttons and search */}
//           <div className="flex flex-row items-center gap-2 sm:gap-3 md:gap-4 flex-wrap w-full sm:w-auto">
//             <Button
//               variant="primary"
//               className={`flex items-center outline-none border-none justify-center gap-2 sm:gap-2.5 md:gap-3 whitespace-nowrap text-sm sm:text-base md:text-lg px-3 py-1.5 sm:px-4 sm:py-2 rounded-md transition-colors ${activeTab === 'batch'
//                 ? 'bg-secondary text-black text-green-900 lg:hover:bg-primary duration-300'
//                 : 'text-gray-800 lg:hover:bg-gray-300 shadow-lg font-bold'
//                 }`}
//               size="sm"
//               onClick={() => setActiveTab('medicine')}
//             >
//               <MdOutlineInventory /> Medicine Stock
//             </Button>
//             <Button
//               variant="primary"
//               className={`flex items-center outline-none border-none justify-center gap-2 sm:gap-2.5 md:gap-3 whitespace-nowrap text-sm sm:text-base md:text-lg px-3 py-1.5 sm:px-4 sm:py-2 rounded-md transition-colors ${activeTab === 'medicine'
//                 ? 'bg-secondary text-green-900 lg:hover:bg-primary  duration-300'
//                 : 'text-gray-800 lg:hover:bg-gray-300 shadow-lg font-bold'
//                 }`}
//               size="sm"
//               onClick={() => setActiveTab('batch')}
//             >
//               <CiBarcode />Batch
//             </Button>
//             {/* Search bar */}
//             <div className="flex items-center gap-2 flex-grow">
//               <Input
//                 type="search"
//                 placeholder="Search By Name or Batch..."
//                 className='w-full'
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
//             <Button
//               variant="primary"
//               size="sm"
//               onClick={() => setIsReceiveModalOpen(true)}
//               className="bg-primary text-text"
//             >
//               <MdOutlineAdd size={24} /> Receive Inventory
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Table Content based on Active Tab */}
//       <div className="overflow-x-auto px-2 flex-grow">
//         {activeTab === 'medicine' ? (
//           <Table columns={medicineColumns} data={filteredInventory} className="min-w-full" />
//         ) : (
//           <Table columns={batchColumns} data={filteredBatches} className="min-w-full" />
//         )}
//       </div>

//       {/* View Modal */}
//       <Modal
//         isOpen={isViewModalOpen}
//         onClose={() => setIsViewModalOpen(false)}
//         title="Inventory Details"
//         className="w-full max-w-md mx-auto p-4 sm:p-6"
//       >
//         {selectedMedicine && (
//           <div className="space-y-2 text-sm sm:text-base overflow-x-hidden">
//             {Object.entries(selectedMedicine).map(
//               ([key, value]) =>
//                 key !== 'Action' && (
//                   <p key={key}>
//                     <strong>{key}:</strong> {value}
//                   </p>
//                 )
//             )}
//           </div>
//         )}
//       </Modal>

//       {/* Edit Modal */}
//       <Modal
//         isOpen={isEditModalOpen}
//         onClose={() => setIsEditModalOpen(false)}
//         title="Edit Inventory"
//         className="w-full max-w-md mx-auto p-4 sm:p-6"
//         footer={
//           <div className="flex justify-end gap-2">
//             <Button
//               variant="secondary"
//               type="button"
//               onClick={() => setIsEditModalOpen(false)}
//               className="px-3 sm:px-4 py-1 sm:py-2 border rounded text-text hover:bg-gray-100 text-sm sm:text-base"
//             >
//               <MdOutlineClose /> Cancel
//             </Button>
//             <Button
//               variant="primary"
//               type="submit"
//               form="edit-form"
//               className="px-3 sm:px-4 py-1 sm:py-2 bg-primary text-text rounded hover:bg-primary-dark text-sm sm:text-base"
//             >
//               <BiSave /> Save Changes
//             </Button>
//           </div>
//         }
//       >
//         {selectedMedicine && (
//           <form
//             id="edit-form"
//             onSubmit={handleEditSubmit}
//             className="space-y-3 sm:space-y-4 text-sm sm:text-base overflow-x-hidden"
//           >
//             {Object.entries(editFormData).map(
//               ([key, value]) =>
//                 key !== 'Action' && key !== 'id' && (
//                   <div key={key}>
//                     <label className="block font-medium">{key}</label>
//                     <input
//                       type={
//                         key.includes('Date')
//                           ? 'date'
//                           : key.includes('Qty') || key === 'Price'
//                             ? 'number'
//                             : 'text'
//                       }
//                       name={key}
//                       value={value}
//                       onChange={handleEditChange}
//                       className="w-full border rounded p-2 bg-background text-black"
//                       step={key === 'Price' ? '0.01' : undefined}
//                     />
//                   </div>
//                 )
//             )}
//           </form>
//         )}
//       </Modal>

//       {/* Receive Inventory Modal */}
//       <Modal
//         isOpen={isReceiveModalOpen}
//         onClose={() => setIsReceiveModalOpen(false)}
//         title="Receive Inventory"
//         className="w-full max-w-md mx-auto p-4 sm:p-6"
//         footer={
//           <div className="flex justify-end gap-2">
//             <Button
//               variant="secondary"
//               onClick={() => setIsReceiveModalOpen(false)}
//               className="px-3 sm:px-4 py-1 sm:py-2 border rounded text-text hover:bg-gray-100 text-sm sm:text-base"
//             >
//               <MdOutlineClose /> Cancel
//             </Button>
//             <Button
//               variant="primary"
//               type="submit"
//               form="receive-form"
//               className="px-3 sm:px-4 py-1 sm:py-2 bg-primary text-text rounded hover:bg-primary-dark text-sm sm:text-base"
//             >
//               <BiSave /> Save
//             </Button>
//           </div>
//         }
//       >
//         <form
//           id="receive-form"
//           onSubmit={handleReceiveSubmit}
//           className="space-y-3 sm:space-y-4 text-sm sm:text-base"
//         >
//           <div>
//             <label className="block font-medium">Medicine</label>
//             <input
//               name="Medicine"
//               value={receiveFormData.Medicine}
//               onChange={handleReceiveChange}
//               type="text"
//               required
//               className="w-full border rounded p-2 bg-background text-black"
//             />
//           </div>
//           <div>
//             <label className="block font-medium">Batch No</label>
//             <input
//               name="BatchNo"
//               value={receiveFormData.BatchNo}
//               onChange={handleReceiveChange}
//               type="text"
//               required
//               className="w-full border rounded p-2 bg-background text-black"
//             />
//           </div>
//           <div>
//             <label className="block font-medium">Inward Quantity</label>
//             <input
//               name="InwardQuantity"
//               value={receiveFormData.InwardQuantity}
//               onChange={handleReceiveChange}
//               type="number"
//               required
//               className="w-full border rounded p-2 bg-background text-black"
//             />
//           </div>
//           <div>
//             <label className="block font-medium">Unit of Measure</label>
//             <input
//               name="UnitofMeasure"
//               value={receiveFormData.UnitofMeasure}
//               onChange={handleReceiveChange}
//               type="text"
//               className="w-full border rounded p-2 bg-background text-black"
//             />
//           </div>
//           <div>
//             <label className="block font-medium">Received Date</label>
//             <input
//               name="ReceivedDate"
//               value={receiveFormData.ReceivedDate}
//               onChange={handleReceiveChange}
//               type="date"
//               required
//               className="w-full border rounded p-2 bg-background text-black"
//             />
//           </div>
//           <div>
//             <label className="block font-medium">Expiry</label>
//             <input
//               name="ExpiryDate"
//               value={receiveFormData.ExpiryDate}
//               onChange={handleReceiveChange}
//               type="date"
//               required
//               className="w-full border rounded p-2 bg-background text-black"
//             />
//           </div>
//           <div>
//             <label className="block font-medium">Price</label>
//             <input
//               name="Price"
//               value={receiveFormData.Price}
//               onChange={handleReceiveChange}
//               type="number"
//               required
//               step="0.01"
//               className="w-full border rounded p-2 bg-background text-black"
//             />
//           </div>
//         </form>
//       </Modal>
//     </div>
//   );
// }

// export default Inventory;

import React, { useState } from 'react';
import Button from '../Components/Button';
import Table from '../Components/Table';
import { MdOutlineAdd } from "react-icons/md";
import { RiDeleteBinLine, RiEditBoxLine, RiEyeLine } from "react-icons/ri";
import Swal from 'sweetalert2';
import BackButton from '../Components/BackButton';
import { MdOutlineClose } from "react-icons/md";
import Modal from '../Components/Modal';
import { BiSave } from "react-icons/bi";
import { MdOutlineInventory } from "react-icons/md";
import { CiBarcode } from "react-icons/ci";
import Input from '../Components/FormFields/InputField';
import inventoryStaticData from '../data.json'; // Adjust path as needed
import Heading from '../Components/Heading';

function Inventory() {
  const [theme, setTheme] = useState('light');
  const [activeTab, setActiveTab] = useState('medicine');
  const [inventoryData, setInventoryData] = useState(inventoryStaticData.inventoryData);
  const [batchData, setBatchData] = useState(inventoryStaticData.batchData);
  const [searchTerm, setSearchTerm] = useState('');
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isReceiveModalOpen, setIsReceiveModalOpen] = useState(false);
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [editFormData, setEditFormData] = useState({});
  const [receiveFormData, setReceiveFormData] = useState({
    Medicine: '',
    BatchNo: '',
    InwardQuantity: '',
    UnitofMeasure: '',
    ReceivedDate: '',
    ExpiryDate: '',
    Price: ''
  });

  // Columns for Medicine Stock Tab
  const medicineColumns = [
    { header: 'Medicine', accessor: 'Medicine' },
    { header: 'Batch No', accessor: 'BatchNo' },
    { header: 'Inward Qty', accessor: 'InwardQuantity' },
    { header: 'Unit', accessor: 'UnitofMeasure' },
    { header: 'Expiry', accessor: 'ExpiryDate' },
    { header: 'Price', accessor: 'Price' },
    { header: 'Received', accessor: 'ReceivedDate' },
    { header: 'Batch Qty', accessor: 'AvailableBatchQty' },
    { header: 'Total Qty', accessor: 'TotalAvailableQty' },
    {
      header: 'Action',
      accessor: 'Action',
      Cell: ({ row }) => (
        <div className="flex gap-1">
          <button className="text-blue-500 border border-blue-500 rounded p-1 hover:bg-blue-50" title="View Details" onClick={() => handleView(row.original)}>
            <RiEyeLine size={16} />
          </button>
          <button className="text-green-500 border border-green-500 rounded p-1 hover:bg-green-50" title="Edit Details" onClick={() => handleEdit(row.original)}>
            <RiEditBoxLine size={16} />
          </button>
          <button className="text-red-500 border border-red-500 rounded p-1 hover:bg-red-50" title="Delete" onClick={() => handleDelete(row.original)}>
            <RiDeleteBinLine size={16} />
          </button>
        </div>
      )
    },
  ];

  // Columns for Batch Tab
  const batchColumns = [
    { header: 'Batch No', accessor: 'BatchNo' },
    { header: 'Medicine', accessor: 'Medicine' },
    { header: 'Batch Creation Date', accessor: 'BatchCreationDate' },
    { header: 'Manufacture Date', accessor: 'ManufactureDate' },
    { header: 'Expiry Date', accessor: 'ExpiryDate' },
    {
      header: 'Action',
      accessor: 'Action',
      Cell: ({ row }) => (
        <div className="flex gap-1">
          <button className="text-red-500 border border-red-500 rounded p-1 hover:bg-red-50" title="Delete" onClick={() => handleBatchDelete(row.original)}>
            <RiDeleteBinLine size={16} />
          </button>
          <button className="text-green-500 border border-green-500 rounded p-1 hover:bg-green-50" title="Edit Details" onClick={() => handleEdit(row.original)}>
            <RiEditBoxLine size={16} />
          </button>
          <button className="text-blue-500 border border-blue-500 rounded p-1 hover:bg-blue-50" title="View Details" onClick={() => handleView(row.original)}>
            <RiEyeLine size={16} />
          </button>
        </div>
      )
    },
  ];

  // Handlers
  // const handleDelete = (medicine) => {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: `This action will permanently delete ${medicine.Medicine} (Batch: ${medicine.BatchNo}). You won’t be able to undo this!`,
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#d33',
  //     cancelButtonColor: '#3085d6',
  //     confirmButtonText: 'Yes, delete it!',
  //     cancelButtonText: 'Cancel'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       setInventoryData(inventoryData.filter(item => item.BatchNo !== medicine.BatchNo || item.ReceivedDate !== medicine.ReceivedDate));
  //       Swal.fire('Deleted!', 'The inventory item has been deleted.', 'success');
  //     }
  //   });
  // };
  const handleDelete = (medicine) => {
    const isDarkMode = theme === 'dark'; // Replace with your theme logic
  
    Swal.fire({
      title: 'Are you sure?',
      text: `This action will permanently delete ${medicine.Medicine} (Batch: ${medicine.BatchNo}). You won’t be able to undo this!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
      customClass: {
        popup: isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900', // Replace with bg-background/text-text if dynamic
        title: isDarkMode ? 'text-gray-100' : 'text-gray-900',
        htmlContainer: isDarkMode ? 'text-gray-100' : 'text-gray-900',
        confirmButton: 'bg-red-500 text-white', // Consistent with your UI
        cancelButton: 'bg-blue-500 text-white',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        setInventoryData(
          inventoryData.filter(
            (item) =>
              item.BatchNo !== medicine.BatchNo || item.ReceivedDate !== medicine.ReceivedDate
          )
        );
        Swal.fire({
          title: 'Deleted!',
          text: 'The inventory item has been deleted.',
          icon: 'success',
          customClass: {
            popup: isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900',
            title: isDarkMode ? 'text-gray-100' : 'text-gray-900',
            htmlContainer: isDarkMode ? 'text-gray-100' : 'text-gray-900',
            confirmButton: 'bg-green-500 text-white',
          },
        });
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
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        setBatchData(batchData.filter(item => item.BatchNo !== batch.BatchNo));
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
      const updatedInventory = inventoryData.map(item =>
        (item.BatchNo === selectedMedicine.BatchNo && item.ReceivedDate === selectedMedicine.ReceivedDate) ? { ...editFormData } : item
      );
      setInventoryData(updatedInventory);
    } else {
      const updatedBatches = batchData.map(item =>
        item.BatchNo === selectedMedicine.BatchNo ? { ...editFormData } : item
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

  const handleReceiveChange = (e) => {
    const { name, value } = e.target;
    setReceiveFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleReceiveSubmit = (e) => {
    e.preventDefault();
    const newInventory = {
      id: inventoryData.length + 1,
      ...receiveFormData,
      InwardQuantity: Number(receiveFormData.InwardQuantity),
      Price: Number(receiveFormData.Price),
      AvailableBatchQty: Number(receiveFormData.InwardQuantity),
      TotalAvailableQty: Number(receiveFormData.InwardQuantity)
    };

    setInventoryData([...inventoryData, newInventory]);
    setIsReceiveModalOpen(false);
    setReceiveFormData({
      Medicine: '',
      BatchNo: '',
      InwardQuantity: '',
      UnitofMeasure: '',
      ReceivedDate: '',
      ExpiryDate: '',
      Price: ''
    });

    Swal.fire({
      title: 'Success!',
      text: 'New inventory item has been received.',
      icon: 'success',
      timer: 1500,
      timerProgressBar: true,
    });
  };

  const filteredInventory = inventoryData.filter(item =>
    item.Medicine.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.BatchNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredBatches = batchData.filter(item =>
    item.Medicine.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.BatchNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 mx-auto gap-3 w-[96%] lg:ml-[50px]">
      {/* Header */}

      <div className="sticky top-0 bg-background z-[10]">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-3 ">
          <BackButton />
          <Heading>Inventory</Heading>
          {/* Single flex container for buttons and search */}
          <div className="flex flex-row items-center gap-2 sm:gap-3 md:gap-4 flex-wrap w-full sm:w-auto">
            <button
              variant="primary"
              className={`px-4 py-2 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${activeTab === 'medicine'
                ? 'border-b-2 border-primary text-primary'
                : 'text-text lg:hover:text-green-900'
                }`}
              size="sm"
              onClick={() => setActiveTab('medicine')}
            >
              <MdOutlineInventory /> Medicine Stock
            </button>
            <button
              variant="primary"
              className={`px-4 py-2 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${activeTab === 'batch'
                ? 'border-b-2 border-primary text-primary'
                : 'text-text lg:hover:text-green-900'
                }`}
              size="sm"
              onClick={() => setActiveTab('batch')}
            >
              <CiBarcode /> Batch
            </button>
            {/* Search bar */}
            <div className="flex items-center gap-2 flex-grow">
              <Input
                type="search"
                placeholder="Search By Name or Batch..."
                className='md:w-20 lg:w-full sm:w-20'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button
              variant="primary"
              size="sm"
              onClick={() => setIsReceiveModalOpen(true)}
              className="bg-primary text-text"
            >
              <MdOutlineAdd size={24} /> Receive
            </Button>
          </div>
        </div>
      </div>

      {/* Table Content based on Active Tab */}
      <div className="overflow-x-auto flex-grow">
        {activeTab === 'medicine' ? (
          <Table columns={medicineColumns} data={filteredInventory} className="min-w-full" />
        ) : (
          <Table columns={batchColumns} data={filteredBatches} className="min-w-full" />
        )}
      </div>

      {/* View Modal */}
      <Modal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        title="Inventory Details"
        className="w-full max-w-md mx-auto p-4 sm:p-6"
      >
        {selectedMedicine && (
          <div className="space-y-2 text-sm sm:text-base overflow-x-hidden">
            {Object.entries(selectedMedicine).map(
              ([key, value]) =>
                key !== 'Action' && (
                  <p key={key}>
                    <strong>{key}:</strong> {value}
                  </p>
                )
            )}
          </div>
        )}
      </Modal>

      {/* Edit Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Edit Inventory"
        className="w-full max-w-md mx-auto p-4 sm:p-6"
        footer={
          <div className="flex justify-end gap-2">
            <Button
              variant="secondary"
              type="button"
              onClick={() => setIsEditModalOpen(false)}
              className="px-3 sm:px-4 py-1 sm:py-2 border rounded text-text hover:bg-gray-100 text-sm sm:text-base"
            >
              <MdOutlineClose /> Cancel
            </Button>
            <Button
              variant="primary"
              type="submit"
              form="edit-form"
              className="px-3 sm:px-4 py-1 sm:py-2 bg-primary text-text rounded hover:bg-primary-dark text-sm sm:text-base"
            >
              <BiSave /> Save Changes
            </Button>
          </div>
        }
      >
        {selectedMedicine && (
          <form
            id="edit-form"
            onSubmit={handleEditSubmit}
            className="space-y-3 sm:space-y-4 text-sm sm:text-base overflow-x-hidden"
          >
            {Object.entries(editFormData).map(
              ([key, value]) =>
                key !== 'Action' && key !== 'id' && (
                  <div key={key}>
                    <label className="block font-medium">{key}</label>
                    <Input
                      type={
                        key.includes('Date')
                          ? 'date'
                          : key.includes('Qty') || key === 'Price'
                            ? 'number'
                            : 'text'
                      }
                      name={key}
                      value={value}
                      onChange={handleEditChange}
                      className="w-full border rounded p-2 bg-background text-black"
                      step={key === 'Price' ? '0.01' : undefined}
                    />
                  </div>
                )
            )}
          </form>
        )}
      </Modal>

      {/* Receive Inventory Modal */}
      <Modal
        isOpen={isReceiveModalOpen}
        onClose={() => setIsReceiveModalOpen(false)}
        title="Receive Inventory"
        className="w-full max-w-md mx-auto p-4 sm:p-6"
        footer={
          <div className="flex justify-end gap-2">
            <Button
              variant="secondary"
              onClick={() => setIsReceiveModalOpen(false)}
              className="px-3 sm:px-4 py-1 sm:py-2 border rounded text-text hover:bg-gray-100 text-sm sm:text-base"
            >
              <MdOutlineClose /> Cancel
            </Button>
            <Button
              variant="primary"
              type="submit"
              form="receive-form"
              className="px-3 sm:px-4 py-1 sm:py-2 bg-primary text-text rounded hover:bg-primary-dark text-sm sm:text-base"
            >
              <BiSave /> Save
            </Button>
          </div>
        }
      >
        <form
          id="receive-form"
          onSubmit={handleReceiveSubmit}
          className="space-y-3 sm:space-y-4 text-sm sm:text-base"
        >
          <div>
            <label className="block font-medium">Medicine</label>
            <Input
              name="Medicine"
              value={receiveFormData.Medicine}
              onChange={handleReceiveChange}
              type="text"
              required
              className="w-full border rounded p-2 bg-background text-black"
            />
          </div>
          <div>
            <label className="block font-medium">Batch No</label>
            <Input
              name="BatchNo"
              value={receiveFormData.BatchNo}
              onChange={handleReceiveChange}
              type="text"
              required
              className="w-full border rounded p-2 bg-background text-black"
            />
          </div>
          <div>
            <label className="block font-medium">Inward Quantity</label>
            <Input
              name="InwardQuantity"
              value={receiveFormData.InwardQuantity}
              onChange={handleReceiveChange}
              type="number"
              required
              className="w-full border rounded p-2 bg-background text-black"
            />
          </div>
          <div>
            <label className="block font-medium">Unit of Measure</label>
            <Input
              name="UnitofMeasure"
              value={receiveFormData.UnitofMeasure}
              onChange={handleReceiveChange}
              type="text"
              className="w-full border rounded p-2 bg-background text-black"
            />
          </div>
          <div>
            <label className="block font-medium">Received Date</label>
            <Input
              name="ReceivedDate"
              value={receiveFormData.ReceivedDate}
              onChange={handleReceiveChange}
              type="date"
              required
              className="w-full border rounded p-2 bg-background text-black"
            />
          </div>
          <div>
            <label className="block font-medium">Expiry</label>
            <Input
              name="ExpiryDate"
              value={receiveFormData.ExpiryDate}
              onChange={handleReceiveChange}
              type="date"
              required
              className="w-full border rounded p-2 bg-background text-black"
            />
          </div>
          <div>
            <label className="block font-medium">Price</label>
            <Input
              name="Price"
              value={receiveFormData.Price}
              onChange={handleReceiveChange}
              type="number"
              required
              step="0.01"
              className="w-full border rounded p-2 bg-background text-black"
            />
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Inventory;