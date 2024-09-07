"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { ArcElement, Chart, Tooltip } from "chart.js";

const DonutChart = ({ accounts }: DonutChartProps) => {
  Chart.register(ArcElement, Tooltip);

  const data = {
    datasets: [
      {
        label: "Banks",
        data: [1124, 4323, 553],
        backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"],
      },
    ],
    labels: ["Bank 1", "Bank 2", "Bank 3"],
  };

  return <Doughnut data={data} options={{ cutout: "60%" }} />;
};

export default DonutChart;
