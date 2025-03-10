// UnifiedPatientForm.js
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';
import { FaCheck } from 'react-icons/fa';
import Button from '../Button';

// // Import Ayurvedic sections
import HeaderSection from './HeaderSection';
import ChiefComplaintsSection from './ChiefComplaintSection';
import MedicalHistorySection from './MedicalHistorySection';
import NadiParikshanSection from './NadiParikshanSection';
import MenstrualHistorySection from './MenstrualHistorySection';

// Import Allopathic sections
import PatientDetailsSection from './PresentComplaintSection';
import PresentComplaintSection from './PresentComplaintSection';
import AdditionalDetailsSection from './AdditionalDetailsSection';
import FamilyHistorySection from './FamilyHistorySection';
import PastHistorySection from './PastHistorySection';
import PhysicalGeneralSection from './PhysicalGeneralSection';
import FamilyHistoryMarriedSection from './FamilyHistoryMarriedSection';
import TestReportSection from './TestReportSection';
// Import other Allopathic sections...

function UnifiedPatientForm() {
  const doctorType = localStorage.getItem('doctorType') || 'Ayurvedic'; // Default for testing
  const [step, setStep] = useState(1);
  const totalSteps = doctorType === 'Ayurvedic' ? 5 : 9;
  const [formData, setFormData] = useState({
    // Ayurvedic fields
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
    // Allopathic fields
    name: '',
    dob: '',
    mobile: '',
    complaint: '',
    ailmentsFrom: '',
    additionalComplaints: '',
    appetite: '',
    desire: '',
    aversion: '',
    sleep: '',
    noOfBrothers: 0,
    illnessBrothers: '',
    noOfSisters: 0,
    illnessSisters: '',
    noOfSons: 0,
    illnessSons: '',
    noOfDaughters: 0,
    illnessDaughters: '',
    thermalLike: '',
    thermalDislike: '',
    nature: '',
    cycleDuration: '',
    bleeding: '',
    pms: '',
    menarche: '',
    testReport: '',
  });

  // const nextStep = () => {
  //   if (doctorType === 'Allopathic' && step === 7 && formData.gender === 'men') {
  //     setStep(9);
  //   } else if (step < totalSteps) {
  //     setStep(step + 1);
  //   }
  // };

  // const prevStep = () => {
  //   if (doctorType === 'Allopathic' && step === 9 && formData.gender === 'men') {
  //     setStep(7);
  //   } else if (step > 1) {
  //     setStep(step - 1);
  //   }
  // };
  const nextStep = () => {
    if (doctorType === 'Allopathic' && step === 7 && formData.gender === 'men') {
      setStep(9); // Skip step 8 (menstrual cycle) for men
    } else if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (doctorType === 'Allopathic' && step === 9 && formData.gender === 'men') {
      setStep(7); // Go back to step 7, skipping step 8
    } else if (step > 1) {
      setStep(step - 1);
    }
  };
  const handleSubmit = async () => {
    if (doctorType === 'Ayurvedic') {
      const result = await Swal.fire({
        title: 'Confirm Submission',
        text: 'Do you want to submit and print this form?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes, Print!',
        cancelButtonText: 'Cancel',
      });
      if (result.isConfirmed) {
        console.log('Ayurvedic Form Data:', formData);
        // Implement print logic as in PatientForm
      }
    } else {
      console.log('Allopathic Form Data:', formData);
      // Add API submission logic here
    }
  };

  const getCurrentSection = () => {
    if (doctorType === 'Ayurvedic') {
      switch (step) {
        case 1:
          return <HeaderSection formData={formData} setFormData={setFormData} />;
        case 2:
          return <ChiefComplaintsSection formData={formData} setFormData={setFormData} />;
        case 3:
          return <MedicalHistorySection formData={formData} setFormData={setFormData} />;
        case 4:
          return <NadiParikshanSection formData={formData} setFormData={setFormData} />;
        case 5:
          return <MenstrualHistorySection formData={formData} setFormData={setFormData} />;
        default:
          return null;
      }
    } else if (doctorType === 'Allopathic') {
      switch (step) {
        case 1:
          return <HeaderSection formData={formData} setFormData={setFormData} />;
        case 2:
          return <PresentComplaintSection formData={formData} setFormData={setFormData} />;
        case 3:
          return <PastHistorySection formData={formData} setFormData={setFormData} />;
        case 4:
          return <PhysicalGeneralSection formData={formData} setFormData={setFormData} />;
        case 5:
          return <FamilyHistorySection formData={formData} setFormData={setFormData} />;
        case 6:
          return <FamilyHistoryMarriedSection formData={formData} setFormData={setFormData} />;
        case 7:
          return <AdditionalDetailsSection formData={formData} setFormData={setFormData} />;
        case 8:
          if (formData.gender === 'women') {
            return <MenstrualHistorySection formData={formData} setFormData={setFormData} />;
          }
        case 9:
          return <TestReportSection formData={formData} setFormData={setFormData} />;
        default:
          return null;
      }
    }
  };

  return (
    <div className="w-[95%] lg:ms-[70px] bg-white mx-auto p-4 pb-20">
      <h2 className="text-2xl font-bold mb-4">
        Patient Form
        {/* {doctorType === 'Ayurvedic' ? 'Patient Form' : ' Patient Form'} */}
      </h2>
      <div className="mb-4">
        <div className="text-lg font-semibold">Step {step} of {totalSteps}</div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-primary h-2.5 rounded-full"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>
      {getCurrentSection()}
      <div className="flex justify-between mt-4">
        {step > 1 && (
          <Button
            onClick={prevStep}

          >
            <GrFormPreviousLink />
            <span>Previous</span>
          </Button>
        )}
        {step < totalSteps && (
          <Button
            onClick={nextStep}
          >
            <GrFormNextLink />
            <span>Next</span>
          </Button>
        )}
        {step === totalSteps && (
          <Button
            onClick={handleSubmit}
            className=""
          >
            <FaCheck />
            <span>Submit</span>
          </Button>
        )}
      </div>
    </div>
  );
}

export default UnifiedPatientForm;