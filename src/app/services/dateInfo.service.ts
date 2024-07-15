import { Injectable } from '@angular/core';

export interface DateInfo {
  date: number,
  day: string,
  year: number,
  month: string,
  monthNum: number,
  numDays: number,

  // currentDate: number,
  // currentDay: string,
  currentYear: number,
  currentMonth: string,
  currentMonthNum: number,
  currentNumDays: number
}

@Injectable({
  providedIn: 'root'
})
export class DateInfoService {

  dateInfo: DateInfo;
  
  static monthInfo = [
    {
      month: "January",
      currentMonth: "January",
      numDays: 31,
      currentNumDays: 31
    },
    {
      month: "February",
      currentMonth: "February",
      numDays: 28,
      currentNumDays: 28
    },
    {
      month: "March",
      currentMonth: "March",
      numDays: 31,
      currentNumDays: 31
    },
    {
      month: "April",
      currentMonth: "April",
      numDays: 30,
      currentNumDays: 30
    },
    {
      month: "May",
      currentMonth: "May",
      numDays: 31,
      currentNumDays: 31
    },
    {
      month: "June",
      currentMonth: "June",
      numDays: 30,
      currentNumDays: 30
    },
    {
      month: "July",
      currentMonth: "July",
      numDays: 31,
      currentNumDays: 31
    },
    {
      month: "August",
      currentMonth: "August",
      numDays: 31,
      currentNumDays: 31
    },
    {
      month: "September",
      currentMonth: "September",
      numDays: 30,
      currentNumDays: 30
    },
    {
      month: "October",
      currentMonth: "October",
      numDays: 31,
      currentNumDays: 31
    },
    {
      month: "November",
      currentMonth: "November",
      numDays: 30,
      currentNumDays: 30
    },
    {
      month: "December",
      currentMonth: "December",
      numDays: 31,
      currentNumDays: 31
    }
  ]

  weekInfo = ["Sunday", "Monday", "Tuesday",
    "Wednesday", "Thursday", "Friday", "Saturday"]

  getDateInfo = () => {
    let date = new Date()
    return {
      date: date.getDate(),
      day: this.weekInfo[date.getDay()],
      ...DateInfoService.monthInfo[date.getMonth()],
      monthNum: date.getMonth(),
      year: date.getFullYear(),
      // currentDate: date.getDate(),
      // currentDay: this.weekInfo[date.getDay()],
      currentYear: date.getFullYear(),
      currentMonthNum: date.getMonth()
    }
  }

  syncFromCurrentMonthNum = () => {
    this.dateInfo.currentMonth = DateInfoService.monthInfo[this.dateInfo.currentMonthNum].currentMonth
    this.dateInfo.currentNumDays = DateInfoService.monthInfo[this.dateInfo.currentMonthNum].numDays
  }
  monthForwardHandler= () => {
    if(this.dateInfo.currentMonthNum > 10) {
      this.dateInfo.currentMonthNum = 0
      this.dateInfo.currentYear++;
    } else {
      this.dateInfo.currentMonthNum++;
    }
    this.syncFromCurrentMonthNum()
  }
  monthBackwardHandler = () => {
    if (this.dateInfo.currentMonthNum < 1) {
      this.dateInfo.currentMonthNum = 11
      this.dateInfo.currentYear--;
    } else {
      this.dateInfo.currentMonthNum--;
    }
    this.syncFromCurrentMonthNum()
  }

  constructor() {
    this.dateInfo = this.getDateInfo()
  }
}
