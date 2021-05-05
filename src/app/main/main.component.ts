import {Component, OnInit} from '@angular/core';
import {Character} from '../models/character.model';
import {GameFacadeService} from '../game-facade.service';
import {Observable} from 'rxjs';
import {CharacterStatus} from '../models/character-status.model';
import {Round} from '../models/round.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  characters$: Observable<Character[]>;
  characterStatus$: Observable<CharacterStatus[]>;
  round$: Observable<Round>;

  characters: Character[] = [];

  constructor(private game: GameFacadeService) {
    this.characters$ = this.game.characters$;
    this.characterStatus$ = this.game.characterStatus$;
    this.round$ = this.game.round$;
  }
  ngOnInit(): void {}

  roll(): void { }

  reset(): void {}
  /*
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
  }*/
}
