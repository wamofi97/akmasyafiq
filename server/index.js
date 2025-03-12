const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 8080;
require("dotenv").config();

//middleware
app.use(express.json());
app.use(cors());

//ROUTES

app.use("/", require("./routes/wedding"));

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
