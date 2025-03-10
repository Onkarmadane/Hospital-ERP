import React from 'react'

function PastHistorySection({ formData, setFormData }) {
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    return (
      <div>
        <h3 className="text-xl font-semibold mb-2">Past History</h3>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="pastHistory" className="block text-sm font-medium text-gray-700">Past History</label>
            <textarea
              id="pastHistory"
              name="pastHistory"
              value={formData.pastHistory}
              onChange={handleChange}
              className="mt-1 w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>
        </div>
      </div>
    );
  }

export default PastHistorySection