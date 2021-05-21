import {Component, Input, OnInit} from '@angular/core';
import {Character} from '../models/character.model';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.sass']
})
export class SelectionComponent implements OnInit {

  @Input() character: Character | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
