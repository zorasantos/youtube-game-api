import { Router } from 'express';

import { registerGameFactory } from '../useCases/RegisterGameFactory';

const registerRoutes = Router();

const registerGameController = registerGameFactory();

registerRoutes.post('/', registerGameController.handle);

export { registerRoutes };
