import { Injectable } from '@angular/core';
import Movie from '../types/Movie';
import User from '../types/User.js';
import { DaoService } from './dao.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private dao: DaoService, private userService: UserService) {
   }

  getMovieByID(imdbID: string): Movie{
    return this.dao.getDatabase().movies.find((m)=> m.imdbID == imdbID);
  }

  getFirstNMovies(n: number): Movie[]{
    return this.dao.getDatabase().movies.slice(0, n);
  }

  getPopularMovies(): Movie[]{
    return this.getFirstNMovies(5);
  }

  getMostWatchedMovies(): Movie[]{
    return this.dao.getDatabase().movies.slice(5, 10);
  }

  async getPoster(imdbID): Promise<string>{
    let res = await fetch(`http://omdbapi.com/?i=${imdbID}&apikey=d2bba218`);
    let movieData = await res.json();
    return movieData.Poster;
  }

  getCountries(): string[]{
    return ["Brazil", "United States", "Australia"]
  }

  getTopGenres(): string[]{
    let genresViewsSorted = this.dao.getDatabase().genresViews.sort((a, b) => b.viewCounter - a.viewCounter);
    return genresViewsSorted.map(gv => gv.genre);
  }

  getCurrentUserLastWatchedMovies(): Movie[]{
    let username = this.userService.getCurrentUser().username
    let lastMoviesIDs = this.dao.getDatabase().userViews.reduce((lastViews, userView) => {
      if(userView.username == username){  
        lastViews.add(userView.movieID)
      }
      return lastViews;
    }, new Set())

    return [...lastMoviesIDs].map( id => {
      return this.dao.getDatabase().movies.find( m => m.imdbID == id)
    });
  }

  getTopUsers(): User[]{
    return this.dao.getDatabase().users.slice(0, 3);
  }

  getCurrentUser(): User{
    return this.dao.getDatabase().users[0];
  }
}
