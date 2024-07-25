import React from "react";
import Charts from "./ChartsPage";
import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <Container sx={{ backgroundColor: "lightgrey", maxWidth: "xl" }}>
      <Box>
        <Typography
          sx={{
            fontSize: "40px",
            textAlign: "center",
            fontFamily: "sans",
          }}
        >
          Dashboard
        </Typography>
        <Box sx={{ float: "right", marginTop: "-40px", marginLeft: "120px" }}>
          <Button variant="contained" onClick={() => navigate("/")}>
            Log-Out
          </Button>
        </Box>
      </Box>
      <Box>
        <Charts />
      </Box>
    </Container>
  );
};

export default Homepage;
