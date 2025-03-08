// ChiefComplaintsSection.js
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
                      className="p-2 border rounded bg-white flex-1"
                  />
                  <select
                      value={complaint.severity}
                      onChange={(e) => updateComplaint(index, 'severity', e.target.value)}
                      className="p-2 border rounded bg-white"
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
                      className="p-2 border rounded bg-white w-1/4"
                  />
              </div>
          ))}
          <Button onClick={addComplaint} className="mb-4" variant='primary'>
              <LuFilePlus2 /> Add Complaint
          </Button>
          <input
              type="text"
              placeholder="Ailments From"
              value={formData.ailmentsFrom}
              onChange={(e) => setFormData({ ...formData, ailmentsFrom: e.target.value })}
              className="p-2 border rounded bg-white w-full mb-4"
          />
          <textarea
              placeholder="Additional/Associated Complaints"
              value={formData.associatedComplaints}
              onChange={(e) => setFormData({ ...formData, associatedComplaints: e.target.value })}
              className="p-2 border rounded bg-white w-full mb-4"
          />
          <textarea
              placeholder="Aggravating Factors"
              value={formData.aggravatingFactors}
              onChange={(e) => setFormData({ ...formData, aggravatingFactors: e.target.value })}
              className="p-2 border rounded bg-white w-full"
          />
          <input
              type="file"
              placeholder="Photo"
              className="p-2 border rounded bg-white w-full mb-4"
          />
      </div>
  );
}

export default ChiefComplaintsSection;