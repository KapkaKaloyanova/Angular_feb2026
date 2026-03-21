import { Component } from '@angular/core';
import { MissionsService } from '../../services/missions.service';
import { Mission } from '../../interfaces/mission.interface';

@Component({
  selector: 'app-missions',
  imports: [],
  templateUrl: './missions.component.html',
  styleUrl: './missions.component.css',
})
export class MissionsComponent {
  missions: Mission[] = [];

  constructor(private missionService: MissionsService) {
    this.missions = this.missionService.getAllMissions();
  }

}
