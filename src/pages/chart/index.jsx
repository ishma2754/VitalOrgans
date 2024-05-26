import React from "react";
import Chart from "react-apexcharts";
import { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../context/index";



export default function ChartPage() {
  const {  chartSeries, setChartSeries} = useContext(GlobalContext);

  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: "bar",
    },
    xaxis: {
      categories: ["BP SYS", "BP DYS", "Pulse-Rate", "Total Chol","hdl Chol", "ldl Chol", "Blood Glucose Fasting",  "Blood Glucose PP", "Creatinine" ],
    },
    plotOptions: {
      bar: {
        colors: {
          ranges: [
            {
              from: -Infinity,
              to: 89, // Red for values below 90 for both bpSys and bpDys
              color: "#FF0000",
              label: "Below 90",
            },
            {
              from: 90,
              to: 140, // Blue for values between 90 and 140 for bpSys
              color: "#00BFFF",
              label: "90 - 140 (SYS)",
            },
            {
              from: 141, // Red for values above 140 for bpSys
              to: Infinity,
              color: "#FF0000",
              label: "Above 140 (SYS)",
            },
            {
              from: -Infinity,
              to: 59, // Red for values below 60 for bpDys
              color: "#FF0000",
              label: "Below 60 (DYS)",
            },
            {
              from: 60,
              to: 90, // Blue for values between 60 and 90 for bpDys
              color: "#00BFFF",
              label: "60 - 90 (DYS)",
            },
            {
              from: 91, // Red for values above 90 for bpDys
              to: Infinity,
              color: "#FF0000",
              label: "Above 90 (DYS)",
            },
          ],
          backgroundBarColors: ["#FFFFFF"], // Background color for bars
          backgroundBarOpacity: 1, // Opacity of background color
        },
      },
    },
  });
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-5" >
      {chartSeries.map((data, index) => (
        <div key={index} className="mb-4">
          <div className="text-center font-semibold mb-2">{data.date}</div>
          <Chart
            options={chartOptions}
            series={[data]}
            type="bar"
            height={350}
          />
        </div>
      ))}
    </div>
  );
}
