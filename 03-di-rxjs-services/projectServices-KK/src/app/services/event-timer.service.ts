import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventTimerService {
    getTimerStream(ms: number): Observable<string> {
    return new Observable<string>(subscriber => {
      // изпращаме веднага първата стойност
      subscriber.next(`Стартирано в ${new Date().toLocaleTimeString()}`);
      // Тук започва "Етап 3: Execution"
      const id = setInterval(() => {
        const time = new Date().toLocaleTimeString();
        subscriber.next(`Обновено в ${time}`);
      }, ms);

      // "Етап 4: Destruction" - казваме на Observable как да спре
      return () => {
        clearInterval(id);
        console.log('Интервалът e изчистен!');
      };
    });
  }
}
