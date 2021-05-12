import {Component, Input, OnInit} from '@angular/core';
import {Round} from '../models/round.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.sass']
})
export class InfoComponent implements OnInit {
  @Input() round: Round | null = {id: '', number: 0, lastSuccs: 0, lastFails: 0, totalSuccs: 0, totalFails: 0} ;

  constructor() { }

  ngOnInit(): void {
  }

}
