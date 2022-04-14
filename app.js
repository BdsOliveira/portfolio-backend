const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const routerProjects = require('./routes/projects');

app.use('/projects', routerProjects)


app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + '/index.html');
    res.json({message: 'Funfou'});
});

app.listen(PORT, () => {
    console.log(`Server is starting at port: ${PORT}`);
})