const fs = require("fs");
const fruits = JSON.parse(fs.readFileSync("./data/fruits_data.json", "utf-8"));
const path = require("path");

const filePath = path.join(__dirname, "..", "userchanges", "fruits_data.json");

// lists all the fruits
exports.getError = (req, res) => {
  process.exit(1);
};

// lists all the fruits
exports.getAllFruits = (req, res) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to open file', error: err });
    }
    res.status(200).json({ fruits: JSON.parse(data) });
  });
};


// merge fruit supplied by user on to existing fruits
exports.createFruit = (req, res) => {
  console.log(`createFruit request at ${req.requestTime}`);
  // create new id for new object
  const newId = fruits[fruits.length - 1].id + 1;
  console.log(`new id is ${newId}`);

  // create new object
  // merge request body in this new object
  const newFruit = Object.assign({ id: newId }, req.body);
  // push this new object in fruits JSON Array
  fruits.push(newFruit);

  // also update our file of fruits
  fs.appendFile(filePath, JSON.stringify(fruits) + "\n", (err) => {
    if (err) {
      return res.status(500).json({ message: 'Storing the text failed', error: err });
    }
    res.status(200).json({ status: "success", data: { newFruit } });
  });
  
};