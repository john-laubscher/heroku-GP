require("dotenv").config();
const express = require("express");

const server = express();
console.log("web43 work in progress");
console.log(process.env.PORT);
server.get("/api", (req, res) => {
  console.log("this is the req:", req);
  res.json({ message: "web 43 is working and ready to serve" });
});
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`I am listening at ${PORT}`);
});
