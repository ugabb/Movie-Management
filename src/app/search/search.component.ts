import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  constructor(private movies: MoviesService) {}

  @Input() title: string = '';
  @Input() poster: string = '';
  movie: any;
  key = '9c3c62d8';

  searchMovie() {
    setTimeout(() => {
      this.movies.getMovie(this.title).subscribe((res) => {
        this.movie = res;
        console.log(this.movie);
      });
    }, 100);
  }
}
