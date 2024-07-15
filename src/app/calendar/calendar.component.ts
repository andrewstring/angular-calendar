import { Component, Input } from '@angular/core';
import { DayComponent } from './day/day.component';
import { DateInfoService } from '../services/dateInfo.service';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [DayComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  @Input() month: string;
  @Input() monthNum: number;
  @Input() year: number;

  constructor() {
    this.month = "";
    this.monthNum = 0;
    this.year = 0;
  }

} 