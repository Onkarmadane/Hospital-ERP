import React from 'react'

function FamilyHistoryMarriedSection({ formData, setFormData }) {
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    return (
      <div>
        <h3 className="text-xl font-semibold mb-2">Family History - For Married</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="noOfSons" className="block text-sm font-medium text-gray-700">No of Sons</label>
            <input
              type="number"
              id="noOfSons"
              name="noOfSons"
              value={formData.noOfSons}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
            />
          </div>
          <div>
            <label htmlFor="illnessSons" className="block text-sm font-medium text-gray-700">Illness in Sons</label>
            <input
              type="text"
              id="illnessSons"
              name="illnessSons"
              value={formData.illnessSons}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
            />
          </div>
          <div>
            <label htmlFor="noOfDaughters" className="block text-sm font-medium text-gray-700">No of Daughters</label>
            <input
              type="number"
              id="noOfDaughters"
              name="noOfDaughters"
              value={formData.noOfDaughters}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
            />
          </div>
          <div>
            <label htmlFor="illnessDaughters" className="block text-sm font-medium text-gray-700">Illness in Daughters</label>
            <input
              type="text"
              id="illnessDaughters"
              name="illnessDaughters"
              value={formData.illnessDaughters}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
            />
          </div>
        </div>
      </div>
    );
  }

export default FamilyHistoryMarriedSection