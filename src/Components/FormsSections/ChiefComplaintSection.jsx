// // ChiefComplaintsSection.js
import React, { useState } from 'react';
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { FaCheck } from 'react-icons/fa';
import { LuFilePlus2 } from "react-icons/lu";
import Button from '../Button';
import Swal from 'sweetalert2';

// ChiefComplaintsSection Component
function ChiefComplaintsSection({ formData, setFormData }) {
  const addComplaint = () => {
      setFormData({
          ...formData,
          chiefComplaints: [...formData.chiefComplaints, { complaint: '', severity: '', duration: '' }],
      });
  };

  const updateComplaint = (index, field, value) => {
      const updatedComplaints = formData.chiefComplaints.map((c, i) =>
          i === index ? { ...c, [field]: value } : c
      );
      setFormData({ ...formData, chiefComplaints: updatedComplaints });
  };

  return (
      <div>
          <h3 className="text-lg font-semibold mb-2">Chief Complaints</h3>
          {formData.chiefComplaints.map((complaint, index) => (
              <div key={index} className="flex space-x-2 mb-2">
                  <input
                      type="text"
                      placeholder="Complaint"
                      value={complaint.complaint}
                      onChange={(e) => updateComplaint(index, 'complaint', e.target.value)}
                      className="w-full p-3 border border-primary rounded-lg bg-background focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                  <select
                      value={complaint.severity}
                      onChange={(e) => updateComplaint(index, 'severity', e.target.value)}
                      className="w-full p-3 border border-primary rounded-lg bg-background focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                  >
                      <option value="">Severity</option>
                      <option value="Mild">Mild</option>
                      <option value="Moderate">Moderate</option>
                      <option value="Severe">Severe</option>
                  </select>
                  <input
                      type="text"
                      placeholder="Duration"
                      value={complaint.duration}
                      onChange={(e) => updateComplaint(index, 'duration', e.target.value)}
                      className="w-full p-3 border border-primary rounded-lg bg-background focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                  />
              </div>
          ))}
          <Button onClick={addComplaint} className="mb-4 text-white mb-2" variant='primary'>
              <LuFilePlus2 /> Add Complaint
          </Button>
          <input
              type="text"
              placeholder="Ailments From"
              value={formData.ailmentsFrom}
              onChange={(e) => setFormData({ ...formData, ailmentsFrom: e.target.value })}
              className="w-full p-3 border border-primary rounded-lg bg-background focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none mb-4"
          />
          
          <textarea
              placeholder="Additional/Associated Complaints"
              value={formData.associatedComplaints}
              onChange={(e) => setFormData({ ...formData, associatedComplaints: e.target.value })}
              className="w-full p-3 border border-primary rounded-lg bg-background focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none mb-4"
          />
          <textarea
              placeholder="Aggravating Factors"
              value={formData.aggravatingFactors}
              onChange={(e) => setFormData({ ...formData, aggravatingFactors: e.target.value })}
              className="w-full p-3 border border-primary rounded-lg bg-background focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
          />
          <input
              type="file"
              placeholder="Photo"
              className="w-full p-3 border border-primary rounded-lg bg-background focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none mb-4"
          />
      </div>
  );
}

export default ChiefComplaintsSection;

// import React from 'react';
// import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
// import { FaCheck } from 'react-icons/fa';
// import { LuFilePlus2, LuFileClock, LuImagePlus } from "react-icons/lu";
// import { FaNotesMedical } from "react-icons/fa6";
// import { MdOutlineWarning } from "react-icons/md"; // Changed from MdOutlineSeverity
// import Button from '../Button';
// import Input from '../FormFields/InputField';
// import Select from '../FormFields/SelectField';
// import Swal from 'sweetalert2';

// // ChiefComplaintsSection Component
// function ChiefComplaintsSection({ formData, setFormData }) {
//   const addComplaint = () => {
//     setFormData({
//       ...formData,
//       chiefComplaints: [...formData.chiefComplaints, { complaint: '', severity: '', duration: '' }],
//     });
//   };

//   const updateComplaint = (index, field, value) => {
//     const updatedComplaints = formData.chiefComplaints.map((c, i) =>
//       i === index ? { ...c, [field]: value } : c
//     );
//     setFormData({ ...formData, chiefComplaints: updatedComplaints });
//   };

//   const severityOptions = [
//     { value: '', label: 'Severity', disabled: true },
//     { value: 'Mild', label: 'Mild' },
//     { value: 'Moderate', label: 'Moderate' },
//     { value: 'Severe', label: 'Severe' },
//   ];

//   return (
//     <div className='w-full'>
//       <h3 className="text-lg font-semibold mb-2">Chief Complaints</h3>
//       {formData.chiefComplaints.map((complaint, index) => (
//       <div key={index} className="flex gap-2" style={{width:'100% !important'}}>
//       <Input
//         name={`complaint-${index}`}
//         value={complaint.complaint}
//         onChange={(e) => updateComplaint(index, 'complaint', e.target.value)}
//         placeholder="Complaint"
//         className="flex-1 w-full"
//       />
//       <Select
//         name={`severity-${index}`}
//         value={complaint.severity}
//         onChange={(e) => updateComplaint(index, 'severity', e.target.value)}
//         options={severityOptions}
//         className="w-auto"
//       />
//       <Input
//         name={`duration-${index}`}
//         value={complaint.duration}
//         onChange={(e) => updateComplaint(index, 'duration', e.target.value)}
//         placeholder="Duration"
//         className="w-1/4"
//       />
//     </div>
//       ))}
//       <Button onClick={addComplaint} className="mb-4" variant='primary'>
//         <LuFilePlus2 /> Add Complaint
//       </Button>
      
//       <Input
//         name="ailmentsFrom"
//         value={formData.ailmentsFrom}
//         onChange={(e) => setFormData({ ...formData, ailmentsFrom: e.target.value })}
//         placeholder="Ailments From"
//         // iconLeft={<LuFileClock />}
//         className="mb-4"
//       />
      
//       <Input
//         type="textarea"
//         name="associatedComplaints"
//         value={formData.associatedComplaints}
//         onChange={(e) => setFormData({ ...formData, associatedComplaints: e.target.value })}
//         placeholder="Additional/Associated Complaints"
//         // iconLeft={<FaNotesMedical />}
//         className="mb-4"
//       />
      
//       <Input
//         type="textarea"
//         name="aggravatingFactors"
//         value={formData.aggravatingFactors}
//         onChange={(e) => setFormData({ ...formData, aggravatingFactors: e.target.value })}
//         placeholder="Aggravating Factors"
//         // iconLeft={<FaNotesMedical />}
//         className="mb-4"
//       />
      
//       <Input
//         type="file"
//         name="photo"
//         placeholder="Photo"
//         // iconLeft={<LuImagePlus />}
//         className="mb-4 w-full"
//       />
//     </div>
//   );
// }

// export default ChiefComplaintsSection;