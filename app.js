const express = require('express');
const app = express();
const port = 5000;

const router = require('./routes/projects');

app.use(router);

app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log(`Server is starting at port: ${port}`);
})