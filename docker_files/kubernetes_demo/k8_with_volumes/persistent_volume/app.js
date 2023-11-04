const express = require("express");
const fruitRouter = require("./routes/fruit_routes");

const app = express();

/*
 * MIDDLEWARE SECTION
 */

app.use(express.json());

// mount router as middleware
app.use("/api/v1/fruits", fruitRouter);


module.exports = app;
