import React from 'react'
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";


function SalesCard() {

      const boxItem = [
    {
      title: "Total Sales",
      number: 8848,
      icon: "Icon1",
      percentage: "16.8%",
      text: "Since last month",
    },

    {
      title: "Total Sales",
      number: 8848,
      icon: "Icon1",
      percentage: "16.8%",
      text: "Since last month",
    },

    {
      title: "Total Sales",
      number: 8848,
      icon: "Icon1",
      percentage: "16.8%",
      text: "Since last month",
    },

    {
      title: "Total Sales",
      number: 8848,
      icon: "Icon1",
      percentage: "16.8%",
      text: "Since last month",
    },

    {
      title: "Total Sales",
      number: 8848,
      icon: "Icon1",
      percentage: "16.8%",
      text: "Since last month",
    },
  ];

  return (
     <div className="">
        <div className=" flex justify-between">
          <div className=" text-xl font-semibold text-gray-500"> Dashboard</div>
          <div>
            <span className=" text-blue-500 "> Dusty / </span>
            <span className="text-gray-800"> Apps /</span>
            <span className=" text-gray-600"> Dashboard</span>
          </div>
        </div>

        <div className="gap-9 grid grid-cols-3">
          {boxItem.map((item, index) => (
            <div
              key={index}
              className=" h-40 mt-5 bg-white rounded-lg shadow-md border-gray-50 border"
            >
              <div className=" ml-4 mt-4">
                <h2 className="text-[18px] font-medium text-gray-700">
                  {item.title}
                </h2>

                <div className=" flex mt-3 gap-5">
                  <h1 className="text-xl font-semibold">
                    {" "}
                    {item.number.toLocaleString()}
                  </h1>
                  <div>{item.icon}</div>
                </div>

                <div className="flex items-center gap-2 mt-4">
                  <span className="text-green-500 font-semibold">
                    {item.percentage}
                  </span>
                  <span className="text-green-500">
                    <MdArrowDropUp />
                  </span>
                  <span className="text-gray-400 ml-4">{item.text}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default SalesCard