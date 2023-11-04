const app = require("./app");
const mongoose = require("mongoose");

console.log('creating mongo connection');
mongoose.connect(`mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_ADDRESS}:27017/appdb?authSource=admin`);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
