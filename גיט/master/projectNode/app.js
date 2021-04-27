const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/api');
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
dotenv.config();
const app = express();

const cors = require('cors');
app.use(cors())
app.all('/', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*")
    res.header('Access-Control-Allow-Headers', "*")
    res.header('Access-Control-Allow-Methods', "*")

    next();
})
const connectionParams = {
    newUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

mongoose.connect(process.env.db_con, connectionParams)
    .then(() => {
        console.log("connected to db");
    })
    .catch((err) => {
        console.log("error: " + err);
    })

app.use(bodyParser.json())
app.use('/', router)

app.listen(4000, () => {
    console.log("listening on port 3000")
})
