import React, { useState } from 'react';
import { FaSearch, FaEye, FaTrash, FaList, FaTh } from 'react-icons/fa';
import { MdChevronLeft, MdChevronRight, MdClose } from 'react-icons/md';
import { RiDeleteBinLine, RiEditBoxLine, RiEyeLine, RiSaveLine, RiCloseLine } from 'react-icons/ri';
import Table from '../Components/Table';
import Button from '../Components/Button';
import { MdOutlineAdd } from 'react-icons/md';
import {
  FaHeartbeat,
  FaPrescriptionBottle,
  FaRuler,
  FaClock,
  FaCalendarAlt,
  FaCapsules,
  FaInfoCircle
} from 'react-icons/fa';
import Modal from '../Components/Modal'; // Adjust the path to your Modal component
import Swal from 'sweetalert2';
import BackButton from '../Components/BackButton';
import Input from '../Components/FormFields/InputField';
import Heading from '../Components/Heading';

// Define tabs
const tabs = [
  'Vitals',
  'Dosage',
  'Units',
  'Frequency',
  'When',
  'Medicine Type',
  'Advice and Direction',
];

// Initial data for each tab
const initialVitalsData = [
  { id: 1, label: 'SPO2', fields: 1, maxLength: 4, unit: '%', separator: '/' },
  { id: 2, label: 'BP', fields: 2, maxLength: 3, unit: 'mmHg', separator: '/' },
  { id: 3, label: 'PULSE', fields: 1, maxLength: 3, unit: 'PER MIN', separator: '/' },
  { id: 4, label: 'Height', fields: 1, maxLength: 10, unit: 'CM,IN,INCH', separator: '/' },
  { id: 5, label: 'Weight', fields: 1, maxLength: 3, unit: 'kg', separator: '/' },
];

const initialDosageData = [
  { id: 1, name: '1-0-1' },
  { id: 2, name: '1-0-1' },
  // { id: 3, name: '' },
  { id: 4, name: '0-1-0' },
  // { id: 5, name: '' },
  { id: 6, name: '1-0-1' },
  // { id: 7, name: '' },
  { id: 8, name: '1-1-1' },
  // { id: 9, name: '' },
  // { id: 10, name: '' },
  { id: 11, name: '1-0-1' },
  // { id: 12, name: '' },
  { id: 13, name: '1-0-1' },
];

const initialUnitsData = [
  { id: 1, name: 'MG' },
  // { id: 2, name: '' },
  // { id: 3, name: '' },
  { id: 4, name: '3.5ML' },
  { id: 5, name: 'UNDEFINED' },
  { id: 6, name: 'NAN' },
  { id: 7, name: 'MCG' },
  // { id: 8, name: '' },
  { id: 9, name: '-1' },
  // { id: 10, name: '' },
  // { id: 11, name: '' },
  { id: 12, name: 'TAB' },
  { id: 13, name: 'IU' },
  { id: 14, name: 'AVIIU' },
  { id: 15, name: 'ML' },
];

const initialFrequencyData = [
  // { id: 1, name: '' },
  { id: 2, name: 'TO CONTINUE' },
  // { id: 3, name: '' },
  // { id: 4, name: '' },
  // { id: 5, name: '' },
  { id: 6, name: 'DAILY' },
  // { id: 7, name: '' },
  // { id: 8, name: '' },
  // { id: 9, name: '' },
  // { id: 10, name: '' },
  // { id: 11, name: '' },
  // { id: 12, name: '' },
  // { id: 13, name: '' },
  // { id: 14, name: '' },
  // { id: 15, name: '' },
];

const initialWhenData = [
  { id: 1, name: 'nan' },
  { id: 2, name: 'BEFORE FOOD' },
  { id: 3, name: 'AT 6PM' },
  { id: 4, name: 'AFTER FOOD' },
  { id: 5, name: 'AFTER FOOD' },
  { id: 6, name: 'UNDEFINED' },
  { id: 7, name: 'NAN' },
  { id: 8, name: '-AFTER FOOD' },
  { id: 9, name: 'SOS' },
  // { id: 10, name: '' },
  { id: 11, name: 'AFTER FOOD' },
  { id: 12, name: 'AFTER BREAKFAST' },
  { id: 13, name: 'EMPTY STOMACH' },
  // { id: 14, name: '' },
  // { id: 15, name: '' },
];

const initialMedicineTypeData = [
  { id: 1, name: 'ASDF' },
  { id: 2, name: 'ASDFASDF' },
  { id: 3, name: 'CAPSULES' },
  { id: 4, name: 'CREAM' },
  { id: 5, name: 'CREAMTT' },
  { id: 6, name: 'DROPS' },
  { id: 7, name: 'DRY SYRUP' },
  { id: 8, name: 'ENERGY DRINK' },
  { id: 9, name: 'EXPECTORANT' },
  { id: 10, name: 'FACEWASH' },
  { id: 11, name: 'FEVER TEST' },
  { id: 12, name: 'GANULES' },
  { id: 13, name: 'GEL' },
  { id: 14, name: 'HJ' },
  { id: 15, name: 'INHALER' },
];

const initialAdviceDirectionData = [
  { id: 1, name: 't', description: 't' },
  { id: 2, name: 'test', description: 'test' },
  { id: 3, name: 'drink water pro', description: 'drink water pro' },
  { id: 4, name: 'TESTAJH', description: 'drink water pro hhk' },
  { id: 5, name: 'TESTAD', description: 'hjkasjkd' },
  { id: 6, name: 'HJKlkasl', description: 'drink water prooo' },
  { id: 7, name: 'te', description: 'hjkkkjkjkkk' },
  { id: 8, name: 'TEST12', description: 'tehjjldklaskas' },
  { id: 9, name: 'LKJ', description: 'ABCD' },
  { id: 10, name: 'TIUYsuia', description: 'drink water sjdhajskj' },
  { id: 11, name: 'teuiasal', description: 'drink water projklkl' },
  { id: 12, name: 'Tettshjgdkhsa', description: 'ttdsjkakjshakj' },
  { id: 13, name: 'a', description: 'drink water more' },
  { id: 14, name: 'ddd', description: 'drink water aa ' },
  { id: 15, name: 'exercise daily', description: 'drink water pro, exe...' },
];

const SetupTable = () => {
  const [activeTab, setActiveTab] = useState('Vitals');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('create'); // 'create' or 'edit'
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    id: Date.now(),
    label: '',
    name: '',
    fields: 1,
    maxLength: '',
    unit: '',
    separator: '/',
    description: '',
  });

  // State to manage all tab data
  const [data, setData] = useState({
    Vitals: initialVitalsData,
    Dosage: initialDosageData,
    Units: initialUnitsData,
    Frequency: initialFrequencyData,
    When: initialWhenData,
    'Medicine Type': initialMedicineTypeData,
    'Advice and Direction': initialAdviceDirectionData,
  });

  // Get current tab data
  const currentData = data[activeTab];

  // Filter data based on search term
  const filteredData = currentData.filter((item) =>
    activeTab === 'Advice and Direction'
      ? (item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchTerm.toLowerCase()))
      : (item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.label?.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const displayedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Define columns dynamically
  const columns = [
    {
      header: activeTab === 'Vitals' ? 'Label' : 'Name',
      accessor: activeTab === 'Vitals' ? 'label' : 'name'
    },
    ...(activeTab === 'Advice and Direction' ? [{ header: 'Description', accessor: 'description' }] : []),
    {
      header: 'Action',
      accessor: 'action',
      Cell: ({ row: { original } }) => (
        <div className="flex gap-1">
          <button
            className="text-red-500 border border-red-500 rounded p-1 lg:hover:bg-red-50"
            title="Delete"
            onClick={() => handleDelete(original.id)}
          >
            <RiDeleteBinLine />
          </button>
          <button
            className="text-green-500 border border-green-500 rounded p-1 lg:hover:bg-green-50"
            title="Edit"
            onClick={() => handleEdit(original)}
          >
            <RiEditBoxLine />
          </button>
          {/* <button
            className="text-blue-500 border border-blue-500 rounded p-1 lg:hover:bg-blue-50"
            title="View"
            onClick={() => handleView(original)}
          >
            <RiEyeLine />
          </button> */}
        </div>
      ),
    },
  ];

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission (create or update)
  const handleSubmit = (e) => {
    e.preventDefault();
    let newData;
    if (activeTab === 'Vitals') {
      newData = {
        id: modalMode === 'create' ? Date.now() : editingItem.id,
        label: formData.label,
        fields: parseInt(formData.fields) || 1,
        maxLength: parseInt(formData.maxLength) || '',
        unit: formData.unit || '',
        separator: formData.separator || '/',
      };
    } else if (activeTab === 'Advice and Direction') {
      newData = {
        id: modalMode === 'create' ? Date.now() : editingItem.id,
        name: formData.name,
        description: formData.description,
      };
    } else {
      newData = {
        id: modalMode === 'create' ? Date.now() : editingItem.id,
        name: formData.name,
      };
    }

    if (modalMode === 'create') {
      setData(prevData => ({
        ...prevData,
        [activeTab]: [...prevData[activeTab], newData],
      }));
    } else if (modalMode === 'edit') {
      setData(prevData => ({
        ...prevData,
        [activeTab]: prevData[activeTab].map(item =>
          item.id === editingItem.id ? newData : item
        ),
      }));
    }

    setIsModalOpen(false);
    setFormData({
      id: Date.now(),
      label: '',
      name: '',
      fields: 1,
      maxLength: '',
      unit: '',
      separator: '/',
      description: '',
    });
    setEditingItem(null);
  };

  // Event handlers
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
    setSearchTerm('');
    setIsModalOpen(false);
    setEditingItem(null);
    setFormData({
      id: Date.now(),
      label: '',
      name: '',
      fields: 1,
      maxLength: '',
      unit: '',
      separator: '/',
      description: '',
    });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const handleCreate = () => {
    setModalMode('create');
    setFormData({
      id: Date.now(),
      label: '',
      name: '',
      fields: 1,
      maxLength: '',
      unit: '',
      separator: '/',
      description: '',
    });
    setIsModalOpen(true);
  };

  const handleEdit = (item) => {
    setModalMode('edit');
    setEditingItem(item);
    setFormData({
      ...item,
      label: item.label || '',
      name: item.name || '',
      fields: item.fields || 1,
      maxLength: item.maxLength || '',
      unit: item.unit || '',
      separator: item.separator || '/',
      description: item.description || '',
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#77db8f',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        setData(prevData => ({
          ...prevData,
          [activeTab]: prevData[activeTab].filter(item => item.id !== id),
        }));
        Swal.fire(
          'Deleted!',
          'The item has been deleted.',
          'success'
        );
      }
    });
  };

  const handleView = (item) => {
    console.log(`View item: ${JSON.stringify(item)}`);
  };

  return (
    <div className="grid grid-cols-1 mx-auto gap-3 w-[96%] lg:ml-[50px]">
      {/* Tabs */}
      <div className=" justify-between flex flex-row items-center gap-2 sm:gap-3 md:gap-4 flex-wrap w-full sm:w-auto">
        <BackButton />
        <Heading>Consultation Setup</Heading>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 ">
          <div className="relative w-full bg-background sm:w-auto">
            <Input
              type="text"
              placeholder="Search by Name"
              className='md:w-20 lg:w-full sm:w-20'
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <Button onClick={handleCreate} variant="primary" className='text-text'>
            <MdOutlineAdd /> Create
          </Button>
        </div>
      </div>
      <div className="flex overflow-x-auto text-center gap-2 pb-2 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-3 py-1.5 text-sm font-medium flex items-center gap-2 transition-colors ${activeTab === tab
              ? 'border-b-2 border-primary text-primary'
              : 'text-text duration-300 lg:hover:text-green-900'
              }`}
            onClick={() => handleTabChange(tab)}
            title={tab}
          >
            {tab === 'Vitals' && <FaHeartbeat />}
            {tab === 'Dosage' && <FaPrescriptionBottle />}
            {tab === 'Units' && <FaRuler />}
            {tab === 'Frequency' && <FaClock />}
            {tab === 'When' && <FaCalendarAlt />}
            {tab === 'Medicine Type' && <FaCapsules />}
            {tab === 'Advice and Direction' && <FaInfoCircle />}
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="space-y-4">
        {/* Search and Create */}


        {/* Table */}
        <Table columns={columns} data={displayedData} />

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <button
              className="p-1 bg-background rounded lg:hover:bg-gray-300 disabled:opacity-50 text-text"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <MdChevronLeft />
            </button>
            <span className="text-text">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="p-1 bg-background rounded lg:hover:bg-gray-300 disabled:opacity-50 text-text"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <MdChevronRight />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="itemsPerPage" className=" text-text">
              Items per page:
            </label>
            <select
              id="itemsPerPage"
              className="border-primary  focus:border-primary focus:ring-2 focus:ring-primary bg-background text-text"
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
            >
              {[10, 25, 50, 100].map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Reusable Modal for Create/Edit */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`${modalMode === 'create' ? 'Create New' : 'Edit'} ${activeTab} Entry`}
        className="w-full max-w-md mx-auto p-4 sm:p-6"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          {activeTab === 'Vitals' ? (
            <>
              <div>
                <label className="block  font-medium text-text">Label</label>
                <input
                  type="text"
                  name="label"
                  value={formData.label}
                  onChange={handleInputChange}
                  className=" w-full p-3 border border-primary rounded-lg bg-background focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Enter label"
                  required
                />
              </div>
              <div>
                <label className="block  font-medium text-text">Fields</label>
                <input
                  type="number"
                  name="fields"
                  value={formData.fields}
                  onChange={handleInputChange}
                  className=" w-full p-3 border border-primary rounded-lg bg-background focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Enter number of fields"
                  min="1"
                  required
                />
              </div>
              <div>
                <label className="block  font-medium text-text">Max Length</label>
                <input
                  type="number"
                  name="maxLength"
                  value={formData.maxLength}
                  onChange={handleInputChange}
                  className=" w-full p-3 border border-primary rounded-lg bg-background focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Enter max length"
                />
              </div>
              <div>
                <label className="block  font-medium text-text">Unit</label>
                <input
                  type="text"
                  name="unit"
                  value={formData.unit}
                  onChange={handleInputChange}
                  className=" w-full p-3 border border-primary rounded-lg bg-background focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Enter unit (e.g., %, mmHg)"
                />
              </div>
              <div>
                <label className="block  font-medium text-text">Separator</label>
                <input
                  type="text"
                  name="separator"
                  value={formData.separator}
                  onChange={handleInputChange}
                  className=" w-full p-3 border border-primary rounded-lg bg-background focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Enter separator (e.g., /)"
                />
              </div>
            </>
          ) : activeTab === 'Advice and Direction' ? (
            <>
              <div>
                <label className="block  font-medium text-text">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className=" w-full p-3 border border-primary rounded-lg bg-background focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Enter name"
                  required
                />
              </div>
              <div>
                <label className="block font-medium text-text">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className=" w-full p-3 border border-primary rounded-lg bg-background focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Enter description"
                  required
                />
              </div>
            </>
          ) : (
            <div>
              <label className="block  font-medium text-text">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className=" w-full p-3 border border-primary rounded-lg bg-background focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder={`Enter ${activeTab.toLowerCase()} name`}
                required
              />
            </div>
          )}
          <div className="flex justify-end gap-2">
            {/* {modalMode === 'edit' && (
        <Button
          variant="danger"
          onClick={() => handleDelete(editingItem.id)}
          className="bg-red-500 text-text lg:hover:bg-red-600"
        >
          <RiDeleteBinLine className="inline mr-1" /> Delete
        </Button>
      )} */}
            <Button
              variant="secondary"
              onClick={() => setIsModalOpen(false)}
              className="bg-background text-text lg:hover:bg-gray-300"
            >
              <RiCloseLine className="inline" /> Cancel
            </Button>
            <Button type="submit" variant="primary">
              <RiSaveLine className="inline" /> {modalMode === 'create' ? 'Create' : 'Update'}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default SetupTable;