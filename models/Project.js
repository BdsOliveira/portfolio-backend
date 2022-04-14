const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://portfolio:portfolio@projects-backend.8algy.mongodb.net/projects-backend?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
console.log(client);
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});




/* const projetos = [
    {
        gitHubLink: 'https://github.com/BdsOliveira/portfolio',
        liveLink: 'https://portfolio-bdsoliveira.vercel.app/',
        projectTitle: 'Meu Portfolio',
        projectDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ratione, distinctio facilis natus quis fugiat non temporibus laborum, ducimus, minima saepe voluptas? Optio, quibusdam maiores. Nam explicabo quae voluptate quo!',
        skillUsed1: 'HTML5',
        skillUsed2: 'CSS3',
        skillUsed3: 'Javascript',
        skillUsed4: '',
        isVisible: true,
        id: 1
    },
    {
        gitHubLink: 'https://github.com/BdsOliveira/portfolio',
        liveLink: 'https://portfolio-bdsoliveira.vercel.app/',
        projectTitle: 'Meu Portfolio Backend',
        projectDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ratione, distinctio facilis natus quis fugiat non temporibus laborum, ducimus, minima saepe voluptas? Optio, quibusdam maiores. Nam explicabo quae voluptate quo!',
        skillUsed1: 'Node.js',
        skillUsed2: 'Express',
        skillUsed3: 'Javascript',
        skillUsed4: 'Firebase',
        isVisible: true,
        id: 2
    },
    {
        gitHubLink: 'https://github.com/BdsOliveira/portfolio',
        liveLink: 'https://portfolio-bdsoliveira.vercel.app/',
        projectTitle: 'Nutricionista',
        projectDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ratione, distinctio facilis natus quis fugiat non temporibus laborum, ducimus, minima saepe voluptas? Optio, quibusdam maiores. Nam explicabo quae voluptate quo!',
        skillUsed1: 'Node.js',
        skillUsed2: 'Express',
        skillUsed3: 'Javascript',
        skillUsed4: 'Google Agenda API',
        isVisible: true,
        id: 3
    }
] */