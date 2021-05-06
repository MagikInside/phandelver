import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Character} from './models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor() { }

  #characters = [
    {
      id: 1,
      name: 'Linene',
      url: 'https://i27.photobucket.com/albums/c182/MaGiK_InSiDe/Tokens/Linene%20Graywind_zpsnlrbtzhu.png',
      attack: 12,
      defense: 4,
    },
    {
      id: 2,
      name: 'Ben',
      url: 'https://i27.photobucket.com/albums/c182/MaGiK_InSiDe/Tokens/Ben%20Abbot_zpsfzjjtufn.png',
      attack: 10,
      defense: 5,
    },
    {
      id: 3,
      name: 'Aziz',
      url: 'https://i27.photobucket.com/albums/c182/MaGiK_InSiDe/Tokens/Aziz_zpsxepl0lls.png',
      attack: 11,
      defense: 3,
    },
    {
      id: 4,
      name: 'Sheras',
      url: 'https://i27.photobucket.com/albums/c182/MaGiK_InSiDe/Tokens/Sheras_zpsyfgdz1qm.png',
      attack: 9,
      defense: 2,
    },
    {
      id: 5,
      name: 'Bhayax',
      url: 'https://i27.photobucket.com/albums/c182/MaGiK_InSiDe/Tokens/Bhayax_zps0b7p56r7.png',
      attack: 12,
      defense: 3,
    },
    {
      id: 6,
      name: 'Hjaldur',
      url: 'https://i27.photobucket.com/albums/c182/MaGiK_InSiDe/Tokens/Hjaldur_zps2ogh1ft6.png',
      attack: 13,
      defense: 5,
    },
    {
      id: 7,
      name: 'Daran',
      url: 'https://i27.photobucket.com/albums/c182/MaGiK_InSiDe/Tokens/Daran%20Eldermath_zpsf54haqay.png',
      attack: 15,
      defense: 6,
    },
    {
      id: 8,
      name: 'Yurauk',
      url: 'https://i27.photobucket.com/albums/c182/MaGiK_InSiDe/Tokens/Yurauk_zpsgjmmmvdj.png',
      attack: 10,
      defense: 2,
    },
    {
      id: 9,
      name: 'Reman',
      url: 'https://i27.photobucket.com/albums/c182/MaGiK_InSiDe/Tokens/Reman_zpsmwj1vtgd.png',
      attack: 9,
      defense: 2,
    },
    {
      id: 10,
      name: 'Bror',
      url: 'https://i27.photobucket.com/albums/c182/MaGiK_InSiDe/Tokens/Bror_zpsfk5ejb3r.png',
      attack: 9,
      defense: 4,
    }
  ];

  get character$(): Observable<Character[]> {
    return of(this.#characters);
  }

}
