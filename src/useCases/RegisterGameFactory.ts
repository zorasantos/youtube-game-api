import { GameRepository } from '../repositories/GameRepository';
import { RegisterGameController } from './RegisterGameController';
import { RegisterGameUseCase } from './RegisterGameUseCase';

const registerGameFactory = () => {
  const gameRepository = new GameRepository();
  const registerGameUseCase = new RegisterGameUseCase(gameRepository);
  const registerGameController = new RegisterGameController(registerGameUseCase);

  return registerGameController;
};

export { registerGameFactory };
