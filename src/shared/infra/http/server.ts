import 'reflect-metadata';
import { CelebrateError } from 'celebrate';
import express, { NextFunction, Request, Response } from 'express';

import { router } from './routes';

import '../../container';

const app = express();
const port = 5000;

app.use(express.json());
app.use(router);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof CelebrateError) {
    const errorBody = err.details.get('body');
    return res.status(400).json({
      message: errorBody?.message
    });
  }

  return res.status(500).json({
    status: 'Error',
    message: `Internal server error: ${err.message}`
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
