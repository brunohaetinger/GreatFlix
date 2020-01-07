import { Injectable } from '@angular/core';
import moviesJSON from '../../assets/movies.json';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movies: any
  constructor() {
    this.movies = moviesJSON;
   }

  getFirstNMovies(n: number){
    return this.movies.slice(0, n);
  }

  getPopularMovies(): []{
    return this.getFirstNMovies(5);
  }

  getMostWatchedMovies(): []{
    return this.movies.slice(5, 10);
  }
}
