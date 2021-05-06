import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {CharacterStatus} from './models/character-status.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterStatusService {

  constructor() { }

  #characterStatus = [
    {
      dices: [] as string[],
      condition: 'ok',
      difficulty: 0,
      stop: false,
      roll: 0,
      heals: 0,
      charId: 1
    },
    {
      dices: [] as string[],
      condition: 'ok',
      difficulty: 0,
      stop: false,
      roll: 0,
      heals: 0,
      charId: 2
    },
    {
      dices: [] as string[],
      condition: 'ok',
      difficulty: 0,
      stop: false,
      roll: 0,
      heals: 0,
      charId: 3
    },
    {
      dices: [] as string[],
      condition: 'ok',
      difficulty: 0,
      stop: false,
      roll: 0,
      heals: 0,
      charId: 4
    },
    {
      dices: [] as string[],
      condition: 'ok',
      difficulty: 0,
      stop: false,
      roll: 0,
      heals: 0,
      charId: 5
    },
    {
      dices: [] as string[],
      condition: 'ok',
      difficulty: 0,
      stop: false,
      roll: 0,
      heals: 0,
      charId: 6
    },
    {
      dices: [] as string[],
      condition: 'ok',
      difficulty: 0,
      stop: false,
      roll: 0,
      heals: 0,
      charId: 7
    },
    {
      dices: [] as string[],
      condition: 'ok',
      difficulty: 0,
      stop: false,
      roll: 0,
      heals: 0,
      charId: 8
    },
    {
      dices: [] as string[],
      condition: 'ok',
      difficulty: 0,
      stop: false,
      roll: 0,
      heals: 0,
      charId: 9
    },
    {
      dices: [] as string[],
      condition: 'ok',
      difficulty: 0,
      stop: false,
      roll: 0,
      heals: 0,
      charId: 10
    }
  ];

  get characterStatus$(): Observable<CharacterStatus[]> {
    return of(this.#characterStatus);
  }

}
