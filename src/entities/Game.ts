import { v4 as uuid } from 'uuid';

export interface IGameDTO {
  name: string;
  designer: string;
  genre: string;
  platform: string;
  developer: string;
  releaseData: string;
  mode: string;
}

class Game {
  id?: string;

  name!: string;

  designer!: string;

  genre!: string;

  platform!: string;

  developer!: string;

  releaseData!: string;

  mode!: string;

  createdAt!: Date;

  updatedAt!: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Game };
