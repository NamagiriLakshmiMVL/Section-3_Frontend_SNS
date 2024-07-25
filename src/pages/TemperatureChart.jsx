import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

export function getData() {
  return [
    ["Label", "Value"],
    ["Temperature", 31],
    ["Humidity", 60.2],
    ["Pressure", 925],
    ["Altitude", 28],
  ];
}

export const options = {
  width: 2000,
  height: 120,
  redFrom: 90,
  redTo: 100,
  yellowFrom: 75,
  yellowTo: 90,
  minorTicks: 5,
  gap: 10,
};

export default function TemperatureChart() {
  const [data, setData] = useState(getData);

  useEffect(() => {
    const id = setInterval(() => {
      setData(getData());
    }, 3000);

    return () => {
      clearInterval(id);
    };
  });
  return (
    <Box>
      <Chart chartType="Gauge" data={data} options={options} />
    </Box>
  );
}
