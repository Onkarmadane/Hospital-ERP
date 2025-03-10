// NadiParikshanSection.js
import React, { useState } from 'react';
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { FaCheck } from 'react-icons/fa';
import { LuFilePlus2 } from "react-icons/lu";
import Button from '../Button';
import Swal from 'sweetalert2';


// NadiParikshanSection Component
function NadiParikshanSection({ formData, setFormData }) {
  return (
      <div>
          <h3 className="text-lg font-semibold mb-2">Nadi Parikshan & Physical Generals</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <select
                  value={formData.nadiParikshan.vata}
                  onChange={(e) =>
                      setFormData({
                          ...formData,
                          nadiParikshan: { ...formData.nadiParikshan, vata: e.target.value },
                      })
                  }
                  className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
              >
                  <option value="">Vata</option>
                  <option value="Normal">Normal</option>
                  <option value="Increased">Increased</option>
                  <option value="Decreased">Decreased</option>
              </select>
              <select
                  value={formData.nadiParikshan.pitta}
                  onChange={(e) =>
                      setFormData({
                          ...formData,
                          nadiParikshan: { ...formData.nadiParikshan, pitta: e.target.value },
                      })
                  }
                  className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
              >
                  <option value="">Pitta</option>
                  <option value="Normal">Normal</option>
                  <option value="Increased">Increased</option>
                  <option value="Decreased">Decreased</option>
              </select>
              <select
                  value={formData.nadiParikshan.kapha}
                  onChange={(e) =>
                      setFormData({
                          ...formData,
                          nadiParikshan: { ...formData.nadiParikshan, kapha: e.target.value },
                      })
                  }
                  className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
              >
                  <option value="">Kapha</option>
                  <option value="Normal">Normal</option>
                  <option value="Increased">Increased</option>
                  <option value="Decreased">Decreased</option>
              </select>
          </div>
          <h3 className="text-lg font-semibold mt-4 mb-2">Physical Generals</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                  type="text"
                  placeholder="Appetite"
                  value={formData.appetite}
                  onChange={(e) => setFormData({ ...formData, appetite: e.target.value })}
                  className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
              />
              <input
                  type="text"
                  placeholder="Desire"
                  value={formData.desire}
                  onChange={(e) => setFormData({ ...formData, desire: e.target.value })}
                  className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
              />
              <input
                  type="text"
                  placeholder="Aversion"
                  value={formData.aversion}
                  onChange={(e) => setFormData({ ...formData, aversion: e.target.value })}
                  className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
              />
              <input
                  type="text"
                  placeholder="Sleep (Nindra)"
                  value={formData.nindra}
                  onChange={(e) => setFormData({ ...formData, nindra: e.target.value })}
                  className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
              />
              <input
                  type="text"
                  placeholder="Thermal Like"
                  value={formData.thermalLike}
                  onChange={(e) => setFormData({ ...formData, thermalLike: e.target.value })}
                  className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
              />
              <input
                  type="text"
                  placeholder="Thermal Dislike"
                  value={formData.thermalDislike}
                  onChange={(e) => setFormData({ ...formData, thermalDislike: e.target.value })}
                  className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
              />
          </div>
          <input
              type="text"
              placeholder="Nature"
              value={formData.nature}
              onChange={(e) => setFormData({ ...formData, nature: e.target.value })}
              className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none w-full mt-4"
          />
          <select
              value={formData.agni}
              onChange={(e) => setFormData({ ...formData, agni: e.target.value })}
              className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none w-full mt-4"
          >
              <option value="">Agni</option>
              <option value="Good">Good</option>
              <option value="Average">Average</option>
              <option value="Poor">Poor</option>
          </select>
          <textarea
              placeholder="Mala Pravrutti"
              value={formData.malaPravrutti}
              onChange={(e) => setFormData({ ...formData, malaPravrutti: e.target.value })}
              className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none w-full mt-4"
          />
          <textarea
              placeholder="Mutra"
              value={formData.mutra}
              onChange={(e) => setFormData({ ...formData, mutra: e.target.value })}
              className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none w-full mt-4"
          />
          <input
              type="number"
              placeholder="Pain Assessment (0-10)"
              value={formData.painAssessment}
              onChange={(e) => setFormData({ ...formData, painAssessment: e.target.value })}
              min="0"
              max="10"
              className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none w-full mt-4"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <input
                  type="text"
                  placeholder="BP (e.g., 114/76 mmHg)"
                  value={formData.vitalSigns.bp}
                  onChange={(e) =>
                      setFormData({
                          ...formData,
                          vitalSigns: { ...formData.vitalSigns, bp: e.target.value },
                      })
                  }
                  className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
              />
              <input
                  type="text"
                  placeholder="Pulse (e.g., /min)"
                  value={formData.vitalSigns.pulse}
                  onChange={(e) =>
                      setFormData({
                          ...formData,
                          vitalSigns: { ...formData.vitalSigns, pulse: e.target.value },
                      })
                  }
                  className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
              />
          </div>
          <input
              type="file"
              placeholder="Test Report"
              className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none w-full mt-4"
          />
      </div>
  );
}

export default NadiParikshanSection;