import React, { useState } from 'react';
import Button from './Button';
import { GrFormPreviousLink } from "react-icons/gr"; 
import { IoArrowForward } from "react-icons/io5";
import { LuSave } from "react-icons/lu";
const PatientFormAleoPathy = () => {
  // State to manage the current step and form data
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    dob: '',
    mobile: '',
    complaint: '',
    ailmentsFrom: '',
    additionalComplaints: '',
    pastHistory: '',
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

  // Calculate total steps based on gender (8 for men, 9 for women)
  const totalSteps = formData.gender === 'men' ? 8 : 9;

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Navigate to the next step with conditional logic
  const nextStep = () => {
    if (currentStep === 1 && !formData.gender) {
      alert('Please select gender');
      return;
    }
    if (currentStep === 7 && formData.gender === 'men') {
      setCurrentStep(9);
    } else if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Navigate to the previous step with conditional logic
  const prevStep = () => {
    if (currentStep === 9 && formData.gender === 'men') {
      setCurrentStep(7);
    } else if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // In a real application, you would send this data to an API
  };

  // Render the current step
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <h3 className="text-xl font-semibold mb-2">Patient Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="men">Men</option>
                  <option value="women">Women</option>
                </select>
              </div>
              <div>
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
                />
              </div>
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                  Mobile No
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
                />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h3 className="text-xl font-semibold mb-2">Present Complaint</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="complaint" className="block text-sm font-medium text-gray-700">
                  Complaint
                </label>
                <input
                  type="text"
                  id="complaint"
                  name="complaint"
                  value={formData.complaint}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
                />
              </div>
              <div>
                <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
                  Photo
                </label>
                <input type="file" id="photo" name="photo" className="mt-1 block w-full" />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="ailmentsFrom" className="block text-sm font-medium text-gray-700">
                  Ailments From
                </label>
                <input
                  type="text"
                  id="ailmentsFrom"
                  name="ailmentsFrom"
                  value={formData.ailmentsFrom}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
                />
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="additionalComplaints"
                  className="block text-sm font-medium text-gray-700"
                >
                  Additional Complaints
                </label>
                <textarea
                  id="additionalComplaints"
                  name="additionalComplaints"
                  value={formData.additionalComplaints}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
                />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h3 className="text-xl font-semibold mb-2">Past History</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="pastHistory" className="block text-sm font-medium text-gray-700">
                  Past History
                </label>
                <textarea
                  id="pastHistory"
                  name="pastHistory"
                  value={formData.pastHistory}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
                />
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <h3 className="text-xl font-semibold mb-2">Physical Generals</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="appetite" className="block text-sm font-medium text-gray-700">
                  Appetite
                </label>
                <input
                  type="text"
                  id="appetite"
                  name="appetite"
                  value={formData.appetite}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
                />
              </div>
              <div>
                <label htmlFor="desire" className="block text-sm font-medium text-gray-700">
                  Desire
                </label>
                <input
                  type="text"
                  id="desire"
                  name="desire"
                  value={formData.desire}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
                />
              </div>
              <div>
                <label htmlFor="aversion" className="block text-sm font-medium text-gray-700">
                  Aversion
                </label>
                <input
                  type="text"
                  id="aversion"
                  name="aversion"
                  value={formData.aversion}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
                />
              </div>
              <div>
                <label htmlFor="sleep" className="block text-sm font-medium text-gray-700">
                  Sleep
                </label>
                <input
                  type="text"
                  id="sleep"
                  name="sleep"
                  value={formData.sleep}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
                />
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div>
            <h3 className="text-xl font-semibold mb-2">Family History</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="noOfBrothers" className="block text-sm font-medium text-gray-700">
                  No of Brothers
                </label>
                <input
                  type="number"
                  id="noOfBrothers"
                  name="noOfBrothers"
                  value={formData.noOfBrothers}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
                />
              </div>
              <div>
                <label htmlFor="illnessBrothers" className="block text-sm font-medium text-gray-700">
                  Illness in Brothers
                </label>
                <input
                  type="text"
                  id="illnessBrothers"
                  name="illnessBrothers"
                  value={formData.illnessBrothers}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
                />
              </div>
              <div>
                <label htmlFor="noOfSisters" className="block text-sm font-medium text-gray-700">
                  No of Sisters
                </label>
                <input
                  type="number"
                  id="noOfSisters"
                  name="noOfSisters"
                  value={formData.noOfSisters}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
                />
              </div>
              <div>
                <label htmlFor="illnessSisters" className="block text-sm font-medium text-gray-700">
                  Illness in Sisters
                </label>
                <input
                  type="text"
                  id="illnessSisters"
                  name="illnessSisters"
                  value={formData.illnessSisters}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
                />
              </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div>
            <h3 className="text-xl font-semibold mb-2">Family History - For Married</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="noOfSons" className="block text-sm font-medium text-gray-700">
                  No of Sons
                </label>
                <input
                  type="number"
                  id="noOfSons"
                  name="noOfSons"
                  value={formData.noOfSons}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
                />
              </div>
              <div>
                <label htmlFor="illnessSons" className="block text-sm font-medium text-gray-700">
                  Illness in Sons
                </label>
                <input
                  type="text"
                  id="illnessSons"
                  name="illnessSons"
                  value={formData.illnessSons}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
                />
              </div>
              <div>
                <label htmlFor="noOfDaughters" className="block text-sm font-medium text-gray-700">
                  No of Daughters
                </label>
                <input
                  type="number"
                  id="noOfDaughters"
                  name="noOfDaughters"
                  value={formData.noOfDaughters}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
                />
              </div>
              <div>
                <label
                  htmlFor="illnessDaughters"
                  className="block text-sm font-medium text-gray-700"
                >
                  Illness in Daughters
                </label>
                <input
                  type="text"
                  id="illnessDaughters"
                  name="illnessDaughters"
                  value={formData.illnessDaughters}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
                />
              </div>
            </div>
          </div>
        );
      case 7:
        return (
          <div>
            <h3 className="text-xl font-semibold mb-2">Additional Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="thermalLike" className="block text-sm font-medium text-gray-700">
                  Thermal Like
                </label>
                <input
                  type="text"
                  id="thermalLike"
                  name="thermalLike"
                  value={formData.thermalLike}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
                />
              </div>
              <div>
                <label htmlFor="thermalDislike" className="block text-sm font-medium text-gray-700">
                  Thermal Dislike
                </label>
                <input
                  type="text"
                  id="thermalDislike"
                  name="thermalDislike"
                  value={formData.thermalDislike}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="nature" className="block text-sm font-medium text-gray-700">
                  Nature
                </label>
                <input
                  type="text"
                  id="nature"
                  name="nature"
                  value={formData.nature}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
                />
              </div>
            </div>
          </div>
        );
      case 8:
        if (formData.gender === 'women') {
          return (
            <div>
              <h3 className="text-xl font-semibold mb-2">Menstrual History</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="cycleDuration"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Cycle Duration
                  </label>
                  <input
                    type="text"
                    id="cycleDuration"
                    name="cycleDuration"
                    value={formData.cycleDuration}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="bleeding" className="block text-sm font-medium text-gray-700">
                    Bleeding
                  </label>
                  <input
                    type="text"
                    id="bleeding"
                    name="bleeding"
                    value={formData.bleeding}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="pms" className="block text-sm font-medium text-gray-700">
                    PMS
                  </label>
                  <input
                    type="text"
                    id="pms"
                    name="pms"
                    value={formData.pms}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="menarche" className="block text-sm font-medium text-gray-700">
                    Menarche
                  </label>
                  <input
                    type="text"
                    id="menarche"
                    name="menarche"
                    value={formData.menarche}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
                  />
                </div>
              </div>
            </div>
          );
        }
        return null;
      case 9:
        return (
          <div>
            <h3 className="text-xl font-semibold mb-2">Test Report</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="testReport" className="block text-sm font-medium text-gray-700">
                  Upload Report
                </label>
                <input
                  type="file"
                  id="testReport"
                  name="testReport"
                  className="mt-1 block w-full"
                />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-[95%] lg:ms-[70px] bg-white mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Patient Medical History Form</h2>
      <div className="mb-4">
        <p className="text-sm text-gray-600 text-center">
          Step {currentStep} of {totalSteps}
        </p>
      </div>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6">
        {renderStep()}
        <div className="mt-6 flex justify-between">
          <Button
          variant='secondary'
            type="button"
            onClick={prevStep}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md disabled:opacity-50 hover:bg-gray-400"
            disabled={currentStep === 1}
          >
            <GrFormPreviousLink />
          </Button>
          {currentStep < totalSteps ? (
            <Button
            variant='primary'
              type="button"
              onClick={nextStep}
              className="px-4 py-2 bg-blue-500 text-white rounded-md "
            >
             <IoArrowForward />
            </Button>
          ) : (
            <Button
            variant='primary'
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
             <LuSave /> Submit
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default PatientFormAleoPathy;

// import React, { useState } from 'react';
// import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
// import { FaCheck } from "react-icons/fa";
// import Button from './Button';

// const PatientFormAleoPathy = () => {
//     const [currentStep, setCurrentStep] = useState(1);
//     const [formData, setFormData] = useState({
//         name: '',
//         uhidNo: '', // Added from Ayurvedic
//         dateTime: '', // Added from Ayurvedic
//         gender: '',
//         dob: '',
//         mobile: '',
//         occupation: '', // Added from Ayurvedic
//         maritalStatus: '', // Added from Ayurvedic
//         complaint: '',
//         ailmentsFrom: '',
//         additionalComplaints: '',
//         pastHistory: '',
//         appetite: '',
//         desire: '',
//         aversion: '',
//         sleep: '',
//         noOfBrothers: 0,
//         illnessBrothers: '',
//         noOfSisters: 0,
//         illnessSisters: '',
//         noOfSons: 0,
//         illnessSons: '',
//         noOfDaughters: 0,
//         illnessDaughters: '',
//         thermalLike: '',
//         thermalDislike: '',
//         nature: '',
//         cycleDuration: '',
//         bleeding: '',
//         pms: '',
//         menarche: '',
//         testReport: '',
//     });

//     const totalSteps = formData.gender === 'men' ? 8 : 9;

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const nextStep = () => {
//         if (currentStep === 1 && !formData.gender) {
//             alert('Please select gender');
//             return;
//         }
//         if (currentStep === 7 && formData.gender === 'men') {
//             setCurrentStep(9);
//         } else if (currentStep < totalSteps) {
//             setCurrentStep(currentStep + 1);
//         }
//     };

//     const prevStep = () => {
//         if (currentStep === 9 && formData.gender === 'men') {
//             setCurrentStep(7);
//         } else if (currentStep > 1) {
//             setCurrentStep(currentStep - 1);
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Form Data Submitted:', formData);
//         alert('Form submitted successfully!');
//     };

//     const renderStep = () => {
//         switch (currentStep) {
//             case 1:
//                 return (
//                     <div>
//                         <h3 className="text-xl font-semibold mb-2">Patient Details</h3>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Patient Name" className="p-2 border rounded bg-white" />
//                             <input type="text" name="uhidNo" value={formData.uhidNo} onChange={handleChange} placeholder="UHID No." className="p-2 border rounded bg-white" />
//                             <input type="datetime-local" name="dateTime" value={formData.dateTime} onChange={handleChange} className="p-2 border rounded bg-white" />
//                             <select name="gender" value={formData.gender} onChange={handleChange} className="p-2 border rounded bg-white" required>
//                                 <option value="">Select Gender</option>
//                                 <option value="men">Men</option>
//                                 <option value="women">Women</option>
//                             </select>
//                             <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="p-2 border rounded bg-white" />
//                             <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile No" className="p-2 border rounded bg-white" />
//                             <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} placeholder="Occupation" className="p-2 border rounded bg-white" />
//                             <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} className="p-2 border rounded bg-white">
//                                 <option value="">Marital Status</option>
//                                 <option value="Single">Single</option>
//                                 <option value="Married">Married</option>
//                                 <option value="Divorced">Divorced</option>
//                                 <option value="Widowed">Widowed</option>
//                             </select>
//                         </div>
//                     </div>
//                 );
//             case 2:
//                 return (
//                     <div>
//                         <h3 className="text-xl font-semibold mb-2">Present Complaint</h3>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <input type="text" name="complaint" value={formData.complaint} onChange={handleChange} placeholder="Complaint" className="p-2 border rounded bg-white" />
//                             <input type="file" name="photo" className="p-2 border rounded bg-white" />
//                             <input type="text" name="ailmentsFrom" value={formData.ailmentsFrom} onChange={handleChange} placeholder="Ailments From" className="p-2 border rounded bg-white md:col-span-2" />
//                             <textarea name="additionalComplaints" value={formData.additionalComplaints} onChange={handleChange} placeholder="Additional Complaints" className="p-2 border rounded bg-white md:col-span-2" />
//                         </div>
//                     </div>
//                 );
//             case 3:
//                 return (
//                     <div>
//                         <h3 className="text-xl font-semibold mb-2">Past History</h3>
//                         <textarea name="pastHistory" value={formData.pastHistory} onChange={handleChange} placeholder="Past History" className="p-2 border rounded bg-white w-full" />
//                     </div>
//                 );
//             case 4:
//                 return (
//                     <div>
//                         <h3 className="text-xl font-semibold mb-2">Physical Generals</h3>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <input type="text" name="appetite" value={formData.appetite} onChange={handleChange} placeholder="Appetite" className="p-2 border rounded bg-white" />
//                             <input type="text" name="desire" value={formData.desire} onChange={handleChange} placeholder="Desire" className="p-2 border rounded bg-white" />
//                             <input type="text" name="aversion" value={formData.aversion} onChange={handleChange} placeholder="Aversion" className="p-2 border rounded bg-white" />
//                             <input type="text" name="sleep" value={formData.sleep} onChange={handleChange} placeholder="Sleep" className="p-2 border rounded bg-white" />
//                         </div>
//                     </div>
//                 );
//             case 5:
//                 return (
//                     <div>
//                         <h3 className="text-xl font-semibold mb-2">Family History</h3>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <input type="number" name="noOfBrothers" value={formData.noOfBrothers} onChange={handleChange} placeholder="No of Brothers" className="p-2 border rounded bg-white" />
//                             <input type="text" name="illnessBrothers" value={formData.illnessBrothers} onChange={handleChange} placeholder="Illness in Brothers" className="p-2 border rounded bg-white" />
//                             <input type="number" name="noOfSisters" value={formData.noOfSisters} onChange={handleChange} placeholder="No of Sisters" className="p-2 border rounded bg-white" />
//                             <input type="text" name="illnessSisters" value={formData.illnessSisters} onChange={handleChange} placeholder="Illness in Sisters" className="p-2 border rounded bg-white" />
//                         </div>
//                     </div>
//                 );
//             case 6:
//                 return (
//                     <div>
//                         <h3 className="text-xl font-semibold mb-2">Family History - For Married</h3>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <input type="number" name="noOfSons" value={formData.noOfSons} onChange={handleChange} placeholder="No of Sons" className="p-2 border rounded bg-white" />
//                             <input type="text" name="illnessSons" value={formData.illnessSons} onChange={handleChange} placeholder="Illness in Sons" className="p-2 border rounded bg-white" />
//                             <input type="number" name="noOfDaughters" value={formData.noOfDaughters} onChange={handleChange} placeholder="No of Daughters" className="p-2 border rounded bg-white" />
//                             <input type="text" name="illnessDaughters" value={formData.illnessDaughters} onChange={handleChange} placeholder="Illness in Daughters" className="p-2 border rounded bg-white" />
//                         </div>
//                     </div>
//                 );
//             case 7:
//                 return (
//                     <div>
//                         <h3 className="text-xl font-semibold mb-2">Additional Details</h3>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <input type="text" name="thermalLike" value={formData.thermalLike} onChange={handleChange} placeholder="Thermal Like" className="p-2 border rounded bg-white" />
//                             <input type="text" name="thermalDislike" value={formData.thermalDislike} onChange={handleChange} placeholder="Thermal Dislike" className="p-2 border rounded bg-white" />
//                             <input type="text" name="nature" value={formData.nature} onChange={handleChange} placeholder="Nature" className="p-2 border rounded bg-white md:col-span-2" />
//                         </div>
//                     </div>
//                 );
//             case 8:
//                 if (formData.gender === 'women') {
//                     return (
//                         <div>
//                             <h3 className="text-xl font-semibold mb-2">Menstrual History</h3>
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                 <input type="text" name="cycleDuration" value={formData.cycleDuration} onChange={handleChange} placeholder="Cycle Duration" className="p-2 border rounded bg-white" />
//                                 <input type="text" name="bleeding" value={formData.bleeding} onChange={handleChange} placeholder="Bleeding" className="p-2 border rounded bg-white" />
//                                 <input type="text" name="pms" value={formData.pms} onChange={handleChange} placeholder="PMS" className="p-2 border rounded bg-white" />
//                                 <input type="text" name="menarche" value={formData.menarche} onChange={handleChange} placeholder="Menarche" className="p-2 border rounded bg-white" />
//                             </div>
//                         </div>
//                     );
//                 }
//                 return null;
//             case 9:
//                 return (
//                     <div>
//                         <h3 className="text-xl font-semibold mb-2">Test Report</h3>
//                         <input type="file" name="testReport" className="p-2 border rounded bg-white" />
//                     </div>
//                 );
//             default:
//                 return null;
//         }
//     };

//     return (
//         <div className="w-[95%] lg:ms-[70px] bg-white mx-auto p-4">
//             <div className="mb-4">
//                 <div className="text-lg font-semibold">Step {currentStep} of {totalSteps}</div>
//                 <div className="w-full bg-gray-200 rounded-full h-2.5">
//                     <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${(currentStep / totalSteps) * 100}%` }}></div>
//                 </div>
//             </div>
//             <h2 className="text-2xl font-bold mb-4">Patient Medical History Form</h2>
//             <form onSubmit={handleSubmit}>
//                 {renderStep()}
//                 <div className="flex justify-between mt-4">
//                     {currentStep > 1 && (
//                         <Button onClick={prevStep} className="bg-gray-500 text-white p-2 rounded flex items-center space-x-2">
//                             <GrFormPreviousLink />
//                         </Button>
//                     )}
//                     {currentStep < totalSteps ? (
//                         <Button onClick={nextStep} className="bg-blue-500 text-white p-2 rounded flex items-center space-x-2">
//                             <GrFormNextLink />
//                         </Button>
//                     ) : (
//                         <Button type="submit" className="bg-green-500 text-white p-2 rounded flex items-center space-x-2">
//                             <FaCheck />
//                             <span>Submit</span>
//                         </Button>
//                     )}
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default PatientFormAleoPathy;