import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const PieChart = () => {
  const [chartData, setChartData] = useState({
    series: [25, 20, 15, 40],
    options: {
      chart: {
        type: "pie",
      },
      labels: [
        "Bajaj Finserv",
        "Shriram Finance",
        "Mahindra Finance",
        "Utkarsh Small Finance Bank",
      ],
      responsive: [
        {
          breakpoint: 600,
          options: {
            chart: {
              width: 500,
            },
            legend: {
              position: "top",
            },
          },
        },
      ],
    },
  });

  return (
    <div className="bg-white border-1 rounded-lg p-4">
      <div className="flex mt-4">
        <div className="text-xl font-bold mx-2">Your FDs Portfolio</div>
        <button className="border border-gray-300 rounded-md p-2 ml-20 w-[30%] ">
          Deposit Amt
          <span
            className={` px-1 transition-transform duration-300 ease-in-out transform `}
          >
            ▼
          </span>
        </button>
      </div>
      <div className="w-full">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="pie"
          width={480}
        />
      </div>
    </div>
  );
};

export default PieChart;
