import React, { useContext } from "react";
import Chart from "react-apexcharts";
import { GlobalContext } from "../../context/index";

export default function ChartPage() {
  const { chartSeries } = useContext(GlobalContext);

  const chartOptions = {
    chart: {
      type: "bar",
    },
    xaxis: {
      categories: [
        "BP SYS",
        "BP DYS",
        "Pulse-Rate",
        "Total Chol",
        "hdl Chol",
        "ldl Chol",
        "Blood Glucose Fasting",
        "Blood Glucose PP",
        "Creatinine",
      ],
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-5">
      {chartSeries.map((data, index) => (
        <div key={index} className="mb-4">
          <div className="text-center font-semibold mb-2">{data.date}</div>
          <Chart
            options={chartOptions}
            series={[
              {
                data: data.data.map((item) => ({
                  x: item.x,
                  y: item.y,
                  fillColor: getColorForValue(item.x, item.y),
                })),
              },
            ]}
            type="bar"
            height={350}
          />
        </div>
      ))}
    </div>
  );

  function getColorForValue(category, value) {
    switch (category) {
      case "BP SYS":
        return value < 90 ? "#FF0000" : value <= 140 ? "#00ab41" : "#FF0000";
      case "BP DYS":
        return value < 60 ? "#FF0000" : value <= 90 ? "#00ab41" : "#FF0000";
      case "Pulse-Rate":
        return value < 60 ? "#FF0000" : value <= 100 ? "#00ab41" : "#FF0000";
      case "Total Chol":
        return value <= 200 ? "#00ab41" : "#FF0000";
      case "hdl Chol":
        return value <= 50 ? "#00ab41" : "#FF0000";
      case "ldl Chol":
        return value <= 129 ? "#00ab41" : "#FF0000";
      case "Blood Glucose Fasting":
        return value <= 100 ? "#00ab41" : "#FF0000";
      case "Blood Glucose PP":
        return value <= 140 ? "#00ab41" : "#FF0000";
      case "Creatinine":
        return value < 53 ? "#FF0000" : value <= 115 ? "#00ab41" : "#FF0000";

      default:
        return "#00ab41";
    }
  }
}
