import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MinicalendarComponent } from '../minicalendar/minicalendar.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MinicalendarComponent, MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() month: string;
  @Input() year: number;

  constructor() {
    this.month = "";
    this.year = 0;
  }

}
