const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const router = require("./router");
const mongoose = require("mongoose");
const assert = require("mongoose");
const cors = require("cors");

//DB setup
mongoose.connect("mongodb://localhost:27017", {
  useMongoClient: true
});
// Use native promises
mongoose.Promise = global.Promise;

//App setup
app.use(morgan("combined"));
app.use(cors());
app.use(bodyParser.json({ type: "*/*" }));
router(app);

//Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log("Server runing on port:", port);
