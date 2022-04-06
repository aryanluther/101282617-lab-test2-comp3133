import { Component } from '@angular/core';
import { OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.scss'],
})
export class MissiondetailsComponent implements OnInit {
  @Input('item') mission: any;
  seeDetails = false;

  constructor() {}

  ngOnInit(): void {}

  openclose() {
    this.seeDetails = !this.seeDetails;
  }
}
