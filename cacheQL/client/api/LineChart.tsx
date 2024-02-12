import {React, useState} from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables, CategoryScale, ArcElement } from "chart.js";
Chart.register(ArcElement);
Chart.register(...registerables)
Chart.register(CategoryScale);



function LineChart({ chartData }) {
  
  const lineData = {
    labels: chartData.map((data) =>  `Run ${data.id}`),
    datasets: [
      {
        label: "Cached Response Time",
        data: chartData.map((data) => data.response_time),
        backgroundColor: ["rgba(75,192,192,1)", "#ecf0f1"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  }

  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Line Chart</h2>
      <Line
        data={lineData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Response Times"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
}
export default LineChart;