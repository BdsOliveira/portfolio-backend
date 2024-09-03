import projects from './projects.js';

export default function registerRoutes(app) {
	app.get('/', (req, res) => {
    	res.status(200).send("<div style='text-align: center; padding-top: 45vh;'>Hey! What's up? :)</div>");
	});
	app.get('/status', (req, res) => {
    	res.status(200).json({
			"Status": "Ok",
			"Node Version": process.versions.node,
			"Connected": process.connected,
			"Platform": process.platform,
		});
	});
	app.use('/projects', projects);
}