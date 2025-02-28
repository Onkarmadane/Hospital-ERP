import React from 'react'
import Table from '../Components/Table'
import Button from '../Components/Button'
import { IoCreateOutline } from "react-icons/io5";
import { TbInvoice } from "react-icons/tb";
import { FaMoneyCheck } from 'react-icons/fa';
import BackButton from '../Components/BackButton';
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
    <div className="grid grid-cols-1 gap-3 w-[95%] lg:ms-[70px] px-2">
      {/* Header with Buttons */}
      <div className="flex font-medium mb-5 border-b pb-2 flex-wrap items-center gap-5">
        {/* Left Side: BackButton */}
        <div className="flex items-center">
          <BackButton />
        </div>

        {/* Right Side: Three Buttons */}
        <div className="flex flex-wrap items-center gap-5 w-full lg:w-auto lg:flex-row lg:items-center ml-auto">
          <Button variant="primary" size="sm"><IoCreateOutline /> Create Bill</Button>
          <Button variant="primary" size="sm"><TbInvoice /> Invoice</Button>
          <Button variant="primary" size="sm"> <FaMoneyCheck /> Payment Voucher</Button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto px-2 flex-grow">
        <Table columns={columns} data={data} className="min-w-full" />
      </div>
    </div>
  )
}

export default FinanceAccounting