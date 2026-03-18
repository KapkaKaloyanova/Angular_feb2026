import { Component, inject, OnDestroy } from '@angular/core';
import { Subscription, take } from 'rxjs';
import { EventTimerService } from '../../services/event-timer.service';

@Component({
  selector: 'app-event-timer',
  imports: [],
  templateUrl: './event-timer.component.html',
  styleUrl: './event-timer.component.css',
})
export class EventTimerComponent implements OnDestroy {
  private timerService = inject(EventTimerService);

  displayValue = 'Спряно';
  updateInterval = 1000;
  private subscription: Subscription | null = null;

  start() {
    this.stop(); // ако вече има активен поток, спираме го преди да стартираме нов

    this.subscription = this.timerService
      .getTimerStream(this.updateInterval)
      .pipe(
        take(10) // Примерно: взимаме само първите 10 стойности
      )
      .subscribe({
        next: (val) => {
          this.displayValue = (val);
        },
        complete: () => {
          this.displayValue = 'Автоматично спряно след 10 обновления';
          this.subscription = null; // почистваме референцията, защото вече няма активен поток
        }, error: (err) => {
          this.displayValue = 'Грешка: ' + err;
          this.subscription = null; // почистваме референцията, защото вече няма активен поток  
        }
      });
  }

  stop() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
      this.displayValue = 'Спряно';
    }
  }

  changeInterval(newMs: number) {
    this.updateInterval = newMs; // ако потока е активен, спираме го и го стартираме отново с новия интервал
    if (this.subscription) {
      this.start();
    }
  }
  ngOnDestroy() {
    this.stop();
  }
}
