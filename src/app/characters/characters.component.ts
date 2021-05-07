import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Character} from '../models/character.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass']
})
export class CharactersComponent implements OnInit {

  @Input() characters: Character[] | null = [];
  @Output() healEvent = new EventEmitter<string>();
  @Output() stopSwitchEvent = new EventEmitter<string>();

  ngOnInit(): void {
  }

  heal(charId: string): void {
    this.healEvent.emit(charId);
  }
  stopSwitch(charId: string): void {
    this.stopSwitchEvent.emit(charId);
  }

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
