import { Box, Card, Container, Typography } from "@mui/material";
import React from "react";
import { FaTemperatureFull } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { FaMountain } from "react-icons/fa";
import { MdCompassCalibration } from "react-icons/md";
import TemperatureChart from "./TemperatureChart";
import LineChart from "./LineChartDiagram";

const ChartsPage = () => {
  let arr = [
    { title: "Temperature", value: "31 C" },
    { title: "Humidity", value: "60.20 %" },
    { title: "Pressure", value: "925.00 hPa" },
    { title: "Altitude", value: "28.00 m" },
  ];
  const icons = [
    FaTemperatureFull,
    WiHumidity,
    MdCompassCalibration,
    FaMountain,
  ];
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          justifyContent: "space-evenly",
          marginTop: "20px",
        }}
      >
        {arr.map((val, idx) => {
          let Icon = icons[idx];

          return (
            <Card
              sx={{
                minWidth: 200,
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                borderRadius: "10px",
                minHeight: 80,
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "monospace",
                    fontSize: "20px",
                    color: "brown",
                  }}
                >
                  {val.title}
                </Typography>
                <Typography sx={{ textAlign: "center" }}>
                  {val.value}
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: "20px" }}>
                  <Icon />
                </Typography>
              </Box>
            </Card>
          );
        })}
      </Box>
      <Box sx={{ marginLeft: "300px", marginTop: "20px" }}>
        <TemperatureChart />
      </Box>

      <Box>
        <LineChart />
      </Box>
      <Box></Box>
    </Container>
  );
};

export default ChartsPage;
