import { container } from 'tsyringe';

import { GameRepository } from '../../modules/games/infra/repositories/GameRepository';
import { IGameRepository } from '../../modules/games/infra/repositories/IGameRepository';

container.registerSingleton<IGameRepository>('GameRepository', GameRepository);
