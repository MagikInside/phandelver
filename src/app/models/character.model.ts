export interface Character {
  id: string;
  name: string;
  url: string;
  attack: number;
  defense: number;
  dices: string[];
  condition: string;
  difficulty: number;
  stop: boolean;
  roll: number;
  heals: number;
}
