import { Request, Response } from 'express';

import { IGameDTO } from '../entities/Game';
import { RegisterGameUseCase } from './RegisterGameUseCase';

class RegisterGameController {
  constructor(private useCase: RegisterGameUseCase) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const { releaseData, designer, developer, genre, mode, name, platform }: IGameDTO = req.body;

    await this.useCase.execute({ releaseData, designer, developer, genre, mode, name, platform });

    return res.status(201).json({ message: 'Registro criado com sucesso!' });
  }
}

export { RegisterGameController };
