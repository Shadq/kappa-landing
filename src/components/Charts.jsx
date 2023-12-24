import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
  ],
  datasets: [
    {
      fill: false,
      lineTension: 0.1,
      backgroundColor: "#3773f5",
      borderColor: "#06B6D4",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "#06B6D4",
      pointBackgroundColor: "#06B6D4",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#06B6D4",
      pointHoverBorderColor: "#06B6D4",
      pointHoverBorderWidth: 5,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [2, 1.6, 3.6, 5.2, 5.8, 6, 8.3, 8, 7.2, 7.7],
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

const Charts = () => {
  return (
    <div className="mt-44 pl-14 pr-14 flex flex-col gap-24">
      <div className="flex text-center justify-center ">
        <h1 className="font-thick font-bold text-white text-5xl">
          <span className="bg-gradient-to-b from-sky-400 via-sky-600 to-gray-700 bg-clip-text text-transparent">
            $Kappa
          </span>{" "}
          Price Charts
        </h1>
      </div>
      <div>
        <Line
          data={data}
          options={options}
          width={400}
          height={150}
          className="font-thick"
        />
      </div>
    </div>
  );
};

export default Charts;
