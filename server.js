const express = require("express");
const morgan = require("morgan");
const path = require("path");

//initialize app
const app = express();

//logging middleware
app.use(morgan("dev"));

//get static assets
app.use(express.static(path.join(__dirname, "/assets")));

//parse info from req.body to app for post requests
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res, next) => {
  try {
    res.send("hello world!");
  } catch (error) {
    next(error);
  }
});

const port = process.env.PORT || 3000;
const init = async () => {
  try {
    app.listen(port, () => console.log(`listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
init();
