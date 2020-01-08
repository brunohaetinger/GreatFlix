import { Injectable } from '@angular/core';
import Movie from '../types/Movie';
import User from '../types/User.js';
import { DaoService } from './dao.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private dao: DaoService) {
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
    return ["Action", "Sci-Fi", "Adventure", "Fantasy", "Comedy"]
  }

  getCurrentUserLastWatchedMovies(): Movie[]{
    let userID = this.getCurrentUser().username
    let lastMoviesIDs = this.dao.getDatabase().userViews.reduce((lastViews, userView) => {
      if(userView.userID == userID){  
        lastViews.push(userView.movieID)
      }
      return lastViews;
    }, [])

    return lastMoviesIDs.map( id => {
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
