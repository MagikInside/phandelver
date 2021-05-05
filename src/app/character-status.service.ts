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
    },
    {
      dices: [] as string[],
      condition: 'ok',
      difficulty: 0,
      stop: false,
      roll: 0,
      heals: 0,
    },
    {
      dices: [] as string[],
      condition: 'ok',
      difficulty: 0,
      stop: false,
      roll: 0,
      heals: 0,
    },
    {
      dices: [] as string[],
      condition: 'ok',
      difficulty: 0,
      stop: false,
      roll: 0,
      heals: 0,
    },
    {
      dices: [] as string[],
      condition: 'ok',
      difficulty: 0,
      stop: false,
      roll: 0,
      heals: 0,
    },
    {
      dices: [] as string[],
      condition: 'ok',
      difficulty: 0,
      stop: false,
      roll: 0,
      heals: 0,
    },
    {
      dices: [] as string[],
      condition: 'ok',
      difficulty: 0,
      stop: false,
      roll: 0,
      heals: 0,
    },
    {
      dices: [] as string[],
      condition: 'ok',
      difficulty: 0,
      stop: false,
      roll: 0,
      heals: 0,
    },
    {
      dices: [] as string[],
      condition: 'ok',
      difficulty: 0,
      stop: false,
      roll: 0,
      heals: 0,
    },
    {
      dices: [] as string[],
      condition: 'ok',
      difficulty: 0,
      stop: false,
      roll: 0,
      heals: 0,
    }
  ];

  get characterStatus$(): Observable<CharacterStatus[]> {
    return of(this.#characterStatus);
  }

}
