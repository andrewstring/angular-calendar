import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-minicalendar',
  standalone: true,
  imports: [],
  templateUrl: './minicalendar.component.html',
  styleUrl: './minicalendar.component.scss'
})
export class MinicalendarComponent {
  @Input() month: string;
  @Input() year: number;
  currentMonth: string;
  currentYear: number;

  constructor() {
    this.month = "";
    this.year = 0;
    this.currentMonth = "";
    this.currentYear = 0;
  }

  ngOnInit() {
    this.currentMonth = this.month;
    this.currentYear = this.year;
  }
}
