const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const router = require('./routes/projects');

app.use(router);

app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + '/index.html');
});

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://portfolio-projects-4f3d0-default-rtdb.firebaseio.com"
});

app.listen(port, () => {
    console.log(`Server is starting at port: ${port}`);
})