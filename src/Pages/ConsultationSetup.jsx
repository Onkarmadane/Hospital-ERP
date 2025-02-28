import React, { useState } from 'react';
import { FaSearch, FaEye, FaTrash, FaList, FaTh } from 'react-icons/fa';
import { MdChevronLeft, MdChevronRight, MdClose } from 'react-icons/md';
import { RiDeleteBinLine, RiEditBoxLine, RiEyeLine } from 'react-icons/ri';
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

// Static data for each tab
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
  { id: 3, name: '' },
  { id: 4, name: '0-1-0' },
  { id: 5, name: '' },
  { id: 6, name: '1-0-1' },
  { id: 7, name: '' },
  { id: 8, name: '1-1-1' },
  { id: 9, name: '' },
  { id: 10, name: '' },
  { id: 11, name: '1-0-1' },
  { id: 12, name: '' },
  { id: 13, name: '1-0-1' },
];

const initialUnitsData = [
  { id: 1, name: 'MG' },
  { id: 2, name: '' },
  { id: 3, name: '' },
  { id: 4, name: '3.5ML' },
  { id: 5, name: 'UNDEFINED' },
  { id: 6, name: 'NAN' },
  { id: 7, name: 'MCG' },
  { id: 8, name: '' },
  { id: 9, name: '-1' },
  { id: 10, name: '' },
  { id: 11, name: '' },
  { id: 12, name: 'TAB' },
  { id: 13, name: 'IU' },
  { id: 14, name: 'AVIIU' },
  { id: 15, name: 'ML' },
];

const initialFrequencyData = [
  { id: 1, name: '' },
  { id: 2, name: 'TO CONTINUE' },
  { id: 3, name: '' },
  { id: 4, name: '' },
  { id: 5, name: '' },
  { id: 6, name: 'DAILY' },
  { id: 7, name: '' },
  { id: 8, name: '' },
  { id: 9, name: '' },
  { id: 10, name: '' },
  { id: 11, name: '' },
  { id: 12, name: '' },
  { id: 13, name: '' },
  { id: 14, name: '' },
  { id: 15, name: '' },
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
  { id: 10, name: '' },
  { id: 11, name: 'AFTER FOOD' },
  { id: 12, name: 'AFTER BREAKFAST' },
  { id: 13, name: 'EMPTY STOMACH' },
  { id: 14, name: '' },
  { id: 15, name: '' },
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

// Placeholder action handlers
const handleDelete = (id) => console.log(`Delete item with ID: ${id}`);
const handleEdit = (item) => console.log(`Edit item: ${JSON.stringify(item)}`);
const handleView = (item) => console.log(`View item: ${JSON.stringify(item)}`);

const SetupTable = () => {
  const [activeTab, setActiveTab] = useState('Vitals');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: Date.now(), // Unique ID for new entries
    label: '',
    name: '',
    fields: 1,
    maxLength: '',
    unit: '',
    separator: '/',
    description: '',
  });

  // Function to get initial data based on active tab
  const getInitialData = () => {
    switch (activeTab) {
      case 'Vitals':
        return initialVitalsData;
      case 'Dosage':
        return initialDosageData;
      case 'Units':
        return initialUnitsData;
      case 'Frequency':
        return initialFrequencyData;
      case 'When':
        return initialWhenData;
      case 'Medicine Type':
        return initialMedicineTypeData;
      case 'Advice and Direction':
        return initialAdviceDirectionData;
      default:
        return initialVitalsData;
    }
  };

  const currentData = getInitialData();

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
      header: activeTab === 'Advice and Direction' ? 'Name' : 'Label', 
      accessor: activeTab === 'Advice and Direction' ? 'name' : 'label' 
    },
    ...(activeTab === 'Advice and Direction' ? [{ header: 'Description', accessor: 'description' }] : []),
    {
      header: 'Action',
      accessor: 'action',
      Cell: ({ row: { original } }) => (
        <div className="flex gap-1">
          <button
            className="text-red-500 border border-red-500 rounded p-1 hover:bg-red-50"
            title="Delete"
            onClick={() => handleDelete(original.id)}
          >
            <RiDeleteBinLine />
          </button>
          <button
            className="text-green-500 border border-green-500 rounded p-1 hover:bg-green-50"
            title="Edit"
            onClick={() => handleEdit(original)}
          >
            <RiEditBoxLine />
          </button>
          <button
            className="text-blue-500 border border-blue-500 rounded p-1 hover:bg-blue-50"
            title="View"
            onClick={() => handleView(original)}
          >
            <RiEyeLine />
          </button>
        </div>
      ),
    },
  ];

  // Handle form change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      ...formData,
      id: Date.now(), // Ensure unique ID
    };

    // Add new data to the respective tab's data array
    switch (activeTab) {
      case 'Vitals':
        initialVitalsData.push({
          ...newData,
          fields: parseInt(newData.fields) || 1,
          maxLength: parseInt(newData.maxLength) || '',
          unit: newData.unit || '',
          separator: newData.separator || '/',
        });
        break;
      case 'Dosage':
      case 'Units':
      case 'Frequency':
      case 'When':
      case 'Medicine Type':
        initialData[activeTab.toLowerCase()].push({ id: newData.id, name: newData.name });
        break;
      case 'Advice and Direction':
        initialAdviceDirectionData.push({
          id: newData.id,
          name: newData.name,
          description: newData.description,
        });
        break;
      default:
        break;
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
  };

  // Event handlers
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
    setSearchTerm('');
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

  const handleCreate = () => setIsModalOpen(true);

  return (
    <div className="grid grid-cols-1 gap-3 w-[95%] lg:ms-[70px] px-2">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 border-b pb-2 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md transition-colors ${
              activeTab === tab
                ? 'bg-primary text-white shadow-lg'
                : 'text-gray-800 bg-gray-200 hover:bg-primary hover:text-white'
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
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <Button onClick={handleCreate} variant="primary">
            <MdOutlineAdd /> Create
          </Button>
          <div className="relative w-full bg-white sm:w-auto">
            <input
              type="text"
              placeholder="Search by Name"
              className="w-full sm:w-64 py-2 px-4 rounded-md border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              value={searchTerm}
              onChange={handleSearch}
            />
            <FaSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Table */}
        <Table columns={columns} data={displayedData} />

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <button
              className="p-1 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <MdChevronLeft />
            </button>
            <span className="text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="p-1 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <MdChevronRight />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="itemsPerPage" className="text-sm text-gray-700">
              Items per page:
            </label>
            <select
              id="itemsPerPage"
              className="py-1 px-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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

      {/* Create Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Create New {activeTab} Entry</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <MdClose size={24} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              {activeTab === 'Vitals' ? (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Label</label>
                    <input
                      type="text"
                      name="label"
                      value={formData.label}
                      onChange={handleInputChange}
                      className="d-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-white w-full text-black"
                      placeholder="Enter label"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Fields</label>
                    <input
                      type="number"
                      name="fields"
                      value={formData.fields}
                      onChange={handleInputChange}
                      className="d-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-white w-full text-black"
                      placeholder="Enter number of fields"
                      min="1"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Max Length</label>
                    <input
                      type="number"
                      name="maxLength"
                      value={formData.maxLength}
                      onChange={handleInputChange}
                      className="d-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-white w-full text-black"
                      placeholder="Enter max length"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Unit</label>
                    <input
                      type="text"
                      name="unit"
                      value={formData.unit}
                      onChange={handleInputChange}
                      className="d-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-white w-full text-black"
                      placeholder="Enter unit (e.g., %, mmHg)"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Separator</label>
                    <input
                      type="text"
                      name="separator"
                      value={formData.separator}
                      onChange={handleInputChange}
                      className="d-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-white w-full text-black"
                      placeholder="Enter separator (e.g., /)"
                    />
                  </div>
                </>
              ) : activeTab === 'Advice and Direction' ? (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="d-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-white w-full text-black"
                      placeholder="Enter name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      className="d-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-white w-full text-black"
                      placeholder="Enter description"
                      required
                    />
                  </div>
                </>
              ) : (
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="d-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-white w-full text-black"
                    placeholder={`Enter ${activeTab.toLowerCase()} name`}
                    required
                  />
                </div>
              )}
              <div className="flex justify-end gap-2">
                <Button
                  variant="secondary"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-200 text-gray-800 hover:bg-gray-300"
                >
                  Cancel
                </Button>
                <Button type="submit" variant="primary">
                  Create
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SetupTable;