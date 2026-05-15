
import React from "react";
import { PieChart, Pie, Label } from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

const data = [
  { name: "Group A", value: 400, fill: "#0088FE" },
  { name: "Group B", value: 300, fill: "#00C49F" },
  { name: "Group C", value: 300, fill: "#FFBB28" },
  { name: "Group D", value: 200, fill: "#FF8042" },
];

// Reusable Pie Component
const MyPie = () => {
  return (
    <Pie
      data={data}
      dataKey="value"
      nameKey="name"
      outerRadius="80%"
      innerRadius="60%"
      isAnimationActive={false}
    />
  );
};

const SalesCategory = () => {
  return (
    <div className="mt-5 bg-white h-96 border border-gray-50 rounded-xl">
      {/* Header */}
      <div className="border-b border-dashed border-gray-300 flex items-center py-4 px-5">
        <h2 className="text-xl font-semibold text-gray-700">
          Top Selling Categories
        </h2>
      </div>

      {/* Chart Grid */}
      <div
        style={{
          // display: "grid",
          // gridTemplateColumns: "repeat(3, 1fr)",
          // gridTemplateRows: "repeat(3, 1fr)",
          // gap: "10px",
          width: "100%",
          height: "300px",
          padding: "10px",
        }}
      >
        {/* Large Chart */}
        {/* <PieChart
          responsive
          style={{
            gridColumn: "1 / 3",
            gridRow: "1 / 3",
            border: "1px solid #ddd",
            maxWidth: "100%",
            maxHeight: "100%",
            aspectRatio: 1,
          }}
        >
          <MyPie />

          <Label position="center" fill="#666">
            2x2 Cell
          </Label>

          <RechartsDevtools />
        </PieChart> */}

        {/* Top Right */}
        <PieChart
          responsive
          style={{
            gridColumn: "3 / 4",
            gridRow: "1 / 2",
            border: "1px solid #ddd",
            maxWidth: "100%",
            maxHeight: "100%",
            aspectRatio: 1,
          }}
        >
          <MyPie />

          <Label position="center" fill="#666">
            Total Sales
          </Label>

          <RechartsDevtools />
        </PieChart>

        {/* Middle Right */}
        {/* <PieChart
          responsive
          style={{
            gridColumn: "3 / 4",
            gridRow: "2 / 3",
            border: "1px solid #ddd",
            maxWidth: "100%",
            maxHeight: "100%",
            aspectRatio: 1,
          }}
        >
          <MyPie />

          <Label position="center" fill="#666">
            1x1 Cell
          </Label>

          <RechartsDevtools />
        </PieChart> */}

     
      </div>
    </div>
  );
};

export default SalesCategory;