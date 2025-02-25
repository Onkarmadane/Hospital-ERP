import React, { useState, useEffect, useRef } from 'react';
import PrimaryButton from '../Components/PrimaryButton';
import Table from '../Components/Table';
import { MdOutlineAdd } from "react-icons/md";
import { RiDeleteBinLine, RiEditBoxLine, RiEyeLine } from "react-icons/ri";
import Swal from 'sweetalert2';

// Modal Component
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
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleOutsideClick}
    >
      <div 
        ref={modalRef}
        className="bg-white rounded-lg p-6 w-full max-w-md max-h-[80vh] overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <PrimaryButton
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

function Inventory() {
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
            Medicine: "Ibuprofen",
            BatchNo: "IBU202302",
            InwardQuantity: 500,
            UnitofMeasure: "Tablets",
            ExpiryDate: "2025-06-30",
            Price: 0.35,
            ReceivedDate: "2024-02-01",
            AvailableBatchQty: 420,
            TotalAvailableQty: 650
        },
        {
            Medicine: "Amoxicillin",
            BatchNo: "AMO202303",
            InwardQuantity: 200,
            UnitofMeasure: "Capsules",
            ExpiryDate: "2024-11-30",
            Price: 0.85,
            ReceivedDate: "2024-01-20",
            AvailableBatchQty: 180,
            TotalAvailableQty: 300
        },
        {
            Medicine: "Cetirizine",
            BatchNo: "CET202304",
            InwardQuantity: 800,
            UnitofMeasure: "Tablets",
            ExpiryDate: "2026-03-31",
            Price: 0.15,
            ReceivedDate: "2024-02-10",
            AvailableBatchQty: 750,
            TotalAvailableQty: 900
        },
        {
            Medicine: "Metformin",
            BatchNo: "MET202305",
            InwardQuantity: 600,
            UnitofMeasure: "Tablets",
            ExpiryDate: "2025-09-30",
            Price: 0.45,
            ReceivedDate: "2024-01-25",
            AvailableBatchQty: 550,
            TotalAvailableQty: 700
        }
    
    
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  const columns = [
    { header: 'Medicine', accessor: 'Medicine' },
    { header: 'Batch No', accessor: 'BatchNo' },
    { header: 'Inward Quantity', accessor: 'InwardQuantity' },
    { header: 'Unit of Measure', accessor: 'UnitofMeasure' },
    { header: 'Expiry Date', accessor: 'ExpiryDate' },
    { header: 'Price', accessor: 'Price' },
    { header: 'Received Date', accessor: 'ReceivedDate' },
    { header: 'Available Batch Qty', accessor: 'AvailableBatchQty' },
    { header: 'Total Available Qty', accessor: 'TotalAvailableQty' },
    {
      header: 'Action',
      accessor: 'Action',
      Cell: ({ row }) => (
        <div className="flex gap-1">
          <button
            className="text-red-500 border border-red-500 rounded p-1 hover:bg-red-50"
            title="Delete"
            onClick={() => handleDelete(row.original)}
          >
            <RiDeleteBinLine />
          </button>
          <button
            className="text-green-500 border border-green-500 rounded p-1 hover:bg-green-50"
            title="Edit Details"
            onClick={() => handleEdit(row.original)}
          >
            <RiEditBoxLine />
          </button>
          <button
            className="text-blue-500 border border-blue-500 rounded p-1 hover:bg-blue-50"
            title="View Details"
            onClick={() => handleView(row.original)}
          >
            <RiEyeLine />
          </button>
        </div>
      )
    },
  ];

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
        Swal.fire(
          'Deleted!',
          'The inventory item has been deleted.',
          'success'
        );
      }
    });
  };

  const handleEdit = (medicine) => {
    setSelectedMedicine(medicine);
    setEditFormData({ ...medicine });
    setIsEditModalOpen(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedInventory = inventoryData.map(item => 
      item.BatchNo === editFormData.BatchNo ? { ...editFormData } : item
    );
    setInventoryData(updatedInventory);
    setIsEditModalOpen(false);
    Swal.fire({
      title: 'Success!',
      text: 'Inventory details have been updated successfully.',
      icon: 'success',
      confirmButtonText: 'OK',
      timer: 1500,
      timerProgressBar: true,
    });
  };

  const handleView = (medicine) => {
    setSelectedMedicine(medicine);
    setIsViewModalOpen(true);
  };

  const filteredInventory = inventoryData.filter(item =>
    item.Medicine.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.BatchNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-[95%] lg:ms-[70px] min-h-screen bg-white flex flex-col">
      <div className="flex flex-wrap justify-between items-center gap-5 font-medium mb-5 border-b pb-2 px-4">
        <div className="flex items-center">
          <h5 className="text-lg font-semibold">Inventory</h5>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <PrimaryButton className="flex items-center gap-3 whitespace-nowrap">
            Medicine Stock
          </PrimaryButton>
          <PrimaryButton className="flex items-center gap-3 whitespace-nowrap">
            Batch
          </PrimaryButton>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between mb-4 gap-4 border-b pb-3 px-4">
        <PrimaryButton className="flex items-center gap-3 whitespace-nowrap">
          <MdOutlineAdd /> Receive Inventory
        </PrimaryButton>
        <div className="flex items-center gap-2">
          <label className="text-sm">Search:</label>
          <input
            type="search"
            className="border rounded p-1 text-sm w-full md:w-64 bg-white text-black"
            placeholder="Search By Name or Batch..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="overflow-x-auto px-2 flex-grow">
        <Table columns={columns} data={filteredInventory} />
      </div>

      {/* View Modal */}
      <Modal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        title="Inventory Details"
      >
        {selectedMedicine && (
          <div className="space-y-2">
            <p><strong>Medicine:</strong> {selectedMedicine.Medicine}</p>
            <p><strong>Batch No:</strong> {selectedMedicine.BatchNo}</p>
            <p><strong>Inward Quantity:</strong> {selectedMedicine.InwardQuantity}</p>
            <p><strong>Unit:</strong> {selectedMedicine.UnitofMeasure}</p>
            <p><strong>Expiry:</strong> {selectedMedicine.ExpiryDate}</p>
            <p><strong>Price:</strong> ${selectedMedicine.Price}</p>
            <p><strong>Received:</strong> {selectedMedicine.ReceivedDate}</p>
            <p><strong>Available Batch:</strong> {selectedMedicine.AvailableBatchQty}</p>
            <p><strong>Total Available:</strong> {selectedMedicine.TotalAvailableQty}</p>
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
          <form onSubmit={handleEditSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Medicine</label>
              <input
                type="text"
                name="Medicine"
                value={editFormData.Medicine}
                onChange={handleEditChange}
                className="w-full border rounded p-2 bg-white text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Batch No</label>
              <input
                type="text"
                name="BatchNo"
                value={editFormData.BatchNo}
                onChange={handleEditChange}
                className="w-full border rounded p-2 bg-white text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Inward Quantity</label>
              <input
                type="number"
                name="InwardQuantity"
                value={editFormData.InwardQuantity}
                onChange={handleEditChange}
                className="w-full border rounded p-2 bg-white text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Unit of Measure</label>
              <input
                type="text"
                name="UnitofMeasure"
                value={editFormData.UnitofMeasure}
                onChange={handleEditChange}
                className="w-full border rounded p-2 bg-white text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Expiry Date</label>
              <input
                type="date"
                name="ExpiryDate"
                value={editFormData.ExpiryDate}
                onChange={handleEditChange}
                className="w-full border rounded p-2 bg-white text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Price</label>
              <input
                type="number"
                name="Price"
                value={editFormData.Price}
                onChange={handleEditChange}
                className="w-full border rounded p-2 bg-white text-black"
                step="0.01"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Received Date</label>
              <input
                type="date"
                name="ReceivedDate"
                value={editFormData.ReceivedDate}
                onChange={handleEditChange}
                className="w-full border rounded p-2 bg-white text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Available Batch Qty</label>
              <input
                type="number"
                name="AvailableBatchQty"
                value={editFormData.AvailableBatchQty}
                onChange={handleEditChange}
                className="w-full border rounded p-2 bg-white text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Total Available Qty</label>
              <input
                type="number"
                name="TotalAvailableQty"
                value={editFormData.TotalAvailableQty}
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
}

export default Inventory;