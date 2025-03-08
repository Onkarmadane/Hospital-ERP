// MenstrualHistorySection.js
import React, { useState } from 'react';
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { FaCheck } from 'react-icons/fa';
import { LuFilePlus2 } from "react-icons/lu";
import Button from '../Button';
import Swal from 'sweetalert2';


// MenstrualHistorySection Component
function MenstrualHistorySection({ formData, setFormData }) {
  return (
      <div>
          <h3 className="text-lg font-semibold mb-2">Menstrual/Obstetrical History</h3>
          <input
              type="text"
              placeholder="LMP (Last Menstrual Period)"
              value={formData.menstrualHistory.lmp}
              onChange={(e) =>
                  setFormData({
                      ...formData,
                      menstrualHistory: { ...formData.menstrualHistory, lmp: e.target.value },
                  })
              }
              className="p-2 border rounded bg-white w-full mb-4"
          />
          <input
              type="text"
              placeholder="Cycle Duration"
              value={formData.menstrualHistory.cycleDuration}
              onChange={(e) =>
                  setFormData({
                      ...formData,
                      menstrualHistory: { ...formData.menstrualHistory, cycleDuration: e.target.value },
                  })
              }
              className="p-2 border rounded bg-white w-full mb-4"
          />
          <input
              type="text"
              placeholder="Bleeding"
              value={formData.menstrualHistory.bleeding}
              onChange={(e) =>
                  setFormData({
                      ...formData,
                      menstrualHistory: { ...formData.menstrualHistory, bleeding: e.target.value },
                  })
              }
              className="p-2 border rounded bg-white w-full mb-4"
          />
          <input
              type="text"
              placeholder="PMS"
              value={formData.menstrualHistory.pms}
              onChange={(e) =>
                  setFormData({
                      ...formData,
                      menstrualHistory: { ...formData.menstrualHistory, pms: e.target.value },
                  })
              }
              className="p-2 border rounded bg-white w-full mb-4"
          />
          <input
              type="text"
              placeholder="Menarche"
              value={formData.menstrualHistory.menarche}
              onChange={(e) =>
                  setFormData({
                      ...formData,
                      menstrualHistory: { ...formData.menstrualHistory, menarche: e.target.value },
                  })
              }
              className="p-2 border rounded bg-white w-full mb-4"
          />
          <input
              type="number"
              placeholder="Menopause Age"
              value={formData.menstrualHistory.menopause}
              onChange={(e) =>
                  setFormData({
                      ...formData,
                      menstrualHistory: { ...formData.menstrualHistory, menopause: e.target.value },
                  })
              }
              className="p-2 border rounded bg-white w-full mb-4"
          />
          <div className="grid grid-cols-2 gap-4">
              <input
                  type="number"
                  placeholder="Gravida"
                  value={formData.obstetricalHistory.gravida}
                  onChange={(e) =>
                      setFormData({
                          ...formData,
                          obstetricalHistory: { ...formData.obstetricalHistory, gravida: e.target.value },
                      })
                  }
                  className="p-2 border rounded bg-white"
              />
              <input
                  type="number"
                  placeholder="Para"
                  value={formData.obstetricalHistory.para}
                  onChange={(e) =>
                      setFormData({
                          ...formData,
                          obstetricalHistory: { ...formData.obstetricalHistory, para: e.target.value },
                      })
                  }
                  className="p-2 border rounded bg-white"
              />
              <input
                  type="number"
                  placeholder="Abortions"
                  value={formData.obstetricalHistory.abortions}
                  onChange={(e) =>
                      setFormData({
                          ...formData,
                          obstetricalHistory: { ...formData.obstetricalHistory, abortions: e.target.value },
                      })
                  }
                  className="p-2 border rounded bg-white"
              />
              <input
                  type="number"
                  placeholder="Living Children"
                  value={formData.obstetricalHistory.living}
                  onChange={(e) =>
                      setFormData({
                          ...formData,
                          obstetricalHistory: { ...formData.obstetricalHistory, living: e.target.value },
                      })
                  }
                  className="p-2 border rounded bg-white"
              />
          </div>
          <textarea
              placeholder="Local/Specific Examination"
              value={formData.localExamination}
              onChange={(e) => setFormData({ ...formData, localExamination: e.target.value })}
              className="p-2 border rounded bg-white w-full mt-4"
          />
          <textarea
              placeholder="General/Systemic Examination"
              value={formData.generalExamination}
              onChange={(e) => setFormData({ ...formData, generalExamination: e.target.value })}
              className="p-2 border rounded bg-white w-full mt-4"
          />
          <textarea
              placeholder="Advise"
              value={formData.advise}
              onChange={(e) => setFormData({ ...formData, advise: e.target.value })}
              className="p-2 border rounded bg-white w-full mt-4"
          />
      </div>
  );
}

export default MenstrualHistorySection;