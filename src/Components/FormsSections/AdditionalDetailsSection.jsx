import React from 'react'

function AdditionalDetailsSection({ formData, setFormData }) {
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    return (
      <div>
        <h3 className="text-xl font-semibold mb-2">Additional Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="thermalLike" className="block text-sm font-medium text-gray-700">Thermal Like</label>
            <input
              type="text"
              id="thermalLike"
              name="thermalLike"
              value={formData.thermalLike}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
            />
          </div>
          <div>
            <label htmlFor="thermalDislike" className="block text-sm font-medium text-gray-700">Thermal Dislike</label>
            <input
              type="text"
              id="thermalDislike"
              name="thermalDislike"
              value={formData.thermalDislike}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="nature" className="block text-sm font-medium text-gray-700">Nature</label>
            <input
              type="text"
              id="nature"
              name="nature"
              value={formData.nature}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
            />
          </div>
        </div>
      </div>
    );
  }

export default AdditionalDetailsSection