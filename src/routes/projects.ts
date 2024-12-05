import { Router } from 'express';
import { ListProjectsFactory } from '../useCases/ListProjects/ListProjectsFactory';
import { CreateProjectFactory } from '../useCases/CreateProject/CreateProjectFactory';
import { FindProjectFactory } from '../useCases/FindProject/FindProjectFactory';

const projects = Router();

// const Project = require('../models/Project')

// Get all portfolio projects from database
projects.get('/', new ListProjectsFactory().start);
projects.get('/:id', new FindProjectFactory().start);
// res.status(200).json("get all projects");
// try {
    //     const projects = await Project.find();
    //     if (projects.length < 1) {
        //         res.status(404).json({ message: 'Empty database' });
        //         return;
        //     }
        //     res.status(200).json(projects);
        // } catch (error) {
            //     res.status(500).json({ error: 'Internal Server Error' });
            // }
            // });
            
projects.post('/', new CreateProjectFactory().start);
// Insert one portfolio project in database
// projects.post('/', async (req, res) => new CreateProjectController(new CreateProjectUseCase(new InMemoryProjectsRepository())).handle);
    // res.status(200).json("post project");
    // const project = {
    //     gitHubLink = req.body.gitHubLink,
    //     liveLink = req.body.liveLink,
    //     title = req.body.title,
    //     description = req.body.description,
    //     skillUsed1 = req.body.skillUsed1,
    //     skillUsed2 = req.body.skillUsed2,
    //     skillUsed3 = req.body.skillUsed3,
    //     skillUsed4 = req.body.skillUsed4,
    //     skillUsed5 = req.body.skillUsed5,
    //     isVisible = req.body.isVisible,
    // } = req.body;

    // try {
    //     await Project.create(project);
    //     res.status(201).json({ message: "Project Created Sucessfuly" });
    // } catch (error) {
    //     res.status(403).json({ message: 'Not possible to create a project' });
    // }
// });

projects.put('/:id', (req, res) => {
    res.status(200).json("put project");
});

projects.get('/:id', (req, res) => {
    res.status(200).json(`get project ${req.params.id}`);
});

projects.delete('/:id', (req, res) => {
    res.status(200).json("delete project");
});

export {
    projects
};