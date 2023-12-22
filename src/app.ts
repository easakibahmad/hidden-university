import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

const test = async (req: Request, res: Response) => {
  res.send('Welcome to the Hidden University!!');
};

app.get('/', test);

export default app;


