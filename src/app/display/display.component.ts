import {Component, Input, OnInit} from '@angular/core';
import {Character} from '../models/character.model';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.sass']
})
export class DisplayComponent implements OnInit {

  @Input() characters: Character[] | null = [];

  constructor() { }

  ngOnInit(): void {
  }

}
