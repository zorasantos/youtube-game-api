import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { IGameDTO } from '../../infra/entities/Game';
import { RegisterGameUseCase } from './RegisterGameUseCase';

class RegisterGameController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { releaseData, designer, developer, genre, mode, name, platform }: IGameDTO = req.body;
    const registerUseCase = container.resolve(RegisterGameUseCase);

    await registerUseCase.execute({ releaseData, designer, developer, genre, mode, name, platform });

    return res.status(201).json({ message: 'Registro criado com sucesso!' });
  }
}

export { RegisterGameController };
