"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { ArcElement, Chart, Tooltip } from "chart.js";

const DonutChart = ({ accounts }: DonutChartProps) => {
  const accountNames = accounts.map((account) => account.name);
  const accountBalances = accounts.map((account) => account.currentBalance);

  Chart.register(ArcElement, Tooltip);
  const data = {
    datasets: [
      {
        label: "Banks",
        data: accountBalances,
        backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"],
      },
    ],
    labels: accountNames,
  };

  return <Doughnut data={data} options={{ cutout: "60%" }} />;
};

export default DonutChart;
