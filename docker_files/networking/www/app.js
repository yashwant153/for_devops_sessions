const express = require("express");
const bodyParser = require("body-parser");
// Axios is a promise based HTTP client for the browser and Node.js.
// Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations.
const axios = require("axios").default;

// else calling https gives error
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";


const app = express();

app.use(bodyParser.json());

app.get("/movies", async (req, res) => {
  try {
    const response = await axios.get("https://swapi.dev/api/films");
    res.status(200).json({ movies: response.data });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong.",
      errorMessage: error.message,
      error: error,
    });
  }
});

app.get("/people", async (req, res) => {
  try {
    const response = await axios.get("https://swapi.dev/api/people");
    res.status(200).json({ people: response.data });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong.",
      errorMessage: error.message,
      error: error,
    });
  }
});

port=3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

