import express from 'express';
import "dotenv/config";
import cors from 'cors';
import http from 'http';
import { connectDB } from './lib/db.js';

// create an Express application and a server
const app = express();
const server = http.createServer(app);

// set up middleware
app.use(express.json({ limit: '4mb' }));
app.use(cors());

app.use('/api/status', (req, res) => res.send('server is live'));

// connect to the database
await connectDB();

const PORT = process.env.PORT || 5000;
// start the server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});