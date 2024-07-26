import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {
  @Input() month: string;
  // @Input() monthNum: number;
  @Input() year: number;

  prevMonth = () => {
    // this.monthNum++;
  }
  nextMonth = () => {
    // this.monthNum--;
  }

  constructor() {
    this.month = "";
    this.year = 0;
  }
}
