import {Injectable} from '@angular/core';
import {GameState} from './models/game-state.model';
import {BehaviorSubject} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs/operators';
import {CharactersService} from './characters.service';
import {CharacterStatusService} from './character-status.service';
import {Character} from './models/character.model';
import {CharacterStatus} from './models/character-status.model';
import {Round} from './models/round.model';
import {RollService} from './roll.service';

@Injectable({
  providedIn: 'root'
})
export class GameFacadeService {

  #state: GameState = {
    characters: [] as Character[],
    characterStatus: [] as CharacterStatus[],
    round: {number: 0, lastSuccs: 0, lastFails: 0, totalSuccs: 0, totalFails: 0} as Round
  };
  private store = new BehaviorSubject<GameState>(this.#state);
  private state$ = this.store.asObservable();

  characters$ = this.state$.pipe(map(state => state.characters), distinctUntilChanged());
  characterStatus$ = this.state$.pipe(map(state => state.characterStatus), distinctUntilChanged());
  round$ = this.state$.pipe(map(state => state.round), distinctUntilChanged());

  constructor(private charactersService: CharactersService, private characterStatusService: CharacterStatusService,
              private rollService: RollService) {
    this.charactersService.character$.subscribe(characters => {
      this.store.next(this.#state = {...this.#state, characters});
    });
    this.characterStatusService.characterStatus$.subscribe(characterStatus => {
      this.store.next(this.#state = {...this.#state, characterStatus});
    });
  }

  roll(): void {
    const newState = this.rollService.roll(this.#state);
    this.store.next(this.#state = {...this.#state, characterStatus: newState.characterStatus, round: newState.round});
  }


  reset(): void {
  }

  heal(character: Character): void {
  }

  stopSwitch(character: Character): void {
  }

}
