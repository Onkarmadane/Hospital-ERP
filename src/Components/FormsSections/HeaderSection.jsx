import React, { useState } from 'react';
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { FaCheck } from 'react-icons/fa';
import { LuFilePlus2 } from "react-icons/lu";
import Button from '../Button';
import Swal from 'sweetalert2';

// HeaderSection Component
function HeaderSection({ formData, setFormData }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
                type="text"
                placeholder="Patient Name"
                value={formData.patientName}
                onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none "
            />
            <input
                type="text"
                placeholder="UHID No."
                value={formData.uhidNo}
                onChange={(e) => setFormData({ ...formData, uhidNo: e.target.value })}
                className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none "
            />
            <input
                type="datetime-local"
                value={formData.dateTime}
                onChange={(e) => setFormData({ ...formData, dateTime: e.target.value })}
                className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none "
            />
            <input
                type="text"
                placeholder="Place"
                value={formData.place}
                onChange={(e) => setFormData({ ...formData, place: e.target.value })}
                className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none "
            />
            <div className="flex space-x-2">
                <input
                    type="number"
                    placeholder="Age"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none  w-1/2"
                />
                <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none  w-1/2"
                    required
                >
                    <option value="">Gender</option>
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <input
                type="text"
                placeholder="Occupation"
                value={formData.occupation}
                onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none "
            />
            <select
                value={formData.maritalStatus}
                onChange={(e) => setFormData({ ...formData, maritalStatus: e.target.value })}
                className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none "
            >
                <option value="">Marital Status</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Widowed">Widowed</option>
            </select>
            <input
                type="text"
                placeholder="Diagnosis"
                value={formData.diagnosis}
                onChange={(e) => setFormData({ ...formData, diagnosis: e.target.value })}
                className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none "
            />
            <input
                type="text"
                placeholder="Reference"
                value={formData.reference}
                onChange={(e) => setFormData({ ...formData, reference: e.target.value })}
                className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none "
            />
            <input
                type="date"
                placeholder="Date of Birth"
                value={formData.dob}
                onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none "
            />
            <input
                type="tel"
                placeholder="Mobile No"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none "
            />
        </div>
    );
}
export default HeaderSection