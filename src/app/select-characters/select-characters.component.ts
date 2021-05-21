import { Component, OnInit } from '@angular/core';
import {GameFacadeService} from '../game-facade.service';
import {Observable} from 'rxjs';
import {Character} from '../models/character.model';

@Component({
  selector: 'app-select-characters',
  templateUrl: './select-characters.component.html',
  styleUrls: ['./select-characters.component.sass']
})
export class SelectCharactersComponent implements OnInit {

  characters$: Observable<Character[]>;

  constructor(private game: GameFacadeService) {
    this.characters$ = game.characters$;
  }

  ngOnInit(): void {
  }

}
