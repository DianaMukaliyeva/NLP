const path = require('path');
const express = require('express');
const aylien = require("aylien_textapi");
const cors = require("cors");
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// set aylien API credentials
const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('dist'));
app.use(cors());

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('NLP app listening on port 8081!')
})

app.post('/analys', function (req, res) {
    textapi.sentiment(req.body, function(error, response) {
        if (error === null) {
            res.status(200).send(response);
        } else {
            res.status(422).send(error);
        }
    });
})
