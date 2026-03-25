import { Component } from '@angular/core';
import { MissionsService } from '../../services/missions.service';
import { Mission } from '../../interfaces/mission.interface';
import { RouterLink } from "@angular/router";
import { StatusStyleDirective } from '../../directives/status-style.directive';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-missions',
  imports: [RouterLink, HighlightDirective, StatusStyleDirective],
  templateUrl: './missions.component.html',
  styleUrl: './missions.component.css',
})
export class MissionsComponent {
  missions: Mission[] = [];

  constructor(private missionService: MissionsService) {
    this.missions = this.missionService.getAllMissions();
  }

}
