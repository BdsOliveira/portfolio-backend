// Express Init
import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import registerRoutes from './routes/index.js';
import corsOptions from './config/cors.js'

const app = express();
app.use(cors(corsOptions));

app.use(express.json());
registerRoutes(app)

// Sensible data 
const PORT = process.env.PORT || 3000;
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

 // Setting a port Server
app.listen(PORT, () => {
    console.log(`Server is starting at port: ${PORT}`);
})
// // Connecting to database
// mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@projects-backend.8algy.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`)
//     .then(() => {
//         console.log('Database connected sucessfully.');
//     })
//     .catch((err) => console.log(err))