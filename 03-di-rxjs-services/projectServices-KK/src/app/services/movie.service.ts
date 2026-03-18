import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface Movie {
  id: number;
  title: string;
  rating: number;
}

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private http = inject(HttpClient);

  getMovies(): Observable<Movie[]> {
    // Използваме този URL за сигурен тест
    return this.http.get<Movie[]>('https://jsonplaceholder.typicode.com/todos');
  }
}

