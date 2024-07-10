import { Injectable } from '@angular/core';

export interface DateInfo {
  date: number,
  day: string,
  year: number,
  month: string,
  numDays: number,
}

@Injectable({
  providedIn: 'root'
})
export class DateInfoService {

  dateInfo: DateInfo;
  
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
    let date = new Date()
    return {
      date: date.getDate(),
      day: this.weekInfo[date.getDay()],
      ...this.monthInfo[date.getMonth()],
      year: date.getFullYear()
    }
  }

  constructor() {
    this.dateInfo = this.getDateInfo()
  }
}
