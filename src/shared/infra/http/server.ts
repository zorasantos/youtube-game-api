import 'reflect-metadata';
import express from 'express';

import { router } from './routes';

import '../../container';

const app = express();
const port = 5000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
