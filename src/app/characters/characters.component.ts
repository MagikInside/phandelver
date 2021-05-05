import {Component, Input, OnInit} from '@angular/core';
import {Character} from '../models/character.model';
import {CharacterStatus} from '../models/character-status.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass']
})
export class CharactersComponent implements OnInit {

  @Input() characters: Character[] | null = [];
  @Input() characterStatus: CharacterStatus[] | null = [];

  ngOnInit(): void {
  }

  heal(character: Character): void {}
  stopSwitch(character: Character): void {}

  /*
  heal(character: Character): void {
    character.heals++;
    this.calculateState(character);
  }
  stopSwitch(character: Character): void {
    character.stop = !character.stop;
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


   */
}
