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
  @Input() year: number;

  labelVisibility = ["","",""];
  thing = "visible"


  constructor() {
    this.month = "";
    this.year = 0;
    this.labelVisibility = ["visible", "", ""]
  }

  handleMouse = (number: number, enter: boolean)  => {
    this.labelVisibility[number] = enter ? "visible" : "";
    if (enter) {
      this.thing = "visible";
    }
    else {
      this.thing = "";
    }
    console.log(enter ? "ENTER" : "LEAVE")
    console.log(number)
  }

}
