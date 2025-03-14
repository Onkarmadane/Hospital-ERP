import React from 'react';
import { TbTrashXFilled } from "react-icons/tb";

function TestReportSection({ formData, setFormData }) {
  // Function to add a new file input
  const handleAddFileInput = () => {
    const updatedFiles = [...(formData.testReports || []), null]; // Add a new null entry to represent a new file input
    setFormData({ ...formData, testReports: updatedFiles });
  };

  // Function to remove a file input
  const handleRemoveFileInput = (index) => {
    const updatedFiles = formData.testReports.filter((_, i) => i !== index);
    setFormData({ ...formData, testReports: updatedFiles });
  };

  // Function to handle file change for a specific input
  const handleFileChange = (index, event) => {
    const file = event.target.files[0];
    const updatedFiles = [...(formData.testReports || [])];
    updatedFiles[index] = file; // Store the file in the array
    setFormData({ ...formData, testReports: updatedFiles });
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">Test Report</h3>
      <div className="grid grid-cols-1 gap-4">
        {/* Map over the testReports array to render file inputs */}
        {(formData.testReports || [null]).map((file, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="flex-1">
              <label
                htmlFor={`testReport-${index}`}
                className="block text-sm font-medium text-gray-700"
              >
                Upload Report {index + 1}
              </label>
              <input
                type="file"
                id={`testReport-${index}`}
                name={`testReport-${index}`}
                className="mt-1 block w-full"
                onChange={(e) => handleFileChange(index, e)}
              />
            </div>
            {/* Show remove button if there is more than one file input */}
            {(formData.testReports || []).length > 1 && (
              <button
                type="button"
                onClick={() => handleRemoveFileInput(index)}
                className="mt-1 text-red-500 hover:text-red-700"
              >
                <TbTrashXFilled size={24}/>
              </button>
            )}
          </div>
        ))}
        {/* Add More Files button */}
        <div className="mt-2">
          <button
            type="button"
            onClick={handleAddFileInput}
            className="text-blue-500 hover:text-blue-700 text-sm font-medium"
          >
            + Add More Files
          </button>
        </div>
      </div>
    </div>
  );
}

export default TestReportSection;