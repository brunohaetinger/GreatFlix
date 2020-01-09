import { Injectable } from '@angular/core';
import Movie from '../types/Movie';
import User from '../types/User.js';
import { DaoService } from './dao.service';
import { UserService } from './user.service';
import * as _ from 'lodash';

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
    let movies =  _.sampleSize(this.dao.getDatabase().movies, 5);
    return movies;
  }

  getMostWatchedMovies(): Movie[]{
    const db = this.dao.getDatabase();
    return _.take(_.orderBy(db.movies, 'viewCounter', 'desc'), 5);
  }

  async getPoster(imdbID): Promise<string>{
    let res = await fetch(`http://omdbapi.com/?i=${imdbID}&apikey=b41747cd`);
    let movieData = await res.json();
    return movieData.Poster;
  }

  getCountries(): string[]{
    return ["Brazil", "United States", "Australia"]
  }
  
  getMostWatchedMoviesInCountry(country: string): Movie[]{
    const db = this.dao.getDatabase();
    const viewsByCountry = _.orderBy(_.filter(db.viewsByCountry, { country: country}), 'viewCounter', 'desc');
    return _.take(_.intersectionWith(db.movies, viewsByCountry, (m, v) => m.imdbID == v.movieID), 5);
  }

  getTopGenres(): string[]{
    let genresViewsSorted = _.orderBy(this.dao.getDatabase().genresViews, 'viewCounter', 'desc');
    return genresViewsSorted.map(gv => gv.genre);
  }

  getCurrentUserLastWatchedMovies(): Movie[]{
    let username = this.userService.getCurrentUser().username;
    let lastUserViews = _.reverse(this.dao.getDatabase().userViews);
    let lastMoviesIDs = _.transform(lastUserViews, (lastViews, userView) => {
      if(lastViews.size >= 5){
        return false;
      }
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
    let db = this.dao.getDatabase();
    let users = db.users;
    let topUsers = _.orderBy(db.topUserCounters, 'viewCounter', 'desc');
    return topUsers.map(topUser => users.find(u => u.username == topUser.username));
  }
}
