import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';
import { Mission } from 'src/app/models/mission';
import { Router } from '@angular/router';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.scss'],
})
export class MissionlistComponent implements OnInit {
  missionData: Mission[] = [];

  constructor(
    private router: Router,
    private spacexapiService: SpacexapiService
  ) {
    this.spacexapiService.getMissionData().subscribe((res) => {
      this.missionData = res;
    });
  }

  ngOnInit(): void {}
  check() {
    console.log(this.missionData);
  }

  nav() {
    this.router.navigate(['missiondetails']);
  }
}
