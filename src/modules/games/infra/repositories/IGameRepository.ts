import { IGameDTO } from '../entities/Game';

interface IGameRepository {
  register(game: IGameDTO): Promise<void>;
}

export { IGameRepository };
