import React from 'react'

function FamilyHistorySection({ formData, setFormData }) {
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    return (
      <div>
        <h3 className="text-xl font-semibold mb-2">Family History</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="noOfBrothers" className="block text-sm font-medium text-gray-700">No of Brothers</label>
            <input
              type="number"
              id="noOfBrothers"
              name="noOfBrothers"
              value={formData.noOfBrothers}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
            />
          </div>
          <div>
            <label htmlFor="illnessBrothers" className="block text-sm font-medium text-gray-700">Illness in Brothers</label>
            <input
              type="text"
              id="illnessBrothers"
              name="illnessBrothers"
              value={formData.illnessBrothers}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
            />
          </div>
          <div>
            <label htmlFor="noOfSisters" className="block text-sm font-medium text-gray-700">No of Sisters</label>
            <input
              type="number"
              id="noOfSisters"
              name="noOfSisters"
              value={formData.noOfSisters}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
            />
          </div>
          <div>
            <label htmlFor="illnessSisters" className="block text-sm font-medium text-gray-700">Illness in Sisters</label>
            <input
              type="text"
              id="illnessSisters"
              name="illnessSisters"
              value={formData.illnessSisters}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
            />
          </div>
        </div>
      </div>
    );
  }

export default FamilyHistorySection