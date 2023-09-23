import dotenv from 'dotenv';
import connectarDB from './src/config/db.js';
import Server from './src/server/server.js';
dotenv.config();

const server = new Server();

server.listenner();
connectarDB();