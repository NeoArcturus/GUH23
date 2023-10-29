const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Dotenv = require("dotenv");

const GET = require("./routes/GET/index");
const POST = require("./routes/POST/index");

const app = express();
const PORT = 9191;

Dotenv.config();

app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to (CORS)
  })
);
app.use(bodyParser.json());
app.use("/postAPI", POST);
app.use("/getAPI", GET);

app.listen(PORT, (error) => {
  if (!error) console.log("App is running fine on PORT 9191");
  else console.log("Error: " + error);
});
