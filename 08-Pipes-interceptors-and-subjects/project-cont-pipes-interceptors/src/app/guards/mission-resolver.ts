import { ResolveFn } from '@angular/router';
import { Mission } from '../interfaces/mission.interface';
import { inject } from '@angular/core';
import { MissionsService } from '../services/missions.service';

export const missionResolver: ResolveFn<Mission | undefined> = (route) => {
  const missionsService = inject(MissionsService);

  const idParam = route.paramMap.get('id');

  const missionId = idParam ? Number(idParam) : 0;

  return missionsService.getMissionById(missionId);
};
