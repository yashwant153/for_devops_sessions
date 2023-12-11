const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({message:'This will demo node test and CICD and Webhook.'});
});

module.exports = app;
