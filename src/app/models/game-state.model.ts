import {Character} from './character.model';
import {Round} from './round.model';

export interface GameState {
  characters: Character[];
  round: Round;
}
