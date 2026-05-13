import React from "react";
import SalesCard from "../pageComponents/sales/SalesCard";
import SalesCategory from "../pageComponents/sales/SalesCategory";

const Sales = () => {
 

  return (
    <div className=" bg-[#F6F8FB] p-5">
    <SalesCard/>
    <SalesCategory/>
    </div>
  );
};

export default Sales;
