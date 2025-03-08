import React from 'react'

function TestReportSection({ formData, setFormData }) {
    return (
      <div>
        <h3 className="text-xl font-semibold mb-2">Test Report</h3>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="testReport" className="block text-sm font-medium text-gray-700">Upload Report</label>
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
  }

export default TestReportSection