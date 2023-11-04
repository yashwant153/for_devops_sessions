const Fruit = require(".././models/fruit_model");

// lists all the fruits
exports.getAllFruits = async (req, res) => {
  try {
    const fruits = await Fruit.find();
    res.status(200).json({
      status: "success",
      results: fruits.length,
      data: { fruits },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

// merge fruit supplied by user on to existing fruits
exports.createFruit = async (req, res) => {
  try{
    const newfruit = await Fruit.create(req.body);
    res.status(201).json({
      status: 'success',
      data: { fruit: newfruit }
    });
  }catch(err){
    res.status(400).json({ status: 'fail', message: err.message });
  }
};