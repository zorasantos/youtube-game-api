import { Router } from 'express';

import { RegisterGameController } from '../../../../modules/games/useCases/registerGame/RegisterGameController';

const registerRoutes = Router();

const registerGameController = new RegisterGameController();

registerRoutes.post('/', registerGameController.handle);

export { registerRoutes };
