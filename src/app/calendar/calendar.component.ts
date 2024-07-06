import { Component } from '@angular/core';


interface DateInfo {
  date: number,
  day: string,
  year: number,
  month: string,
  numDays: number,
}

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  
  dateInfo: DateInfo;

  date = new Date()

  monthInfo = [
    {
      month: "January",
      numDays: 31
    },
    {
      month: "February",
      numDays: 28
    },
    {
      month: "March",
      numDays: 31
    },
    {
      month: "April",
      numDays: 30
    },
    {
      month: "May",
      numDays: 31
    },
    {
      month: "June",
      numDays: 30
    },
    {
      month: "July",
      numDays: 31
    },
    {
      month: "August",
      numDays: 31
    },
    {
      month: "September",
      numDays: 30
    },
    {
      month: "October",
      numDays: 31
    },
    {
      month: "November",
      numDays: 30
    },
    {
      month: "December",
      numDays: 31
    },
  ]

  weekInfo = ["Sunday", "Monday", "Tuesday",
    "Wednesday", "Thursday", "Friday", "Saturday"]

  getDateInfo = () => {
    return {
      date: this.date.getDate(),
      day: this.weekInfo[this.date.getDay()],
      ...this.monthInfo[this.date.getMonth()],
      year: this.date.getFullYear()
    }
  }

  constructor() {
    this.dateInfo = this.getDateInfo()
  }
}
