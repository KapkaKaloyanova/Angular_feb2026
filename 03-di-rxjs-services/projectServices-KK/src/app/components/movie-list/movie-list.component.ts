import { Component, inject } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { map, tap } from 'rxjs';
import { AsyncPipe, UpperCasePipe } from '@angular/common';
import { Movie } from '../../services/movie.service';



@Component({
  selector: 'app-movie-list',
  imports: [AsyncPipe, UpperCasePipe],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent {
  private movieService = inject(MovieService);

  movies$ = this.movieService.getMovies().pipe(
  tap(data => console.log('Raw data:', data)),
  map(movies => movies
    .map(m => ({
      ...m,
      title: '🎬 ' + m.title,
      rating: Math.floor(Math.random() * 10) + 1 // Генерираме случаен рейтинг за теста
    }))
    .filter(m => m.rating > 8) // Филтрираме тези с рейтинг над 5
  )
);

}
