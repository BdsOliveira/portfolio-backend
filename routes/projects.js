const router = require('express').Router();

const Project = require('../models/Project')

// Get all portfolio projects from database
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find();
        if (projects.length < 1) {
            res.status(404).json({ message: 'Empty database' });
            return;
        }
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
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