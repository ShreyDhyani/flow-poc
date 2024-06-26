// Import the express module
// const express = require("express");
import express from "express";
import { handleGetConfig } from "./src/getTenantConfig";
// Create an instance of the express application
const app = express();
// Specify a port number for the server
const port = 5100;
// Start the server and listen to the port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/post", async (req, res) => {
  const data = await handleGetConfig(req, res);
  res.status(200).json({ msg: "HELLO", data: data });
});
