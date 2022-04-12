const express = require('express');

const router = express.Router();

router.get('/projects', (req, res) => {
    res.send('Funfou');
});

router.post('/projects', (req, res) => {
    res.status(201).send('Project Created Sucessfuly');
});

router.delete('/projects', (req, res) => {
    res.status(403).send("You don't have permission to delete file without an ID");
});

module.exports = router;