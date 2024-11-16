import React from "react";
import { Grid, Typography, TextField, Button, Box } from "@mui/material";

function KioskHomeScreen() {
  return (
    <Box sx={{ width: "100%", minHeight: "100vh", overflow: "hidden" }}>
      <Grid container sx={{ width: "100%" }}>
        {/* Image Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            backgroundImage: 'url("/images/Background.jpeg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: { xs: "50vh", md: "100vh" }, // Only a minimum height, responsive
          }}
        ></Grid>

        {/* Form Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: { xs: "20px", md: "32px 48px" },
            backgroundColor: "#ffffff",
          }}
        >
          {/* Header Section */}
          <Box
            sx={{
              width: "100%",
              maxWidth: "400px",
              padding: { xs: "20px", md: "40px" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                padding: "20px",
                border: "2px solid #970a38",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  fontSize: { xs: "1.2em", md: "1.5em" },
                  color: "#333",
                  marginBottom: "10px",
                }}
              >
                Welcome to <br />
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#970a38",
                    background: "linear-gradient(to right, #970a38, orange)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Durga temple of Virginia
                </span>
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#555", marginBottom: "20px" }}
              >
                Please enter your details to proceed and make offerings.
              </Typography>

              <TextField
                label="Mobile number"
                variant="outlined"
                fullWidth
                placeholder="703-421-8530"
                sx={{ marginTop: "15px" }}
              />

              <Typography
                variant="body2"
                sx={{ margin: "15px 0", fontWeight: "bold", color: "#777" }}
              >
                (or)
              </Typography>

              <TextField
                label="Email-Id"
                variant="outlined"
                fullWidth
                placeholder="Enter here..."
                sx={{ marginBottom: "20px" }}
              />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "space-between",
                  marginTop: "20px",
                  width: "100%",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#970a38",
                    color: "white",
                    padding: "10px 20px",
                    fontSize: "1em",
                    marginBottom: { xs: "10px", sm: "0" },
                    flex: 1,
                  }}
                >
                  Next
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#970a38",
                    color: "white",
                    padding: "10px 20px",
                    fontSize: "1em",
                    flex: 1,
                  }}
                >
                  Express Donation
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default KioskHomeScreen;
