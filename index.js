const express = require('express');
const path = require('path');

const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const app = express();
const dbRoute = "mongodb://admin:marketing2019@ds125994.mlab.com:25994/marketing";
const cors = require('cors')
mongoose.connect(
    dbRoute,
    { useNewUrlParser: true }
);

// await mongoose.connection.dropDatabase();

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

const html = process.env.DEV ? 'public' : 'build';
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, `client/${html}`)));

// Handles any requests that don't match the ones above
app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, `/client/${html}/index.html`));
});


const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);