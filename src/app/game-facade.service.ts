import {Injectable} from '@angular/core';
import {GameState} from './models/game-state.model';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {CharactersService} from './characters.service';
import {Character} from './models/character.model';
import {Round} from './models/round.model';
import {RollService} from './roll.service';
import {CharOptionsService} from './char-options.service';
import {RoundService} from './round.service';

@Injectable({
  providedIn: 'root'
})
export class GameFacadeService {

  characters$: Observable<Character[]>;
  round$: Observable<Round>;

  #state: GameState = {
    characters: [],
    round: {id: '', number: 0, lastSuccs: 0, lastFails: 0, totalSuccs: 0, totalFails: 0}
  };

  constructor(private charactersService: CharactersService, private rollService: RollService,
              private charOptionsService: CharOptionsService, private roundService: RoundService) {
    this.characters$ = charactersService.character$.pipe(
      tap(characters => this.#state = {...this.#state, characters}),
      tap(console.log)
    );
    this.round$ = roundService.round$.pipe(
      tap(round => this.#state = {...this.#state, round}),
      tap(console.log)
    );
  }

  roll(): void {
    const newState = this.rollService.roll(this.#state);
    this.charactersService.characters = newState.characters;
    this.roundService.round = newState.round;
  }


  reset(): void {
    const newState = this.charOptionsService.reset(this.#state);
    this.charactersService.characters = newState.characters;
    this.roundService.round = newState.round;
  }

  heal(charId: string): void {
    const character = this.#state.characters.find(char => char.id === charId);
    if (character) {
      const newChar = this.charOptionsService.healChar(character);
      this.charactersService.updateCharacter(newChar);
    }
  }

  stopSwitch(charId: string): void {
    const character = this.#state.characters.find(char => char.id === charId);
    if (character) {
      const newChar = this.charOptionsService.stopSwitch(character);
      this.charactersService.updateCharacter(newChar);
    }
  }

  changeDifficulty(charId: string, difficulty: number): void {
    const character = this.#state.characters.find(char => char.id === charId);
    if (character) {
      const newChar = this.charOptionsService.changeDifficulty(character, difficulty);
      this.charactersService.updateCharacter(newChar);
    }
  }

}
