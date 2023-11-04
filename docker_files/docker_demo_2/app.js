const express = require("express");
const fruitRouter = require("./routes/fruit_route");

const app = express();

/*
 * MIDDLEWARE SECTION
 */


app.use(express.json());

app.use((req, res, next) => {
  console.log("Hello DevOps team , from middleware, from within container");
  next(); // to call next thing in pipeline // if this line is commented then control won't be passed to next in line
});

app.use((req, res, next) => {
  req.requestTime = new Date(Date.now());
  next();
});

// mount router as middleware
app.use("/api/v1/fruits", fruitRouter);

module.exports = app;