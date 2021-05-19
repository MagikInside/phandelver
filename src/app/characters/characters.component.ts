import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Character} from '../models/character.model';
import {Difficulty} from '../models/difficulty.enum';
import {Condition} from '../models/condition.enum';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass']
})
export class CharactersComponent implements OnInit {

  @Input() characters: Character[] | null = [];
  @Output() healEvent = new EventEmitter<string>();
  @Output() stopSwitchEvent = new EventEmitter<string>();
  @Output() changeDiffEvent = new EventEmitter<[string, number]>();
  Difficulty = Difficulty;
  Condition = Condition;

  ngOnInit(): void {
  }

  heal(charId: string): void {
    this.healEvent.emit(charId);
  }
  stopSwitch(charId: string): void {
    this.stopSwitchEvent.emit(charId);
  }

  changeDifficulty(charId: string, difficulty: number): void {
    this.changeDiffEvent.emit([charId, difficulty]);
  }
}
