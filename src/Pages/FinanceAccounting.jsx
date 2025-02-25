import React from 'react'
import Table from '../Components/Table'
import PrimaryButton from '../Components/PrimaryButton'
import { IoCreateOutline } from "react-icons/io5";
import { TbInvoice } from "react-icons/tb";
import { FaMoneyCheck } from 'react-icons/fa';
function FinanceAccounting() {
  const columns = [
    { header: 'Patient Name', accessor: 'patientname' },
    { header: 'Age', accessor: 'age' },
    { header: 'Gender', accessor: 'gender' },
    { header: 'Phone Number', accessor: 'phone' },
    { header: 'Last Appointment', accessor: 'lastappointment' },

  ];
  const data = [
    { id: 1, patientname: 'Laptop', age: '$999', gender: 'male', phone: '123', lastappointment: '10-10-25' },
    { id: 1, patientname: 'Laptop', age: '$999', gender: 'male', phone: '123', lastappointment: '10-10-25' },
    { id: 1, patientname: 'Laptop', age: '$999', gender: 'male', phone: '123', lastappointment: '10-10-25' },
    { id: 1, patientname: 'Laptop', age: '$999', gender: 'male', phone: '123', lastappointment: '10-10-25' },
    { id: 1, patientname: 'Laptop', age: '$999', gender: 'male', phone: '123', lastappointment: '10-10-25' },

  ];
  return (
    <div className="w-[95%] lg:ms-[70px] min-h-screen bg-white flex flex-col ">
      <div className="flex flex-wrap justify-between items-center gap-5 font-medium mb-5 border-b pb-2">
        {/* Left Side */}
        <div className="flex-shrink-0">
          <PrimaryButton className="flex items-center gap-3">
            <IoCreateOutline /> Create Bill
          </PrimaryButton>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5 flex-wrap">
          <PrimaryButton className="flex items-center gap-3">
            <TbInvoice /> Invoice
          </PrimaryButton>
          <PrimaryButton className="flex items-center gap-3">
            <FaMoneyCheck /> Payment Voucher
          </PrimaryButton>
        </div>
      </div>
      <div className="overflow-x-auto px-2 flex-grow">
        <Table columns={columns} data={data} />
      </div>
    </div>
  )
}

export default FinanceAccounting