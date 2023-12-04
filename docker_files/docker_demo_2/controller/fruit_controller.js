const fs = require("fs");

const fruits = JSON.parse(fs.readFileSync("./data/fruits_data.json", "utf-8"));

exports.checkId = (req, res, next, val) => {
  console.log(`Fruit id is ${val}`);
  if (val > fruits.length) {
    res.status(400).json({ status: "fail", message: "Invalid id" });
  }
  next();
};


// lists all the fruits
exports.getAllFruits = (req, res) => {
  res.status(200).json({
    status: "success",
    results: fruits.length,
    data: { fruits },
    requestedAt: req.requestTime,
  });
};

// lists a fruit, with specified id
exports.getAFruit = (req, res) => {
  console.log(`getAFruit request at ${req.requestTime}`);
  // get the id from request, but this id will be string
  // this need a conversion to number
  const id = req.params.id * 1;

  // now get relevant objects from from json arr
  const fruit = fruits.find((e1) => e1.id === id);
  if (!fruit) {
    return res.status(404).json({ message: `No fruit found with id ${id}` });
  }
  res
    .status(200)
    .json({ status: "success", data: { fruit }, requestedAt: req.requestTime });
};