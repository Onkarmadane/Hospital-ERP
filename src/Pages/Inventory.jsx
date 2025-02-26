import React, { useState, useEffect, useRef } from 'react';
import PrimaryButton from '../Components/PrimaryButton';
import Table from '../Components/Table';
import { MdOutlineAdd } from "react-icons/md";
import { RiDeleteBinLine, RiEditBoxLine, RiEyeLine } from "react-icons/ri";
import Swal from 'sweetalert2';

// Modal Component (unchanged)
const Modal = ({ isOpen, onClose, children, title }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-2 sm:px-0"
      onClick={handleOutsideClick}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-[95%] sm:max-w-md max-h-[80vh] overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
          <PrimaryButton
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-lg"
          >
            ×
          </PrimaryButton>
        </div>
        {children}
      </div>
    </div>
  );
};

function Inventory() {
  const [activeTab, setActiveTab] = useState('medicine'); // Medicine tab active by default

  // Medicine Stock Data (unchanged)
  const [inventoryData, setInventoryData] = useState([
    {
      Medicine: "Paracetamol",
      BatchNo: "PARA202301",
      InwardQuantity: 1000,
      UnitofMeasure: "Tablets",
      ExpiryDate: "2025-12-31",
      Price: 0.25,
      ReceivedDate: "2024-01-15",
      AvailableBatchQty: 850,
      TotalAvailableQty: 1200
    },
    {
      Medicine: "Paracetamol",
      BatchNo: "PARA202301",
      InwardQuantity: 1000,
      UnitofMeasure: "Tablets",
      ExpiryDate: "2025-12-31",
      Price: 0.25,
      ReceivedDate: "2024-01-15",
      AvailableBatchQty: 850,
      TotalAvailableQty: 1200
    },
    {
      Medicine: "Paracetamol",
      BatchNo: "PARA202301",
      InwardQuantity: 1000,
      UnitofMeasure: "Tablets",
      ExpiryDate: "2025-12-31",
      Price: 0.25,
      ReceivedDate: "2024-01-15",
      AvailableBatchQty: 850,
      TotalAvailableQty: 1200
    },

  ]);

  // Batch Data
  const [batchData, setBatchData] = useState([
    {
      BatchNo: "PARA202301",
      Medicine: "Paracetamol",
      BatchCreationDate: "2023-12-15",
      ManufactureDate: "2023-12-10",
      ExpiryDate: "2025-12-31"
    },
    {
      BatchNo: "IBU202302",
      Medicine: "Ibuprofen",
      BatchCreationDate: "2024-01-15",
      ManufactureDate: "2024-01-10",
      ExpiryDate: "2025-06-30"
    },
    {
      BatchNo: "AMO202303",
      Medicine: "Amoxicillin",
      BatchCreationDate: "2024-01-05",
      ManufactureDate: "2024-01-01",
      ExpiryDate: "2024-11-30"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  // Columns for Medicine Stock Tab (unchanged)
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
          <button className="text-red-500 border border-red-500 rounded p-1 hover:bg-red-50" title="Delete" onClick={() => handleDelete(row.original)}>
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

  // Handlers (unchanged except for new batch delete handler)
  const handleDelete = (medicine) => {
    Swal.fire({
      title: 'Are you sure?',
      text: `This action will permanently delete ${medicine.Medicine} (Batch: ${medicine.BatchNo}). You won’t be able to undo this!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        setInventoryData(inventoryData.filter(item => item.BatchNo !== medicine.BatchNo));
        Swal.fire('Deleted!', 'The inventory item has been deleted.', 'success');
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
        item.BatchNo === editFormData.BatchNo ? { ...editFormData } : item
      );
      setInventoryData(updatedInventory);
    } else {
      const updatedBatches = batchData.map(item =>
        item.BatchNo === editFormData.BatchNo ? { ...editFormData } : item
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

  const filteredInventory = inventoryData.filter(item =>
    item.Medicine.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.BatchNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredBatches = batchData.filter(item =>
    item.Medicine.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.BatchNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full max-w-[95%] mx-auto lg:ml-[70px] min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6 font-medium mb-6 border-b pb-3 px-2 sm:px-4 lg:px-6">
        <h5 className="text-base sm:text-lg md:text-xl font-semibold">Inventory</h5>
        <div className="flex flex-row items-center gap-2 sm:gap-3 md:gap-4">
          <PrimaryButton
            onClick={() => setActiveTab('medicine')}
            className={`flex items-center justify-center gap-2 sm:gap-2.5 md:gap-3 whitespace-nowrap text-sm sm:text-base md:text-lg px-3 py-1.5 sm:px-4 sm:py-2 rounded-md transition-colors ${activeTab === 'medicine' ? 'bg-primary text-white ' : ' text-gray-800 hover:bg-gray-300'
              }`}
          >
            Medicine Stock
          </PrimaryButton>
          <PrimaryButton
            onClick={() => setActiveTab('batch')}
            className={`flex items-center justify-center gap-2 sm:gap-2.5 md:gap-3 whitespace-nowrap text-sm sm:text-base md:text-lg px-3 py-1.5 sm:px-4 sm:py-2 rounded-md transition-colors ${activeTab === 'batch' ? 'bg-primary text-white ' : ' text-gray-800 hover:bg-gray-300'
              }`}
          >
            Batch
          </PrimaryButton>
        </div>
      </div>

      {/* Button and Search */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4 border-b pb-3 px-2 sm:px-4">
        <PrimaryButton className="flex items-center gap-2 sm:gap-3 whitespace-nowrap w-full sm:w-auto text-sm sm:text-base">
          <MdOutlineAdd /> Receive Inventory
        </PrimaryButton>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <label className="text-xs sm:text-sm">Search:</label>
          <input
            type="search"
            className="border rounded p-1 text-xs sm:text-sm w-full bg-white text-black"
            placeholder="Search By Name or Batch..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Table Content based on Active Tab */}
      <div className="overflow-x-auto px-2 flex-grow">
        {activeTab === 'medicine' ? (
          <Table columns={medicineColumns} data={filteredInventory} />
        ) : (
          <Table columns={batchColumns} data={filteredBatches} />
        )}
      </div>

      {/* View Modal */}
      <Modal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        title="Inventory Details"
      >
        {selectedMedicine && (
          <div className="space-y-2 text-sm sm:text-base">
            {Object.entries(selectedMedicine).map(([key, value]) => (
              key !== 'Action' && (
                <p key={key}><strong>{key}:</strong> {value}</p>
              )
            ))}
          </div>
        )}
      </Modal>

      {/* Edit Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Edit Inventory"
      >
        {selectedMedicine && (
          <form onSubmit={handleEditSubmit} className="space-y-3 sm:space-y-4 text-sm sm:text-base">
            {Object.entries(editFormData).map(([key, value]) => (
              key !== 'Action' && (
                <div key={key}>
                  <label className="block font-medium">{key}</label>
                  <input
                    type={key.includes('Date') ? 'date' : key.includes('Qty') || key === 'Price' ? 'number' : 'text'}
                    name={key}
                    value={value}
                    onChange={handleEditChange}
                    className="w-full border rounded p-2 bg-white text-black"
                    step={key === 'Price' ? '0.01' : undefined}
                  />
                </div>
              )
            ))}
            <div className="flex justify-end gap-2">
              <PrimaryButton
                type="button"
                onClick={() => setIsEditModalOpen(false)}
                className="px-3 sm:px-4 py-1 sm:py-2 border rounded text-gray-600 hover:bg-gray-100 text-sm sm:text-base"
              >
                Cancel
              </PrimaryButton>
              <PrimaryButton
                type="submit"
                className="px-3 sm:px-4 py-1 sm:py-2 bg-primary text-white rounded hover:bg-primary-dark text-sm sm:text-base"
              >
                Save Changes
              </PrimaryButton>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
}

export default Inventory;