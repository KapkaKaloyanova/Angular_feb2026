import { Component } from '@angular/core';
import { MissionsService } from '../../services/missions.service';
import { Mission } from '../../interfaces/mission.interface';
import { RouterLink } from "@angular/router";
import { StatusStyleDirective } from '../../directives/status-style.directive';
import { HighlightDirective } from '../../directives/highlight.directive';
import { MissionStatusPipe } from '../../pipes/mission-status-pipe';
import { TimeUntilPipe } from '../../pipes/time-until-pipe';

@Component({
  selector: 'app-missions',
  imports: [RouterLink, HighlightDirective, StatusStyleDirective, MissionStatusPipe, TimeUntilPipe],
  templateUrl: './missions.component.html',
  styleUrl: './missions.component.css',
})
export class MissionsComponent {
  missions: Mission[] = [];
  statusColors: Record<string, string> = {
    'planned': '#155cb8',
    'active': '#127238',
    'completed': '#86868f'
  };

  constructor(private missionService: MissionsService) {
    this.missions = this.missionService.getAllMissions();
  }

}
