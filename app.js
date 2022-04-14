// Express Init
const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();

// Sensible data 
require('dotenv').config();
const PORT = process.env.PORT;
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

// Routing
const routerProjects = require('./routes/Projects');
app.use('/projects', routerProjects)


app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + '/index.html');
    res.json({ message: 'Funfou' });
});

app.use(
    express.urlencoded({ extended: true }),
);
app.use(express.json());

// Setting a port Server
app.listen(PORT, () => {
    console.log(`Server is starting at port: ${PORT}`);
})
// Connecting to database
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@projects-backend.8algy.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`)
.then(() => {
    console.log('Connecting to database');
})
.catch((err) => console.log(err))