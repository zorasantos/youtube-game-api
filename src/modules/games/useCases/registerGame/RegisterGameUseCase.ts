import { inject, injectable } from 'tsyringe';

import { IGameDTO } from '../../infra/entities/Game';
import { IGameRepository } from '../../infra/repositories/IGameRepository';

@injectable()
class RegisterGameUseCase {
  constructor(
    @inject('GameRepository')
    private gameRepository: IGameRepository
  ) {}

  async execute({ releaseData, designer, developer, genre, mode, name, platform }: IGameDTO): Promise<void> {
    await this.gameRepository.register({ releaseData, designer, developer, genre, mode, name, platform });
  }
}

export { RegisterGameUseCase };
