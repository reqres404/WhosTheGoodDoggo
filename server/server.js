const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const dogRoute = require('./routes/dogRoutes')
require("dotenv").config()


const app = express()
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
  });
app.use("/api/dogs",dogRoute)


mongoose.set('strictQuery',true)
mongoose.connect(process.env.DB_URL)
.then(() => {
    app.listen(4000, () => {
      console.log(`Connected to DB and Listening to 4000!`);
    });
  })
  .catch((error) => {
    console.log("Not connected!");
    console.log("reason : ", error);
  });