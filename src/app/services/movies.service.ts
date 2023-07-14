import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  key = '9c3c62d8';
  constructor(private http: HttpClient) {}

  getMovie(title: string) {
    const url = `https://www.omdbapi.com/?apikey=${this.key}&t=${title}`;
    return this.http.get(url);
  }
}
