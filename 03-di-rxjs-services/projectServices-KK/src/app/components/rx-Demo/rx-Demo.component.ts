import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-rx-demo',
  standalone: true,
  // Ето го HTML-а:
  template: `
<div style="border: 2px solid #5f33e1; padding: 20px; border-radius: 8px; text-align: center; max-width: 500px; margin: 20px auto; font-family: sans-serif;">
  
  <h2 style="color: #3f51b5; margin-top: 0;">Периодично опресняване на данни</h2>
  <p style="font-weight: bold; color: #3f51b5; margin-bottom: 20px;">Timed Data Poller</p>
  
  <h2 style="font-size: 1.3rem; line-height: 1.4; margin-bottom: 20px;">
    Обновяване на поток от данни <br> 
    през 3 секунди и <br> 
    спиране след 5 обновления
  </h2>
  
  <p style="font-size: 1.2rem; margin-bottom: 20px;">
    Данни от потока: <strong>{{ dataSignal() }}</strong>
  </p>
  
  <button (click)="restart()" style="background-color: #f0f0f0; border: 1px solid #999; padding: 5px 15px; border-radius: 4px; cursor: pointer; font-size: 0.9rem;">
    Стартирай наново
  </button>
  
  <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid #ccc; text-align: center;">
    <h3 style="color: #333; margin-bottom: 15px;">Използвани технологии</h3>
    
    <div style="display: flex; justify-content: center;">
      <ul style="text-align: left; list-style-position: outside; padding-left: 20px; margin: 0; display: inline-block;">
        <li style="margin-bottom: 10px;">
          <strong>RxJS</strong><br>
          <small>new Observable, .pipe(take(5)), .subscribe()</small>
        </li>
        <li style="margin-bottom: 10px;">
          <strong>Signal</strong><br>
          <small>dataSignal = signal(...) и this.dataSignal.set()</small>
        </li>
        <li>
          <strong>Lifecycle Hooks</strong><br>
          <small>ngOnInit, ngOnDestroy</small>
        </li>
      </ul>
    </div>
  </div>
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