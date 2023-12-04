const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Fruit = require("./models/fruit");


const app = express();

app.use(bodyParser.json());


app.get("/fruits", async (req, res) => {
  const fruits = await Fruit.find();
  console.log("fruits", JSON.stringify(fruits));
  res.status(200).json({
    fruits: fruits,
  });
});

app.post("/fruits", async (req, res) => {
  console.log("req.body", JSON.stringify(req.body));
  const fruitName = req.body.fruitName;
  const price  = req.body.price;
  const organic = req.body.organic;

  try {
    
    const existingFruit = await Fruit.findOne({ name: fruitName });
    console.log("existingFruit", JSON.stringify(existingFruit));
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


mongoose.connect("mongodb://172.17.0.2:27017/appdb");
app.listen(3000);