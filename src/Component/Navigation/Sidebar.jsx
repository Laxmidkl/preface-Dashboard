import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { MdOutlineContactPhone } from "react-icons/md";
import { RiTodoLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { TbSmartHome } from "react-icons/tb";
import { Link } from "react-router-dom";

function Sidebar() {
  const [openId, setOpenId] = useState(null);

  const sidebarData = [
    {
      section: "menu",
      id: "dashboard",
      title: "Dashboard",
      icon: <TbSmartHome size={20} />,
      children: [
        {
           title: "Sales" ,
            path: "/"
          }, 
        {
           title: "Analysis"
           }
      ],
    },

    {
      section: "apps",
      items: [
        {
          title: "Todo List",
          path:'app-todo',
          icon: <RiTodoLine size={20} />,
        },
        {
          title: "Contact",
          icon: <MdOutlineContactPhone size={20} />,
        },
        {
          title: "Calendar",
          icon: <SlCalender size={20} />,
        },
      ],
    },

    {
      section: "pages",
      id: "auth",
      title: "Authentication",
      icon: <TbSmartHome size={20} />,
      children: [
        { title: "Login" },
        { title: "Recover Password" },
        { title: "Register" },
        { title: "Lock screen" },
      ],
    },

      {
      id: "error",
      title: "Error Pages",
      icon: <TbSmartHome size={20} />,
      children: [
        { title: "Error 404" },
        { title: "Error 503" },
        { title: "Error 500" },
        { title: "Offline Page" },
      ],
    },
  ];

  return (
    <div className="text-white mt-24 lg:mt-5">
      {/* Logo */}
      <div className="hidden lg:flex gap-3 ml-9 ">
        <div>logo</div>
        <div className="font-bold text-2xl mb-2">Preface</div>
      </div>

      {/* Map all the section */}
      {sidebarData.map((block, index) => (
        <div 
        key={index}
        className="text-gray-500 font-semibold"
        >
        
          <div className="uppercase text-gray-400 text-[12px] mt-3 font-semibold ml-8">
            {block.section}
          </div>

          {/* dropdown  (menu + pages) */}
          {block.children && (
            <>
              <ul
                onClick={() => setOpenId(openId === block.id ? null : block.id)}
                className="flex gap-3 mt-2 hover:bg-[#1E2145] w-11/12 p-3 items-center ml-3 rounded-xl cursor-pointer text-[14px]"
              >
                
                <li className="text-gray-500 ml-1">{block.icon}</li>
                <li className="font-semibold hover:text-white">{block.title}</li>

                <li className="ml-auto">
                  {openId === block.id ? (
                    <IoIosArrowDown size={14} />
                  ) : (
                    <IoIosArrowForward size={14} />
                  )}
                </li>
              </ul>

              {/* dropdown */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openId === block.id
                    ? "max-h-60 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="ml-11 mr-6 text-[14px]">
                  {block.children.map((item, i) => (
                    <Link to={item.path} key={i}>
                    
                    <li
                      key={i}
                      className="p-2 hover:bg-[#1E2145] hover:text-white rounded-xl ml-3 cursor-pointer"
                    >
                      {item.title}
                    </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </>
          )}

          {/* Apps Section */}
          {block.items && (
            <ul>
              {block.items.map((item, i) => (
                <Link to={item.path || "/"} key={i}>
                <li
                  key={i}
                  className="flex gap-3 mt-2 hover:bg-[#1E2145] hover:text-white w-11/12 p-2 items-center ml-3 mr-3 rounded-xl cursor-pointer text-[14px]"
                >
                  <div className="text-gray-500 ml-2">{item.icon}</div>
                  <div className="font-semibold">{item.title}</div>
                </li>
                </Link>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
