import React, { useState } from 'react';
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";
import { FaCheck } from 'react-icons/fa'; // Import checkmark icon for Submit button
import Button from './Button';
import Swal from 'sweetalert2'; // Import SweetAlert2 for confirmation
import { LuFilePlus2 } from "react-icons/lu";

// HeaderSection Component (unchanged)
function HeaderSection({ formData, setFormData }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
                type="text"
                placeholder="Patient Name"
                value={formData.patientName}
                onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                className="p-2 border rounded bg-background"
            />
            <input
                type="text"
                placeholder="UHID No."
                value={formData.uhidNo}
                onChange={(e) => setFormData({ ...formData, uhidNo: e.target.value })}
                className="p-2 border rounded bg-background"
            />
            <input
                type="datetime-local"
                value={formData.dateTime}
                onChange={(e) => setFormData({ ...formData, dateTime: e.target.value })}
                className="p-2 border rounded bg-background"
            />
            <input
                type="text"
                placeholder="Place"
                value={formData.place}
                onChange={(e) => setFormData({ ...formData, place: e.target.value })}
                className="p-2 border rounded bg-background"
            />
            <div className="flex space-x-2">
                <input
                    type="number"
                    placeholder="Age"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="p-2 border rounded bg-background w-1/2"
                />
                <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="p-2 border rounded bg-background w-1/2"
                >
                    <option value="">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <input
                type="text"
                placeholder="Occupation"
                value={formData.occupation}
                onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                className="p-2 border rounded bg-background"
            />
            <select
                value={formData.maritalStatus}
                onChange={(e) => setFormData({ ...formData, maritalStatus: e.target.value })}
                className="p-2 border rounded bg-background"
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
                className="p-2 border rounded bg-background"
            />
            <input
                type="text"
                placeholder="Reference"
                value={formData.reference}
                onChange={(e) => setFormData({ ...formData, reference: e.target.value })}
                className="p-2 border rounded bg-background"
            />
        </div>
    );
}

// ChiefComplaintsSection Component (unchanged)
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
            <h3 className="text-lg font-semibold mb-2 ">Chief Complaints</h3>
            {formData.chiefComplaints.map((complaint, index) => (
                <div key={index} className="flex space-x-2 mb-2">
                    <input
                        type="text"
                        placeholder="Complaint"
                        value={complaint.complaint}
                        onChange={(e) => updateComplaint(index, 'complaint', e.target.value)}
                        className="p-2 border rounded bg-background flex-1"
                    />
                    <select
                        value={complaint.severity}
                        onChange={(e) => updateComplaint(index, 'severity', e.target.value)}
                        className="p-2 border rounded bg-background"
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
                        className="p-2 border rounded bg-background w-1/4"
                    />
                </div>
            ))}
            <Button onClick={addComplaint} className="mb-4" variant='primary'>
                <LuFilePlus2 /> Add Complaint
            </Button>
            <textarea
                placeholder="Associated Complaints"
                value={formData.associatedComplaints}
                onChange={(e) => setFormData({ ...formData, associatedComplaints: e.target.value })}
                className="p-2 border rounded bg-background w-full mb-4"
            />
            <textarea
                placeholder="Aggravating Factors"
                value={formData.aggravatingFactors}
                onChange={(e) => setFormData({ ...formData, aggravatingFactors: e.target.value })}
                className="p-2 border rounded bg-background w-full"
            />
        </div>
    );
}

// MedicalHistorySection Component (unchanged)
function MedicalHistorySection({ formData, setFormData }) {
    const conditions = ['HTN', 'DM', 'IHD', 'Cholesterol', 'Thyroid', 'Others'];

    return (
        <div>
            <h3 className="text-lg font-semibold mb-2">Medical History</h3>
            <div className='flex bg-background'>
                {conditions.map((condition) => (
                    <div key={condition} className="flex items-center bg-background mb-2">
                        <input
                            type="checkbox"
                            className='bg-background text-white'
                            checked={formData.medicalHistory[condition.toLowerCase()].hasCondition}
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
                            type="text"
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
                            className="p-2 border rounded bg-background w-1/2"
                        />
                    </div>
                ))}
            </div>
            <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Family History</h3>
                <div className="flex space-x-4">
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
                        className="p-2 border rounded bg-background flex-1"
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
                        className="p-2 border rounded bg-background flex-1"
                    />
                </div>
            </div>
            <textarea
                placeholder="Current Medication"
                value={formData.currentMedication}
                onChange={(e) => setFormData({ ...formData, currentMedication: e.target.value })}
                className="p-2 border rounded bg-background w-full mt-4"
            />
            <textarea
                placeholder="History of Allergy"
                value={formData.allergyHistory}
                onChange={(e) => setFormData({ ...formData, allergyHistory: e.target.value })}
                className="p-2 border rounded bg-background w-full mt-4"
            />
            <textarea
                placeholder="Past History"
                value={formData.pastHistory}
                onChange={(e) => setFormData({ ...formData, pastHistory: e.target.value })}
                className="p-2 border rounded bg-background w-full mt-4"
            />
            <textarea
                placeholder="Surgical History"
                value={formData.surgicalHistory}
                onChange={(e) => setFormData({ ...formData, surgicalHistory: e.target.value })}
                className="p-2 border rounded bg-background w-full mt-4"
            />
        </div>
    );
}

// NadiParikshanSection Component (unchanged, with corrected className typo)
function NadiParikshanSection({ formData, setFormData }) {
    return (
        <div className="">
            <h3 className="text-lg font-semibold mb-2">Nadi Parikshan</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <select
                    value={formData.nadiParikshan.vata}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            nadiParikshan: { ...formData.nadiParikshan, vata: e.target.value },
                        })
                    }
                    className="p-2 border rounded bg-background"
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
                    className="p-2 border rounded bg-background"
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
                    className="p-2 border rounded bg-background"
                >
                    <option value="">Kapha</option>
                    <option value="Normal">Normal</option>
                    <option value="Increased">Increased</option>
                    <option value="Decreased">Decreased</option>
                </select>
            </div>
            <h3 className="text-lg font-semibold mt-4 mb-2">Additional Observations</h3>
            <select
                value={formData.agni}
                onChange={(e) => setFormData({ ...formData, agni: e.target.value })}
                className="p-2 border rounded bg-background w-full mb-4"
            >
                <option value="">Agni</option>
                <option value="Good">Good</option>
                <option value="Average">Average</option>
                <option value="Poor">Poor</option>
            </select>
            <textarea
                placeholder="Mala Pravrutti (e.g., Irregular, Unsatisfied)"
                value={formData.malaPravrutti}
                onChange={(e) => setFormData({ ...formData, malaPravrutti: e.target.value })}
                className="p-2 border rounded bg-background w-full mb-4"
            />
            <textarea
                placeholder="Mutra (e.g., Itching present)"
                value={formData.mutra}
                onChange={(e) => setFormData({ ...formData, mutra: e.target.value })}
                className="p-2 border rounded bg-background w-full mb-4"
            />
            <textarea
                placeholder="Nindra (e.g., Early sleep 2-3 AM)"
                value={formData.nindra}
                onChange={(e) => setFormData({ ...formData, nindra: e.target.value })}
                className="p-2 border rounded bg-background w-full mb-4"
            />
            <input
                type="number"
                placeholder="Pain Assessment (0-10)"
                value={formData.painAssessment}
                onChange={(e) => setFormData({ ...formData, painAssessment: e.target.value })}
                min="0"
                max="10"
                className="p-2 border rounded bg-background w-full mb-4"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    className="p-2 border rounded bg-background"
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
                    className="p-2 border rounded bg-background"
                />
            </div>
        </div>
    );
}

// MenstrualHistorySection Component (unchanged)
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
                className="p-2 border rounded bg-background w-full mb-4"
            />
            <select
                value={formData.menstrualHistory.cycle}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        menstrualHistory: { ...formData.menstrualHistory, cycle: e.target.value },
                    })
                }
                className="p-2 border rounded bg-background w-full mb-4"
            >
                <option value="">Cycle</option>
                <option value="Regular">Regular</option>
                <option value="Irregular">Irregular</option>
            </select>
            <input
                type="number"
                placeholder="Menarche Age"
                value={formData.menstrualHistory.menarche}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        menstrualHistory: { ...formData.menstrualHistory, menarche: e.target.value },
                    })
                }
                className="p-2 border rounded bg-background w-full mb-4"
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
                className="p-2 border rounded bg-background w-full mb-4"
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
                    className="p-2 border rounded bg-background"
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
                    className="p-2 border rounded bg-background"
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
                    className="p-2 border rounded bg-background"
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
                    className="p-2 border rounded bg-background"
                />
            </div>
            <textarea
                placeholder="Local/Specific Examination"
                value={formData.localExamination}
                onChange={(e) => setFormData({ ...formData, localExamination: e.target.value })}
                className="p-2 border rounded bg-background w-full mt-4"
            />
            <textarea
                placeholder="General/Systemic Examination"
                value={formData.generalExamination}
                onChange={(e) => setFormData({ ...formData, generalExamination: e.target.value })}
                className="p-2 border rounded bg-background w-full mt-4"
            />
            <textarea
                placeholder="Advise"
                value={formData.advise}
                onChange={(e) => setFormData({ ...formData, advise: e.target.value })}
                className="p-2 border rounded bg-background w-full mt-4"
            />
        </div>
    );
}

// Updated PatientForm Component
function PatientForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        patientName: '',
        uhidNo: '',
        dateTime: '',
        place: '',
        age: '',
        gender: '',
        occupation: '',
        maritalStatus: '',
        diagnosis: '',
        reference: '',
        chiefComplaints: [{ complaint: '', severity: '', duration: '' }],
        associatedComplaints: '',
        aggravatingFactors: '',
        medicalHistory: {
            htn: { hasCondition: false, since: '' },
            dm: { hasCondition: false, since: '' },
            ihd: { hasCondition: false, since: '' },
            cholesterol: { hasCondition: false, since: '' },
            thyroid: { hasCondition: false, since: '' },
            others: { hasCondition: false, since: '' },
        },
        familyHistory: { mother: '', father: '' },
        currentMedication: '',
        allergyHistory: '',
        pastHistory: '',
        surgicalHistory: '',
        nadiParikshan: { vata: '', pitta: '', kapha: '' },
        agni: '',
        malaPravrutti: '',
        mutra: '',
        nindra: '',
        painAssessment: '',
        vitalSigns: { bp: '', pulse: '' },
        menstrualHistory: { lmp: '', cycle: '', menarche: '', menopause: '' },
        obstetricalHistory: { gravida: '', para: '', abortions: '', living: '' },
        localExamination: '',
        generalExamination: '',
        advise: '',
    });

    const totalSteps = 5; // Total number of steps in the form

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleSubmit = async () => {
        // Show SweetAlert confirmation before printing
        const result = await Swal.fire({
            title: 'Confirm Submission',
            text: 'Do you want to submit and print this form?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, Print!',
            cancelButtonText: 'Cancel',
        });

        if (result.isConfirmed) {
            console.log('Form Data:', formData);
            alert('Form submitted successfully!');

            // Prepare the form data for printing
            const printContent = `
        <html>
          <head>
            <title>Patient Prescription Form</title>
            <style>
              body { font-family: Arial, sans-serif; margin: 20px; }
              .section { margin-bottom: 20px; border: 1px solid #ccc; padding: 10px; }
              h1, h2 { color: #333; }
              p { margin: 5px 0; }
            </style>
          </head>
          <body>
            <h1>Patient Prescription Form</h1>
            <div className="header section">
              <h2>Patient Details</h2>
              <p><strong>Patient Name:</strong> ${formData.patientName}</p>
              <p><strong>UHID No.:</strong> ${formData.uhidNo}</p>
              <p><strong>Date/Time:</strong> ${formData.dateTime}</p>
              <p><strong>Place:</strong> ${formData.place}</p>
              <p><strong>Age/Gender:</strong> ${formData.age}/${formData.gender}</p>
              <p><strong>Occupation:</strong> ${formData.occupation}</p>
              <p><strong>Marital Status:</strong> ${formData.maritalStatus}</p>
              <p><strong>Diagnosis:</strong> ${formData.diagnosis}</p>
              <p><strong>Reference:</strong> ${formData.reference}</p>
            </div>
            <div className="complaint section">
              <h2>Chief Complaints</h2>
              ${formData.chiefComplaints.map(c => `<p>${c.complaint} - Severity: ${c.severity}, Duration: ${c.duration}</p>`).join('')}
              <p><strong>Associated Complaints:</strong> ${formData.associatedComplaints}</p>
              <p><strong>Aggravating Factors:</strong> ${formData.aggravatingFactors}</p>
            </div>
            <div className="history section">
              <h2>Medical History</h2>
              ${conditions.map(condition =>
                formData.medicalHistory[condition.toLowerCase()].hasCondition
                    ? `<p>${condition}: Since ${formData.medicalHistory[condition.toLowerCase()].since}</p>`
                    : ''
            ).join('')}
              <p><strong>Family History (Mother):</strong> ${formData.familyHistory.mother}</p>
              <p><strong>Family History (Father):</strong> ${formData.familyHistory.father}</p>
              <p><strong>Current Medication:</strong> ${formData.currentMedication}</p>
              <p><strong>History of Allergy:</strong> ${formData.allergyHistory}</p>
              <p><strong>Past History:</strong> ${formData.pastHistory}</p>
              <p><strong>Surgical History:</strong> ${formData.surgicalHistory}</p>
            </div>
            <div className="nadi section">
              <h2>Nadi Parikshan</h2>
              <p><strong>Vata:</strong> ${formData.nadiParikshan.vata}</p>
              <p><strong>Pitta:</strong> ${formData.nadiParikshan.pitta}</p>
              <p><strong>Kapha:</strong> ${formData.nadiParikshan.kapha}</p>
              <p><strong>Agni:</strong> ${formData.agni}</p>
              <p><strong>Mala Pravrutti:</strong> ${formData.malaPravrutti}</p>
              <p><strong>Mutra:</strong> ${formData.mutra}</p>
              <p><strong>Nindra:</strong> ${formData.nindra}</p>
              <p><strong>Pain Assessment:</strong> ${formData.painAssessment}</p>
              <p><strong>BP:</strong> ${formData.vitalSigns.bp}</p>
              <p><strong>Pulse:</strong> ${formData.vitalSigns.pulse}</p>
            </div>
            <div className="menstrual section">
              <h2>Menstrual/Obstetrical History</h2>
              <p><strong>LMP:</strong> ${formData.menstrualHistory.lmp}</p>
              <p><strong>Cycle:</strong> ${formData.menstrualHistory.cycle}</p>
              <p><strong>Menarche:</strong> ${formData.menstrualHistory.menarche}</p>
              <p><strong>Menopause:</strong> ${formData.menstrualHistory.menopause}</p>
              <p><strong>Gravida:</strong> ${formData.obstetricalHistory.gravida}</p>
              <p><strong>Para:</strong> ${formData.obstetricalHistory.para}</p>
              <p><strong>Abortions:</strong> ${formData.obstetricalHistory.abortions}</p>
              <p><strong>Living Children:</strong> ${formData.obstetricalHistory.living}</p>
              <p><strong>Local Examination:</strong> ${formData.localExamination}</p>
              <p><strong>General/Systemic Examination:</strong> ${formData.generalExamination}</p>
              <p><strong>Advise:</strong> ${formData.advise}</p>
            </div>
          </body>
        </html>
      `;

            // Create a temporary window for printing
            const printWindow = window.open('', '_blank');
            printWindow.document.write(printContent);
            printWindow.document.close();
            printWindow.print();
            printWindow.close();
        }
    };

    const conditions = ['HTN', 'DM', 'IHD', 'Cholesterol', 'Thyroid', 'Others'];

    return (
        <div className="w-[95%] lg:ms-[70px] bg-background mx-auto p-4">
            {/* Form Progress Indicator */}
            <div className="mb-4">
                <div className="text-lg font-semibold">Step {step} of {totalSteps}</div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                        className="bg-primary h-2.5 rounded-full"
                        style={{ width: `${(step / totalSteps) * 100}%` }}
                    ></div>
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Patient Prescription Form</h2>
            {step === 1 && <HeaderSection formData={formData} setFormData={setFormData} />}
            {step === 2 && <ChiefComplaintsSection formData={formData} setFormData={setFormData} />}
            {step === 3 && <MedicalHistorySection formData={formData} setFormData={setFormData} />}
            {step === 4 && <NadiParikshanSection formData={formData} setFormData={setFormData} />}
            {step === 5 && <MenstrualHistorySection formData={formData} setFormData={setFormData} />}
            <div className="flex justify-between mt-4">
                {step > 1 && (
                    <Button onClick={prevStep} className="bg-gray-500 text-white p-2 rounded flex items-center space-x-2">
                        <GrFormPreviousLink />
                    </Button>
                )}
                {step < 5 && (
                    <Button onClick={nextStep} className="bg-blue-500 text-white p-2 rounded flex items-center space-x-2">
                        <GrFormNextLink />
                    </Button>
                )}
                {step === 5 && (
                    <Button onClick={handleSubmit} className="bg-green-500 text-white p-2 rounded flex items-center space-x-2">
                        <FaCheck className="w-5 h-5" />
                        <span>Submit</span>
                    </Button>
                )}
            </div>
        </div>
    );
}

export default PatientForm;