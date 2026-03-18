import { Component, inject } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { combineLatest, concatMap, from, map, reduce, shareReplay, tap } from 'rxjs';
import { AsyncPipe, UpperCasePipe, DecimalPipe } from '@angular/common';



@Component({
  selector: 'app-movie-list',
  imports: [AsyncPipe, UpperCasePipe, DecimalPipe],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent {
  private movieService = inject(MovieService);

  sharedMovies$ = this.movieService.getMovies().pipe(
    map(movies => movies
      .map(m => ({
        ...m,
        title: '🎬 ' + m.title,
        rating: Math.floor(Math.random() * 10) + 1 // Генерираме случаен рейтинг за теста
      }))),
    shareReplay(1)
  );

  averageRating$ = this.sharedMovies$.pipe(
    concatMap(movies => from(movies)),
    reduce((acc, curr: any) => ({
      sum: acc.sum + curr.rating,
      count: acc.count + 1
    }), { sum: 0, count: 0 }),
    map(res => res.count > 0 ? res.sum / res.count : 0),
    shareReplay(1)// Изчисляваме средния рейтинг
  );

  movies$ = combineLatest([this.sharedMovies$, this.averageRating$]).pipe(
    map(([movies, avg]) => {
      const min = Math.floor(avg);
      const max = Math.ceil(avg);

      console.log(`Филтрираме около средно: ${avg.toFixed(2)} (диапазон ${min}-${max})`);

      return movies.filter((m: any) => m.rating >= min && m.rating <= max);
    }));
}
