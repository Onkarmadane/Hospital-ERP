import React from 'react'

function Heading({title,className}) {
  return (
    <h1 className={`bg-gradient-to-r from-blue-800 to-[#77db8f] text-white p-4 rounded-t-lg ${className}`}>
        {title}
      </h1>
  )
}

export default Heading
