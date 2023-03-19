import { celebrate } from 'celebrate';
import { Router } from 'express';

import { RegisterGameController } from '../../../../modules/games/useCases/registerGame/RegisterGameController';
import { registerValidator } from '../../../../modules/games/useCases/registerGame/validator';

const registerRoutes = Router();

const registerGameController = new RegisterGameController();

registerRoutes.post('/', celebrate(registerValidator), registerGameController.handle);

export { registerRoutes };
