import {Injectable} from '@angular/core';
import {GameState} from './models/game-state.model';
import {BehaviorSubject} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs/operators';
import {CharactersService} from './characters.service';
import {Character} from './models/character.model';
import {Round} from './models/round.model';
import {RollService} from './roll.service';
import {CharOptionsService} from './char-options.service';

@Injectable({
  providedIn: 'root'
})
export class GameFacadeService {

  #state: GameState = {
    characters: [] as Character[],
    round: {number: 0, lastSuccs: 0, lastFails: 0, totalSuccs: 0, totalFails: 0} as Round
  };
  private store = new BehaviorSubject<GameState>(this.#state);
  private state$ = this.store.asObservable();

  characters$ = this.state$.pipe(map(state => state.characters), distinctUntilChanged());
  round$ = this.state$.pipe(map(state => state.round), distinctUntilChanged());

  constructor(private charactersService: CharactersService, private rollService: RollService,
              private charOptionsService: CharOptionsService) {
    this.charactersService.character$.subscribe(characters => {
      this.store.next(this.#state = {...this.#state, characters});
    });
  }

  roll(): void {
    const newState = this.rollService.roll(this.#state);
    this.store.next(this.#state = {...this.#state, characters: newState.characters, round: newState.round});
    //    this.charactersService.characters = newState.characters;
  }


  reset(): void {
    const newState = this.charOptionsService.reset(this.#state);
    this.store.next(this.#state = {...this.#state, characters: newState.characters, round: newState.round});
  }

  heal(charId: string): void {
    const newState = this.charOptionsService.healChar(charId, this.#state);
    this.store.next(this.#state = {...this.#state, characters: newState.characters});
  }

  stopSwitch(charId: string): void {
    const newState = this.charOptionsService.stopSwitch(charId, this.#state);
    this.store.next(this.#state = {...this.#state, characters: newState.characters});
  }

  changeDifficulty(charId: string, difficulty: number): void {
    const newState = this.charOptionsService.changeDifficulty(charId, difficulty, this.#state);
    this.store.next(this.#state = {...this.#state, characters: newState.characters});
  }

}
