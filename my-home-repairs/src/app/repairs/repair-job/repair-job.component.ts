import { Component, OnInit, Input } from '@angular/core';
import { Repair } from '../repair.model';

@Component({
  selector: 'app-repair-job',
  templateUrl: './repair-job.component.html',
  styleUrls: ['./repair-job.component.css']
})
export class RepairJobComponent implements OnInit {
  @Input()
  repair: Repair;

  constructor() { }

  ngOnInit() {
    if (this.repair === undefined) {
      throw Error('No repair is defined')
    }
  }

}
