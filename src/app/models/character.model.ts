export interface Character {
  name: string;
  url: string;
  dices: string[];
  attack: number;
  defense: number;
  status: string;
  difficulty: number;
  stop: boolean;
  roll: number;
  heals: number;
}
