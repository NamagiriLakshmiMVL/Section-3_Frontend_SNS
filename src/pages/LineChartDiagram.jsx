import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Box, Container, Typography } from "@mui/material";

const LineChartDiagram = () => {
  let arr = [
    { title: "Temperature", value: "31" },
    { title: "Humidity", value: "60.20" },
    { title: "Pressure", value: "925" },
    { title: "Altitude", value: "28" },
  ];
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {arr.map((val) => (
          <Box>
            <Typography sx={{ marginLeft: "200px", marginTop: "50px" }}>
              {val.title}
            </Typography>
            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
              series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, `${val.value}`],
                },
              ]}
              width={500}
              height={300}
            />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default LineChartDiagram;
