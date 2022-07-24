import { Router } from 'express';

import { registerRoutes } from './register.routes';

const router = Router();

router.use('/register', registerRoutes);

export { router };
