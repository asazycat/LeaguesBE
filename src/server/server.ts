
import express, { type Express } from "express";
import http from 'http';
import apiRoutes from "./routes.js";
import cors from 'cors';
import helmet from 'helmet';
import { engine } from 'express-handlebars';

const port = 5000;
const expressApp: Express = express()
const server = http.createServer(expressApp)


expressApp.use(express.json())
expressApp.use(helmet())
expressApp.use(cors())
expressApp.use(express.static('static'));
expressApp.use(express.static('node_modules/bootstrap/dist/css'))
expressApp.set('view engine', 'handlebars');
expressApp.engine('handlebars', engine())
expressApp.use('/api/apiRoutes', apiRoutes)







server.listen(port, () => { console.log(`listening at http://localhost:${port}`) })