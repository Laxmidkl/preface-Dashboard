import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { TbSmartHome } from 'react-icons/tb';

const Sidebar = () => {

  const [open, setOpen] = useState(false);


  return (
    <div className=' text-white mt-24 lg:mt-5 '>
      <div className=' flex gap-3  ml-9'>

        <div className=''>
          logo
        </div>
        <div className=' font-bold text-2xl '>
          Dusty
        </div>
      </div>

      <div>
        <div className=' uppercase text-gray-400 text-[12px] mt-8 font-semibold  ml-9'> menu</div>
        <ul
        onClick={() => setOpen(!open)}
        className=' flex gap-3 mt-4 hover:bg-[#1E2145] w-full h-12 items-center mx-3 rounded-xl border-none cursor-pointer'>
          <li><TbSmartHome className=' text-gray-500 ml-6' size={23} /></li>
          <li className=' font-semibold'>Dashboard</li>
          <li
          > {open ? <IoIosArrowDown size={14} className=' ml-14 mt-1.5' />: <IoIosArrowForward size={14} className=' ml-14 mt-1.5' /> }   </li>

        </ul>
        <div
          className={`overflow-hidden transition-all duration-800 ease-in-out ${open
              ? "max-h-40 opacity-100"
              : "max-h-0 opacity-0"
            }`}
        >
          <div className="">
            <ul>
              <li className="p-3 hover:bg-gray-200 cursor-pointer">
                Home
              </li>

              <li className="p-3 hover:bg-gray-200 cursor-pointer">
                About
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar