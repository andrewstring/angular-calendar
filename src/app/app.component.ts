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
  dateinfo: DateInfo;

  constructor(private dateinfoService: DateInfoService) {
    this.dateinfo = dateinfoService.dateInfo
  }

  title = 'calendar';
}
