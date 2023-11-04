const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

/*
 * MIDDLEWARE SECTION
 */

// following line act as middleware to modify incoming request data
// express.json() parses incoming request with JSON payload
// if this line is commented then the req.body in Post method will be undefined
app.use(express.json());

// We will be saving one JSON in this directory
// To serve that JSON as URL, this need to be done
// userchanges will be mounted directory
app.use("/userchanges", express.static("userchanges"));


/*
 * ROUTE HANDLERS
 */

const fruits = JSON.parse(fs.readFileSync("./data/fruits_data.json", "utf-8"));

// lists all the fruits
const getAllFruits = (req, res) => {
  res.status(200).json({
    status: "success",
    results: fruits.length,
    data: { fruits },
    requestedAt: req.requestTime,
  });
};


// merge fruit supplied by user on to existing fruits
const createFruit = async (req, res) => {
  const newId = fruits[fruits.length - 1].id + 1;
  const newFruit = Object.assign({ id: newId }, req.body);
  fruits.push(newFruit);

  const finalFilePath = path.join(__dirname, "userchanges", "fruits.json");

  console.log(`finalFilePath where file need to be copied ${finalFilePath} `);

  await fs.writeFile(finalFilePath, JSON.stringify(fruits), (err) => {
    if (err) throw err;
    res.status(200).json({
      status: "success",
      data: { newFruit },
      message: "Pl check file at http://localhost:3000/userchanges/fruits.json",
    });
  });
};

/*
 * ROUTES SECTION
 */

// Lets create routes as middleware now
const fruitRouter = express.Router();

// and use that middleware (called as mount the router on path)
app.use("/api/v1/fruits", fruitRouter);

/*
 * ACTUAL ROUTES
 */

fruitRouter.route("/").get(getAllFruits).post(createFruit);

module.exports = app;