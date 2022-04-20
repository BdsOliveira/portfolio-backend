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

// Insert one portfolio project in database
router.post('/', async (req, res) => {
    const project = {
        gitHubLink = req.body.gitHubLink,
        liveLink = req.body.liveLink,
        title = req.body.title,
        description = req.body.description,
        skillUsed1 = req.body.skillUsed1,
        skillUsed2 = req.body.skillUsed2,
        skillUsed3 = req.body.skillUsed3,
        skillUsed4 = req.body.skillUsed4,
        skillUsed5 = req.body.skillUsed5,
        isVisible = req.body.isVisible,
    } = req.body;

    try {
        await Project.create(project);
        res.status(201).json({ message: "Project Created Sucessfuly" });
    } catch (error) {
        res.status(403).json({ message: 'Not possible to create a project' });
    }
});

router.delete('/:id', (req, res) => {
    res.status(403).send("Can not found project with an ID provided");
});

router.delete('/', (req, res) => {
    res.status(404).send("Can not found project without an ID");
});

module.exports = router; 