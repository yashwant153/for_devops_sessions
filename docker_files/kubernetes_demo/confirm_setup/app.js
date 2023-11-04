const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h1>Hello from this NodeJS app!</h1>
    <h2>Update deployment image</h2>
    <p>Try sending a request to /error and see what happens</p>
  `);
});

app.get("/error", (req, res) => {
  process.exit(1);
});

// strating application on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});