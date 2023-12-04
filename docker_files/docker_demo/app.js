// requires expresss packages
const express = require("express");

// express() function puts new new Express application inside app variable
const app = express();

app.get('/', (req, res) => {
    console.log(`the get request is called`);
    res.send('<h2>Hi DevOps Team, this is coming from docker container </h2>');
  });
  
// strating application on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
  console.log('just for the sake of log')
});