const express = require("express");
const bodyParser = require("body-parser");
// Axios is a promise based HTTP client for the browser and Node.js.
// Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations.
const axios = require("axios").default;
const mongoose = require("mongoose");
const Fruit = require("./models/fruit");

// else calling https gives error
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";



const app = express();

app.use(bodyParser.json());

app.get("/fruits", async (req, res) => {
  const fruits = await Fruit.find();
  res.status(200).json({
    fruits: fruits,
  });
});

app.post("/fruits", async (req, res) => {
  const fruitName = req.body.fruitName;
  const price  = req.body.price;
  const organic = req.body.organic;

  try {
    
    const existingFruit = await Fruit.findOne({ name: fruitName });
    if (existingFruit) {
      throw new Error("Fruit exists already!");
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  const fruit = new Fruit({
    fruitName: fruitName,
    price: price,
    organic: organic,
  });

  try {
    await fruit.save();
    res
      .status(201)
      .json({ message: "Fruit saved!", fruit : fruit.toObject() });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
});


mongoose.connect("mongodb://mongodb:27017/appdb");
app.listen(3000);