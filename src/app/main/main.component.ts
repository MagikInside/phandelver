import {Component, OnInit} from '@angular/core';
import {Character} from '../models/character.model';
import {GameFacadeService} from '../game-facade.service';
import {Observable} from 'rxjs';
import {Round} from '../models/round.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  characters$: Observable<Character[]>;
  round$: Observable<Round>;

  characters: Character[] = [];

  constructor(private game: GameFacadeService) {
    this.characters$ = this.game.characters$;
    this.round$ = this.game.round$;
  }
  ngOnInit(): void {}

  roll(): void {
    this.game.roll();
  }

  reset(): void {
    this.game.reset();
  }
  heal(charId: string): void {
    this.game.heal(charId);
  }
}
