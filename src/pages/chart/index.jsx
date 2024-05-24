import React from "react";
import Chart from "react-apexcharts";
import { useContext } from "react";
import { GlobalContext } from "../../context/index";
import "./chart.css";


export default function ChartPage() {
  const { formData, selectedDate } = useContext(GlobalContext);

  const formattedDate = selectedDate
    ? new Date(selectedDate).toLocaleDateString()
    : "";

  const barData = [
    { x: "BP Sys", y: formData.bpSys },
    { x: "BP Dys", y: formData.bpDys },
    { x: "Pulse Rate", y: formData.pulseRate },
    { x: "Total Cholesterol", y: formData.totalCholesterol },
    { x: "Hdl Cholesterol", y: formData.hdlCholesterol },
    { x: "Ldl Cholesterol", y: formData.ldlCholesterol },
    { x: "Blood Glucose Fasting", y: formData.bloodGlucoseFasting },
    { x: "Blood Glucose PP", y: formData.bloodGlucosePP },
    { x: "Creatinine", y: formData.creatinine },
  ];

  const series = [
    {
      name: "Data",
      data: barData,
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "bar",
    },
    xaxis: {
      categories: barData.map((data) => data.x),
    },
  };

  return (
    <div className="chart-container">
      <div className="date-info">
        <p>Selected Date: {formattedDate}</p>
      </div>
      <Chart options={options} series={series} type="bar" height={350}></Chart>
    </div>
  );
}
