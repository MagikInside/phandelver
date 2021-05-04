import { Component, OnInit } from '@angular/core';
import {Character} from '../models/character.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  round = 0;
  lastSuccs = 0;
  lastFails = 0;
  totalSuccs = 0;
  totalFails = 0;


  characters: Character[] = [
    {
      name: 'Linene',
      url: 'https://i27.photobucket.com/albums/c182/MaGiK_InSiDe/Tokens/Linene%20Graywind_zpsnlrbtzhu.png',
      dices: [] as string[],
      attack: 12,
      defense: 4,
      status: 'ok',
      difficulty: 0,
      stop: false,
      roll: 0,
      heals: 0,
    },
    {
      name: 'Ben',
      url: 'https://i27.photobucket.com/albums/c182/MaGiK_InSiDe/Tokens/Ben%20Abbot_zpsfzjjtufn.png',
      dices: [] as string[],
      attack: 10,
      defense: 5,
      status: 'ok',
      difficulty: 0,
      stop: false,
      roll: 0,
      heals: 0,
    },
    {
      name: 'Aziz',
      url: 'https://i27.photobucket.com/albums/c182/MaGiK_InSiDe/Tokens/Aziz_zpsxepl0lls.png',
      dices: [] as string[],
      attack: 11,
      defense: 3,
      status: 'ok',
      difficulty: 0,
      stop: false,
      roll: 0,
      heals: 0,
    },
    {
      name: 'Sheras',
      url: 'https://i27.photobucket.com/albums/c182/MaGiK_InSiDe/Tokens/Sheras_zpsyfgdz1qm.png',
      dices: [] as string[],
      attack: 9,
      defense: 2,
      status: 'ok',
      difficulty: 0,
      stop: false,
      roll: 0,
      heals: 0,
    },
    {
      name: 'Bhayax',
      url: 'https://i27.photobucket.com/albums/c182/MaGiK_InSiDe/Tokens/Bhayax_zps0b7p56r7.png',
      dices: [] as string[],
      attack: 12,
      defense: 3,
      status: 'ok',
      difficulty: 0,
      stop: false,
      roll: 0,
      heals: 0,
    },
    {
      name: 'Hjaldur',
      url: 'https://i27.photobucket.com/albums/c182/MaGiK_InSiDe/Tokens/Hjaldur_zps2ogh1ft6.png',
      dices: [] as string[],
      attack: 13,
      defense: 5,
      status: 'ok',
      difficulty: 0,
      stop: false,
      roll: 0,
      heals: 0,
    },
    {
      name: 'Daran',
      url: 'https://i27.photobucket.com/albums/c182/MaGiK_InSiDe/Tokens/Daran%20Eldermath_zpsf54haqay.png',
      dices: [] as string[],
      attack: 15,
      defense: 6,
      status: 'ok',
      difficulty: 0,
      stop: false,
      roll: 0,
      heals: 0
    },
    {
      name: 'Yurauk',
      url: 'https://i27.photobucket.com/albums/c182/MaGiK_InSiDe/Tokens/Yurauk_zpsgjmmmvdj.png',
      dices: [] as string[],
      attack: 10,
      defense: 2,
      status: 'ok',
      difficulty: 0,
      stop: false,
      roll: 0,
      heals: 0,
    },
    {
      name: 'Reman',
      url: 'https://i27.photobucket.com/albums/c182/MaGiK_InSiDe/Tokens/Reman_zpsmwj1vtgd.png',
      dices: [] as string[],
      attack: 9,
      defense: 2,
      status: 'ok',
      difficulty: 0,
      stop: false,
      roll: 0,
      heals: 0,
    },
    {
      name: 'Bror',
      url: 'https://i27.photobucket.com/albums/c182/MaGiK_InSiDe/Tokens/Bror_zpsfk5ejb3r.png',
      dices: [] as string[],
      attack: 9,
      defense: 4,
      status: 'ok',
      difficulty: 0,
      stop: false,
      roll: 0,
      heals: 0,
    }
  ];

  ngOnInit(): void {}

  roll(): void {
    this.round++;
    this.lastFails = 0;
    this.lastSuccs = 0;

    for (const char of this.characters) {
      if (char.status !== 'dead' && !char.stop) {
        const random = (this.rolld6() + this.rolld6() + this.rolld6());
        char.roll = random;
        const margin = char.attack - (random + char.difficulty);


        if (margin === 0) {
          char.dices.push('➖');
        } else if (margin > 7 || random <= 4) {
          char.dices.push('💥');
          this.lastSuccs += 2;
        } else if (margin < -7 || random >= 17) {
          char.dices.push('💀');
          this.lastFails += 2;
        } else if (margin > 0) {
          char.dices.push('✅');
          this.lastSuccs++;
        } else if (margin < 0){
          char.dices.push('❌');
          this.lastFails++;
        }
        this.calculateState(char);
      }
    }
    this.totalSuccs += this.lastSuccs;
    this.totalFails += this.lastFails;

  }

  rolld6(): number {
    return Math.floor(Math.random() * 6) + 1;
  }

  reset(): void {
    this.round = 0;
    this.lastFails = 0;
    this.lastSuccs = 0;
    this.totalSuccs = 0;
    this.totalFails = 0;
    this.characters.map(c =>
    {
      c.status = 'ok';
      c.dices = [];
      c.heals = 0;
      c.roll = 0;
      c.stop = false;
    });
  }


  calculateState(char: Character): void {
    const wounds = char.dices.filter((dice) => dice === '❌').length + char.dices.filter((dice) => dice === '💀').length * 2 - char.heals;
    if (wounds > char.defense) {
      char.status = 'dead';
    } else if (wounds === char.defense) {
      char.status = 'critical';
    }
    else if (wounds > Math.floor(char.defense / 2)) {
      char.status = 'injured';
    } else {
      char.status = 'ok';
    }
  }
}
