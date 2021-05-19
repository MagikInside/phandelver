import {Injectable} from '@angular/core';
import {GameState} from './models/game-state.model';
import {Character} from './models/character.model';
import {Condition} from './models/condition.enum';

@Injectable({
  providedIn: 'root'
})
export class CharOptionsService {

  constructor() { }

  reset(game: GameState): GameState {
    const resetCharacters = game.characters.map(this.resetCharacter);
    const resetRound = {id: game.round.id, number: 0, lastSuccs: 0, lastFails: 0, totalSuccs: 0, totalFails: 0};
    return {...game, characters: resetCharacters, round: resetRound};
  }

  private resetCharacter(character: Character): Character {
    return {...character, dices: [] as string[], condition: Condition.Ok , difficulty: 0, stop: false, roll: 0, heals: 0};
  }

  healChar(character: Character): Character {
    const healedCharWithOldCondition = {...character, heals: character.heals + 1};
    const newCondition = this.calculateCondition(healedCharWithOldCondition);
    return {...healedCharWithOldCondition, condition: newCondition};
  }

  stopSwitch(character: Character): Character {
    return {...character, stop: !character.stop};
  }

  changeDifficulty(character: Character, difficulty: number): Character {
    return {...character, difficulty};
  }

  calculateCondition(character: Character): Condition {
    const wounds = character.dices.filter((dice) => dice === '❌').length
      + character.dices.filter((dice) => dice === '💀').length * 2 - character.heals;
    if (wounds > character.defense) { return Condition.Dead; }
    else if (wounds === character.defense) { return Condition.Critical; }
    else if (wounds >= Math.floor(character.defense / 2)) { return Condition.Injured; }
    else { return Condition.Ok; }
  }

}
