// MedicalHistorySection.js
import React, { useState } from 'react';
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { FaCheck } from 'react-icons/fa';
import { LuFilePlus2 } from "react-icons/lu";
import Button from '../Button';
import Swal from 'sweetalert2';
import Heading from '../Heading';

// MedicalHistorySection Component
function MedicalHistorySection({ formData, setFormData }) {
  const conditions = ['HTN', 'DM', 'IHD', 'Cholesterol', 'Thyroid', 'Others'];

  return (
      <div>
          <h3 className="text-lg font-semibold mb-2 text-text">Medical History</h3>
          <div className='flex space-y-2 flex-wrap gap-2'>
              {conditions.map((condition) => (
                  <div key={condition} className="flex  items-center space-x-2 text-text">
                      <input
                          type="checkbox"
                          checked={formData.medicalHistory[condition.toLowerCase()].hasCondition}
                          className='bg-primary text-text'
                          onChange={(e) =>
                              setFormData({
                                  ...formData,
                                  medicalHistory: {
                                      ...formData.medicalHistory,
                                      [condition.toLowerCase()]: {
                                          ...formData.medicalHistory[condition.toLowerCase()],
                                          hasCondition: e.target.checked,
                                      },
                                  },
                              })
                          }
                      />
                      <span>{condition}</span>
                      <input
                          type="date"
                          placeholder="Since"
                          value={formData.medicalHistory[condition.toLowerCase()].since}
                          onChange={(e) =>
                              setFormData({
                                  ...formData,
                                  medicalHistory: {
                                      ...formData.medicalHistory,
                                      [condition.toLowerCase()]: {
                                          ...formData.medicalHistory[condition.toLowerCase()],
                                          since: e.target.value,
                                      },
                                  },
                              })
                          }
                          className="p-3 border border-primary rounded-lg bg-background focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                      />
                  </div>
              ))}
          </div>
          <textarea
              placeholder="Past History"
              value={formData.pastHistory}
              onChange={(e) => setFormData({ ...formData, pastHistory: e.target.value })}
              className="w-full p-3 border border-primary rounded-lg bg-background focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none mt-4"
          />
          <textarea
              placeholder="Current Medication"
              value={formData.currentMedication}
              onChange={(e) => setFormData({ ...formData, currentMedication: e.target.value })}
              className="w-full p-3 border border-primary rounded-lg bg-background focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none mt-4"
          />
          <textarea
              placeholder="History of Allergy"
              value={formData.allergyHistory}
              onChange={(e) => setFormData({ ...formData, allergyHistory: e.target.value })}
              className="w-full p-3 border border-primary rounded-lg bg-background focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none mt-4"
          />
          <textarea
              placeholder="Surgical History"
              value={formData.surgicalHistory}
              onChange={(e) => setFormData({ ...formData, surgicalHistory: e.target.value })}
              className="w-full p-3 border border-primary rounded-lg bg-background focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none mt-4"
          />
          <h3 className="text-lg font-semibold mt-4 mb-2">Family History</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                  <input
                      type="number"
                      placeholder="No of Brothers"
                      value={formData.noOfBrothers}
                      onChange={(e) => setFormData({ ...formData, noOfBrothers: e.target.value })}
                      className="w-full p-3 border border-primary rounded-lg bg-background focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                  <input
                      type="text"
                      placeholder="Illness in Brothers"
                      value={formData.illnessBrothers}
                      onChange={(e) => setFormData({ ...formData, illnessBrothers: e.target.value })}
                      className="w-full p-3 border border-primary rounded-lg bg-background focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none mt-2"
                  />
              </div>
              <div>
                  <input
                      type="number"
                      placeholder="No of Sisters"
                      value={formData.noOfSisters}
                      onChange={(e) => setFormData({ ...formData, noOfSisters: e.target.value })}
                      className="w-full p-3 border border-primary rounded-lg bg-background focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                  <input
                      type="text"
                      placeholder="Illness in Sisters"
                      value={formData.illnessSisters}
                      onChange={(e) => setFormData({ ...formData, illnessSisters: e.target.value })}
                      className="w-full p-3 border border-primary rounded-lg bg-background focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none mt-2"
                  />
              </div>
              <div>
                  <input
                      type="number"
                      placeholder="No of Sons"
                      value={formData.noOfSons}
                      onChange={(e) => setFormData({ ...formData, noOfSons: e.target.value })}
                      className="w-full p-3 border border-primary rounded-lg bg-background focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                  <input
                      type="text"
                      placeholder="Illness in Sons"
                      value={formData.illnessSons}
                      onChange={(e) => setFormData({ ...formData, illnessSons: e.target.value })}
                      className="w-full p-3 border border-primary rounded-lg bg-background focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none mt-2"
                  />
              </div>
              <div>
                  <input
                      type="number"
                      placeholder="No of Daughters"
                      value={formData.noOfDaughters}
                      onChange={(e) => setFormData({ ...formData, noOfDaughters: e.target.value })}
                      className="w-full p-3 border border-primary rounded-lg bg-background focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                  <input
                      type="text"
                      placeholder="Illness in Daughters"
                      value={formData.illnessDaughters}
                      onChange={(e) => setFormData({ ...formData, illnessDaughters: e.target.value })}
                      className="w-full p-3 border border-primary rounded-lg bg-background focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none mt-2"
                  />
              </div>
              <input
                  type="text"
                  placeholder="Mother"
                  value={formData.familyHistory.mother}
                  onChange={(e) =>
                      setFormData({
                          ...formData,
                          familyHistory: { ...formData.familyHistory, mother: e.target.value },
                      })
                  }
                  className="w-full p-3 border border-primary rounded-lg bg-background focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
              />
              <input
                  type="text"
                  placeholder="Father"
                  value={formData.familyHistory.father}
                  onChange={(e) =>
                      setFormData({
                          ...formData,
                          familyHistory: { ...formData.familyHistory, father: e.target.value },
                      })
                  }
                  className="w-full p-3 border border-primary rounded-lg bg-background focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
              />
          </div>
      </div>
  );
}

export default MedicalHistorySection;