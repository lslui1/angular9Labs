import { Component, OnInit} from '@angular/core';

import { Repair } from './repairs/repair.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-home-repairs';
  repairs: Repair[];

  ngOnInit(): void {
    this.repairs = [
      {
        id: 1,
        name: 'car sway bar bushings',
        priority: 'Low',
        status: 'Incomplete'
      }
    ]
  }
}
