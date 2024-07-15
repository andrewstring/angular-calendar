import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DateInfoService, DateInfo } from './services/dateInfo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopbarComponent, SidebarComponent, CalendarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  // State Vars
  currentYear: number;
  currentMonth: string;
  currentMonthNum: number;
  currentNumDays: number;

  syncStateVars = () => {
    this.currentYear = this.dateinfoService.dateInfo.currentYear;
    this.currentMonth = this.dateinfoService.dateInfo.currentMonth;
    this.currentMonthNum = this.dateinfoService.dateInfo.currentMonthNum;
    this.currentNumDays = this.dateinfoService.dateInfo.currentNumDays;
  }

  handleForwardClick = () => {
    this.dateinfoService.monthForwardHandler()
    this.syncStateVars()
  }
  handleBackwardClick = () => {
    this.dateinfoService.monthBackwardHandler()
    this.syncStateVars()
  }

  constructor(private dateinfoService: DateInfoService) {
    this.dateinfoService = dateinfoService
    this.currentYear = this.dateinfoService.dateInfo.currentYear
    this.currentMonth = this.dateinfoService.dateInfo.currentMonth
    this.currentMonthNum = this.dateinfoService.dateInfo.currentMonthNum
    this.currentNumDays = this.dateinfoService.dateInfo.currentNumDays
  }

  title = 'calendar';
}
