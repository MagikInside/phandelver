import {Injectable} from '@angular/core';
import {GameState} from './models/game-state.model';

@Injectable({
  providedIn: 'root'
})

export class RollService {

  constructor() { }

  roll(gameState: GameState): GameState {
    const newRoundNumber = gameState.round.number + 1;

    const newCharacterStatus = gameState.characterStatus.map((status) => {
      if (status.condition !== 'dead' && !status.stop) {
        const character = gameState.characters.find(char => char.id = status.charId);
        const diceRoll = (this.rolld6() + this.rolld6() + this.rolld6());
        status.roll = diceRoll;
        if (character) {
          const margin = character.attack - (diceRoll + status.difficulty);
          const result = this.getResult(margin, diceRoll);
          return {...status, dices: [...status.dices, result] };
        }
      }
      return status;
    });
    const [succs, fails] = newCharacterStatus.reduce((acc, curr) => {
      const numSuccsAndFails = this.getNumOfSuccsAndFails(curr.dices[curr.dices.length - 1]);
      return [acc[0] + numSuccsAndFails[0], acc[1] + numSuccsAndFails[1]];
    }, [0, 0]);
    const newRound = {number: newRoundNumber, lastSuccs: succs, lastFails: fails,
      totalSuccs: gameState.round.totalSuccs + succs, totalFails: gameState.round.totalFails + fails};
    return {...gameState, characterStatus: newCharacterStatus, round: newRound};
  }

  rolld6(): number {
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
  getNumOfSuccsAndFails(result: string): [number, number] {
    switch (result) {
      case '➖': return [0, 0];
      case '💥': return [2, 0];
      case '💀': return [0, 2];
      case '✅': return [1, 0];
      case '❌': return [0, 1];
      default: return [0, 0];
    }
  }


}
