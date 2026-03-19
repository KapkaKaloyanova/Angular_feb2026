import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-rx-demo',
  standalone: true,
  // Ето го HTML-а:
  template: `
    <div style="border: 2px solid #5f33e1; padding: 20px; border-radius: 8px; text-align: center; max-width: 500px; margin: 20px auto;">
      <h2>Периодично опресняване на данни</h2>
      <h3>Timed Data Poller</h3>
      <h2>Обновяване на поток от данни <br> през 3 секунди и <br> спиране след 5 обновления </h2>
      <p style="font-size: 1.2rem;">
        Данни от потока: <strong>{{ dataSignal() }}</strong>
      </p>
      <button (click)="restart()">Стартирай наново</button>
    </div>
  `,
})
export class RxDemoComponent implements OnInit, OnDestroy {
  dataSignal = signal<string>('Изчакване...'); // Първоначална стойност на екрана
  private sub?: Subscription;

  ngOnInit() {
    const rawStream$ = new Observable<string>(observer => {
      observer.next('Първоначално зареждане');

      const interval = setInterval(() => {
        observer.next('Обновено в ' + new Date().toLocaleTimeString());
      }, 3000);

      return () => clearInterval(interval); // Важно за паметта!
    });

    this.sub = rawStream$
      .pipe(take(5))
      .subscribe({
        next: (value) => {
          this.dataSignal.set(value); // Свързваме RxJS със Signal
        },
        complete: () => {
          this.dataSignal.set('Потокът приключи след 5 обновления');
        },
        error: (err) => {
          this.dataSignal.set('Грешка: ' + err);
        }
      });
  }

  restart() {
    this.sub?.unsubscribe();
    this.ngOnInit();
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}