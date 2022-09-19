import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

import routes from './routes';
import connection from './models'

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

connection().catch(err => console.log(err));

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});