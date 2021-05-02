import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.sass']
})
export class InfoComponent implements OnInit {
  @Input() round = 0;
  @Input() lastSuccs = 0;
  @Input() lastFails = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
