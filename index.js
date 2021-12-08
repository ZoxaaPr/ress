require("dotenv").config();
//const routers = require("./routes/api/register");
const admin = require("firebase-admin");
const seviceAcc = require("./config/conf.json");
const express = require("express");
const bdoyParser = require("body-parser");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

const app = express();

admin.initializeApp({
  credential: admin.credential.cert(seviceAcc),
});

app.use(express.json());
app.use(cors());

app.use("/api", require("./routes/api/register"));

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server working ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
