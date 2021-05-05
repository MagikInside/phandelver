import {Character} from './character.model';
import {CharacterStatus} from './character-status.model';
import {Round} from './round.model';

export interface GameState {
  characters: Character[];
  characterStatus: CharacterStatus[];
  round: Round;
}
