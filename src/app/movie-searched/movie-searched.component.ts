import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-movie-searched',
  templateUrl: './movie-searched.component.html',
  styleUrls: ['./movie-searched.component.scss'],
})
export class MovieSearchedComponent {
  @Input() moviePoster: string = '';
  @Input() movieTitle: string = '';
}
