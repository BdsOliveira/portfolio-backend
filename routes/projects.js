const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).send('Funfou');
});

router.post('/', (req, res) => {
    res.status(201).send('Project Created Sucessfuly');
});

router.delete('/:id', (req, res) => {
    res.status(403).send("Can not found project with an ID provided");
});

router.delete('/', (req, res) => {
    res.status(404).send("Can not found project without an ID");
});

module.exports = router;