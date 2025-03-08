import React from 'react'

function PhysicalGeneralSection({ formData, setFormData }) {
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    return (
      <div>
        <h3 className="text-xl font-semibold mb-2">Physical Generals</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="appetite" className="block text-sm font-medium text-gray-700">Appetite</label>
            <input
              type="text"
              id="appetite"
              name="appetite"
              value={formData.appetite}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
            />
          </div>
          <div>
            <label htmlFor="desire" className="block text-sm font-medium text-gray-700">Desire</label>
            <input
              type="text"
              id="desire"
              name="desire"
              value={formData.desire}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
            />
          </div>
          <div>
            <label htmlFor="aversion" className="block text-sm font-medium text-gray-700">Aversion</label>
            <input
              type="text"
              id="aversion"
              name="aversion"
              value={formData.aversion}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
            />
          </div>
          <div>
            <label htmlFor="sleep" className="block text-sm font-medium text-gray-700">Sleep</label>
            <input
              type="text"
              id="sleep"
              name="sleep"
              value={formData.sleep}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
            />
          </div>
        </div>
      </div>
    );
  }

export default PhysicalGeneralSection