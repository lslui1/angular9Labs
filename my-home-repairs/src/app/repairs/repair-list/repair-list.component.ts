import { Component, OnInit } from '@angular/core';
import { Repair } from '../repair.model';

@Component({
  selector: 'app-repair-list',
  templateUrl: './repair-list.component.html',
  styleUrls: ['./repair-list.component.css']
})
export class RepairListComponent implements OnInit {
  repairs: Repair[];

  constructor() { }

  ngOnInit() {
    this.repairs = [
      {
        id: 1,
        name: 'car sway bar bushings',
        priority: 'Low',
        status: 'Incomplete'
      }
    ];
  }

}
