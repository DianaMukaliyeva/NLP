var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const aylien = require("aylien_textapi");
const cors = require("cors");
const dotenv = require('dotenv');
dotenv.config();

const app = express()

// set aylien API credentials
const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

app.use(express.static('dist'))
app.use(cors())

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    console.log(req.body);
    res.send(mockAPIResponse)
})
