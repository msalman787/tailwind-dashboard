import React from 'react'

function TopCards() {
  return (
    <div className='grid lg:grid-cols-5 gap-4 p-4'>
      <div className='lg:col-span-2 col-span-1 bg-white border rounded-lg flex justify-between p-4 w-full'>
        <div className='flex flex-col w-full pb-4'>
          <p className='text-2xl font-bold'>$50,000</p>
          <p>Daily Revenue</p>
        </div>
        <p className='flex bg-green-200 justify-center items-center p-2 rounded-lg'>
          <span className='text-green-700 text-lg'>
            18%
          </span>
        </p>
      </div>
      <div className='lg:col-span-2 col-span-1 bg-white border rounded-lg flex justify-between p-4 w-full'>
        <div className='flex flex-col w-full pb-4'>
          <p className='text-2xl font-bold'>$150,000</p>
          <p>Year Revenue</p>
        </div>
        <p className='flex bg-green-200 justify-center items-center p-2 rounded-lg'>
          <span className='text-green-700 text-lg'>
            16%
          </span>
        </p>
      </div>
      <div className='bg-white border rounded-lg flex justify-between p-4 w-full'>
        <div className='flex flex-col w-full pb-4'>
          <p className='text-2xl font-bold'>11,000</p>
          <p>Customers</p>
        </div>
        <p className='flex bg-green-200 justify-center items-center p-2 rounded-lg'>
          <span className='text-green-700 text-lg'>
            11%
          </span>
        </p>
      </div>
    </div>
  )
}

export default TopCards
