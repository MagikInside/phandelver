import { Injectable } from '@angular/core';
import {GameState} from './models/game-state.model';
import {BehaviorSubject} from 'rxjs';
import {distinctUntilChanged, map, switchMap} from 'rxjs/operators';
import {CharactersService} from './characters.service';

@Injectable({
  providedIn: 'root'
})
export class GameFacadeService {

  #state: GameState = {
    characters: []
  };
  private store = new BehaviorSubject<GameState>(this.#state);
  private state$ = this.store.asObservable();

  characters$ = this.state$.pipe(map(state => state.characters), distinctUntilChanged());

  constructor(private charactersService: CharactersService) {
    this.characters$.pipe(
      switchMap(() => charactersService.character$)
    ).subscribe(characters => {
      this.store.next(this.#state = {...this.#state, characters});
    });
  }
}
