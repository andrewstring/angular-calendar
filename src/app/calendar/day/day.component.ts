import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-day',
  standalone: true,
  imports: [],
  templateUrl: './day.component.html',
  styleUrl: './day.component.scss'
})
export class DayComponent {

  @Input() events?: any[];
  @Input() day?: string;
  @Input() number: number;

  constructor() {
    this.events = [];
    this.number = 0;
  }
}
