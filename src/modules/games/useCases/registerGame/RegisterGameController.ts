import { Request, Response } from 'express';

import { IGameDTO } from '../../infra/entities/Game';
import { GameRepository } from '../../infra/repositories/GameRepository';
import { RegisterGameUseCase } from './RegisterGameUseCase';

const factory = () => {
  const gameRepository = new GameRepository();
  const useCase = new RegisterGameUseCase(gameRepository);

  return useCase;
};

class RegisterGameController {
  constructor(private useCase: RegisterGameUseCase) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const { releaseData, designer, developer, genre, mode, name, platform }: IGameDTO = req.body;
    await factory().execute({ releaseData, designer, developer, genre, mode, name, platform });

    return res.status(201).json({ message: 'Registro criado com sucesso!' });
  }
}

export { RegisterGameController };
