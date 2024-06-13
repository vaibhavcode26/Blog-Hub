import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div className='flex space-x-1'>
      <h1 className="text-orange-600 text-3xl drop-shadow-lg font-bold">Blog</h1>
      <h1 className=" text-white  text-3xl drop-shadow-lg font-bold">-</h1>
      <h1 className=" text-green-800  text-3xl drop-shadow-lg font-bold">Hub</h1>
    </div>
  )
}

export default Logo