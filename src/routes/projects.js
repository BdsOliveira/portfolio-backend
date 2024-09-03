import express from 'express';

const projects = express.Router();

// const Project = require('../models/Project')

// Get all portfolio projects from database
projects.get('/', async (req, res) => {
    res.status(200).json("get all projects");
    return
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
projects.post('/', async (req, res) => {
    res.status(200).json("post project");
    return
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

projects.put('/:id', (req, res) => {
    res.status(200).json("put project");
});

projects.get('/:id', (req, res) => {
    res.status(200).json(`get project ${req.params.id}`);
});

projects.delete('/', (req, res) => {
    res.status(200).json("post project");
});

export default projects;