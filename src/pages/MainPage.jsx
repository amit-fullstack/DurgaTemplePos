import React, { useState } from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Box,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Tabs,
  Tab,
} from "@mui/material";

function ExpressDonationPage() {
  const [donationAmount, setDonationAmount] = useState(200);
  const [donationFrequency, setDonationFrequency] = useState("One-time");
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");
  const [selectedTab, setSelectedTab] = useState(0);

  const handleAmountClick = (amount) => setDonationAmount(amount);
  const handleFrequencyChange = (event, newFrequency) =>
    setDonationFrequency(newFrequency);
  const handlePaymentChange = (method) => setPaymentMethod(method);
  const handleTabChange = (event, newValue) => setSelectedTab(newValue);

  return (
    <Box
      style={{
        padding: "2%",
        width: "100vw",
        height: "100vh",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "auto",
      }}
    >
      {/* Logo */}
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <img src="logo.png" alt="Temple Logo" style={{ maxHeight: "80px" }} />
      </Box>

      {/* Navigation Tabs */}
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        variant="fullWidth"
        style={{ marginBottom: "20px" }}
        centered
      >
        <Tab label="Daily Services" />
        <Tab label="Personal Services" />
        <Tab label="Donations" />
        <Tab label="Weekly" />
        <Tab label="Monthly" />
      </Tabs>

      {/* Donation Options */}
      <Typography
        variant="h5"
        style={{ marginTop: "10px", textAlign: "center" }}
      >
        Donate Today!
      </Typography>
      <ToggleButtonGroup
        value={donationFrequency}
        exclusive
        onChange={handleFrequencyChange}
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2%",
        }}
      >
        <ToggleButton value="One-time" style={{ flex: 1 }}>
          One-time Donation
        </ToggleButton>
        <ToggleButton value="Monthly" style={{ flex: 1 }}>
          Monthly Donation
        </ToggleButton>
      </ToggleButtonGroup>

      <Box
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2%",
          marginBottom: "2%",
        }}
      >
        {[50, 100, 150, 200].map((amount) => (
          <Button
            key={amount}
            variant={donationAmount === amount ? "contained" : "outlined"}
            onClick={() => handleAmountClick(amount)}
            style={{ flex: "1 1 23%", height: "60px", fontSize: "18px" }}
          >
            ${amount}
          </Button>
        ))}
        <Button
          variant="outlined"
          onClick={() => setDonationAmount("")}
          style={{ flex: "1 1 23%", height: "60px", fontSize: "18px" }}
        >
          Others
        </Button>
      </Box>
      <TextField
        label="Amount"
        variant="outlined"
        fullWidth
        value={donationAmount}
        onChange={(e) => setDonationAmount(e.target.value)}
        style={{ marginBottom: "2%" }}
      />

      {/* Purpose */}
      <TextField
        label="Purpose"
        variant="outlined"
        fullWidth
        placeholder="General Donation"
        style={{ marginBottom: "2%" }}
      />

      {/* User Information */}
      <Grid container spacing={2} style={{ marginBottom: "2%" }}>
        <Grid item xs={12} md={6}>
          <TextField label="First Name" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label="Last Name" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Email" variant="outlined" fullWidth />
        </Grid>
      </Grid>

      {/* Payment Method */}
      <Box
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2%",
          marginBottom: "2%",
        }}
      >
        {["Credit Card", "Google Pay", "Apple Pay"].map((method) => (
          <Button
            key={method}
            variant={paymentMethod === method ? "contained" : "outlined"}
            onClick={() => handlePaymentChange(method)}
            style={{
              flex: "1 1 30%",
              height: "60px",
              fontSize: "18px",
            }}
          >
            {method}
          </Button>
        ))}
      </Box>

      {/* Additional Options */}
      <FormControlLabel
        control={<Checkbox />}
        label="Subscribe to Newsletter"
        style={{ marginBottom: "1%" }}
      />
      <FormControlLabel
        control={<Checkbox />}
        label="Get notification from temple via Email"
        style={{ marginBottom: "1%" }}
      />
      <FormControlLabel
        control={<Checkbox />}
        label="Save the information for future use"
        style={{ marginBottom: "2%" }}
      />

      {/* Submit Button */}
      <Button
        variant="contained"
        color="primary"
        fullWidth
        style={{
          padding: "15px",
          fontSize: "20px",
          backgroundColor: "#970a38",
          textTransform: "none",
        }}
      >
        Proceed to Pay
      </Button>
    </Box>
  );
}

export default ExpressDonationPage;
