const express = require("express");
const app = express();

const port =  2000;

app.get("/", (req, res) => {
  res.send("this is root path");
})

app.listen(port, () => {
  console.log(`port is listening on this port ${port}`);
})
