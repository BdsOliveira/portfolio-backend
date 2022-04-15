// Express Init
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Sensible data 
require('dotenv').config();
const PORT = process.env.PORT;
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

app.use(express.json());
// Routing
const routerProjects = require('./routes/Projects');
app.use('/projects', routerProjects)

app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + '/views/index.html');
});
/* app.use(
    express.urlencoded({ extended: true }),
); */


// Setting a port Server
app.listen(PORT, () => {
    console.log(`Server is starting at port: ${PORT}`);
})
// Connecting to database
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@projects-backend.8algy.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`)
    .then(() => {
        console.log('Database connected sucessfully.');
    })
    .catch((err) => console.log(err))