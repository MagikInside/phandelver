import {Injectable} from '@angular/core';
import {GameState} from './models/game-state.model';
import {Character} from './models/character.model';

@Injectable({
  providedIn: 'root'
})

export class RollService {

  constructor() { }

  roll(gameState: GameState): GameState {
    const newCharacters = gameState.characters.map(this.addRoundResultToCharacter);
    const [roundSuccs, roundFails] = this.getRoundSucssAndFails(newCharacters);
    const round = {number: gameState.round.number + 1, lastSuccs: roundSuccs, lastFails: roundFails,
      totalSuccs: gameState.round.totalSuccs + roundSuccs, totalFails: gameState.round.totalFails + roundFails};
    return {...gameState, characters: newCharacters, round};
  }

  private getRoundSucssAndFails(characters: Character[]): [number, number] {
    return characters.reduce((acc, character) => {
      const [succs, fails] = this.getLastRoundSuccsAndFails(character);
      return [acc[0] + succs, acc[1] + fails];
    }, [0, 0]);
  }

// TODO: update character condition
  addRoundResultToCharacter = (character: Character): Character => {
    if (this.isAbleToDice(character)) {
      character.roll = this.rollDice();
      const margin = character.attack - (character.roll + character.difficulty);
      const result = this.getResult(margin, character.roll);
      return {...character, dices: [...character.dices, result] };
    }
    return character;
  }

  rollDice(): number {
    return this.rollD6() + this.rollD6() + this.rollD6();
  }

  rollD6(): number {
    return Math.floor(Math.random() * 6) + 1;
  }

  getResult(margin: number, diceRoll: number): string {
    if (margin === 0) { return '➖'; }
    else if (this.isCritical(margin, diceRoll)) { return '💥'; }
    else if (this.isFailure(margin, diceRoll)) { return '💀'; }
    else if (this.isSuccess(margin)) { return '✅'; }
    else if (this.isFail(margin)) { return '❌'; }
    else { throw new Error('not valid diceRoll margin');  }
  }

  isCritical(margin: number, diceRoll: number): boolean {
    return (margin > 7 || diceRoll <= 4);
  }
  isFailure(margin: number, diceRoll: number): boolean {
    return (margin < -7 || diceRoll >= 17);
  }
  isSuccess(margin: number): boolean {
    return (margin > 0);
  }
  isFail(margin: number): boolean {
    return (margin < 0);
  }
  getLastRoundSuccsAndFails(character: Character): [number, number] {
    const lastResult = character.dices[character.dices.length - 1];
    switch (lastResult) {
      case '➖': return [0, 0];
      case '💥': return [2, 0];
      case '💀': return [0, 2];
      case '✅': return [1, 0];
      case '❌': return [0, 1];
      default: return [0, 0];
    }
  }

  isAbleToDice(character: Character): boolean {
    return (character.condition !== 'dead' && !character.stop);
  }


}
