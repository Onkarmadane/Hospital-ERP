// PresentComplaintSection.js
import React from 'react';

function PresentComplaintSection({ formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">Present Complaint</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="complaint" className="block text-sm font-medium text-gray-700">Complaint</label>
          <input
            type="text"
            id="complaint"
            name="complaint"
            value={formData.complaint}
            onChange={handleChange}
            className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Photo</label>
          <input type="file" id="photo" name="photo" className="mt-1 block w-full" />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="ailmentsFrom" className="block text-sm font-medium text-gray-700">Ailments From</label>
          <input
            type="text"
            id="ailmentsFrom"
            name="ailmentsFrom"
            value={formData.ailmentsFrom}
            onChange={handleChange}
            className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="additionalComplaints" className="block text-sm font-medium text-gray-700">Additional Complaints</label>
          <textarea
            id="additionalComplaints"
            name="additionalComplaints"
            value={formData.additionalComplaints}
            onChange={handleChange}
            className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}

export default PresentComplaintSection;