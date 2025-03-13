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
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
        className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
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
        className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
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
        className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
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
        className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
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
        className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
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
        className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
      />
    </div>
  
    <div className="grid grid-cols-2 gap-4 mt-4">
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
        className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
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
        className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
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
        className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
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
        className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
      />
    </div>
  
    <div className="mt-4">
      <textarea
        placeholder="Local/Specific Examination"
        value={formData.localExamination}
        onChange={(e) => setFormData({ ...formData, localExamination: e.target.value })}
        className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
      />
      <textarea
        placeholder="General/Systemic Examination"
        value={formData.generalExamination}
        onChange={(e) => setFormData({ ...formData, generalExamination: e.target.value })}
        className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none mt-4"
      />
      <textarea
        placeholder="Advise"
        value={formData.advise}
        onChange={(e) => setFormData({ ...formData, advise: e.target.value })}
        className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none mt-4"
      />
    </div>
  </div>
  );
}

export default MenstrualHistorySection;