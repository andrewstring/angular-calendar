import { Component, Input } from '@angular/core';
import { DayComponent } from './day/day.component';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [DayComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  @Input() month: string;
  @Input() year: number;

  constructor() {
    this.month = "";
    this.year = 0;
  }
} 