import React from 'react'
import {BsPersonFill,BsThreeDotsVertical} from "react-icons/bs"
import {data} from "../data/data"

const customers = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='flex justify-between p-4'>
        <h2>Customers</h2>
        <h2>Welcome Back, Salman</h2>
      </div>
      <div className='p-4'>
        <div className='bg-white w-full border rounded-lg p-4 m-auto overflow-y-auto'>
          <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
            <span>Name</span>
            <span className='sm:text-left text-right'>Email</span>
            <span className='hidden md:grid'>Last Order</span>
            <span className='hidden sm:grid'>Mehthod</span>
          </div>
          <ul>
            {data.map((item:any,index:number) =>{
              return (
                <li key={index} className='bg-gray-50 hover:bg-gray-100 cursor-pointer border rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between'>
                  <div className=' flex items-center'>
                    <div className='bg-purple-200 p-3 rounded-lg'>
                      <BsPersonFill className='text-purple-800'/>
                    </div>
                  <p className='pl-4'>{`${item.name.first} ${item.name.last}`}</p>
                  </div>
                  <p className='text-gray-600 sm:text-left text-right'>{item.name.first}@gmail.com</p>
                  <p className='hidden md:flex'>{item.date}</p>
                  <div className='hidden sm:flex  justify-between items-center'>
                    <p>{item.method}</p>
                    <BsThreeDotsVertical/>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default customers
