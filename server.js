const express = require("express");

const app = express();

const port = 5001;

app.get('/', (req, res) => {
  res.send('Hello this is User Contact API app')
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});