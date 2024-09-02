import projects from './projects.js';



export default function registerRoutes(app) {
	app.get('/', (req, res) => {
    	res.status(200).send("Hey! What's up? :)");
	});
	app.get('/status', (req, res) => {
    	res.status(200).json("Status OK!");
	});
	app.use('/projects', projects);
}