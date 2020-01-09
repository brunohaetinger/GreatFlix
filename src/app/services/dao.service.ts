import { Injectable } from "@angular/core";
import Database from "../types/Database";
import moviesJSON from '../../assets/movies.json';
import usersJSON from '../../assets/users.json';
import Movie from '../types/Movie';
import User from '../types/User';
import ViewsByCountry from '../types/ViewsByCountry';
import TopUserCounter from '../types/TopUserCounter';
import UserView from '../types/UserView';
import GenreViews from '../types/GenreViews';
import * as _ from 'lodash';

const DB_KEY = "db";

@Injectable({
  providedIn: "root"
})
export class DaoService {
  constructor() {
    this.checkLocalData();
  }

  getDatabase(): Database {
    return JSON.parse(localStorage.getItem(DB_KEY));
  }

  setDatabase(data: Database) {
    return localStorage.setItem(DB_KEY, JSON.stringify(data));
  }

  private checkLocalData() {
    let localDB = this.getDatabase();
    if (!localDB) {
      localDB = this.getInitialLocalData();
      this.setDatabase(localDB);
    }
  }

  getInitialLocalData(): Database {
    let localDB: Database = {} as Database;
    localDB.movies = _.uniqBy(moviesJSON as Movie[], 'imdbID');
    localDB.users = usersJSON as User[];
    localDB.userViews = [] as UserView[];
    localDB.topUserCounters = [] as TopUserCounter[];
    localDB.viewsByCountry = [] as ViewsByCountry[];
    localDB.genresViews = [] as GenreViews[];
    return localDB;
  }

  insertUserView(username: string, movieID: string) {
    let db = this.getDatabase();
    db.userViews.push({
      movieID: movieID,
      username: username,
      timestamp: new Date(),
    } as UserView);
    this.setDatabase(db);
  }

  incrementGenreWatchedCounter(movieGenres: string[]) {
    let db = this.getDatabase();
    movieGenres.forEach(movieGenre => {
      let genreViews = db.genresViews.find(g => g.genre == movieGenre)
      if(!genreViews){
        genreViews = {
          genre: movieGenre,
          viewCounter: 0,
        } as GenreViews;
        db.genresViews.push(genreViews);
      }
      genreViews.viewCounter++;
      this.setDatabase(db);
    })
  }

  incrementViewByCountryCounter(movieID: string, country: string) {
    let db = this.getDatabase();
    let countryViews = db.viewsByCountry.find(vbc => vbc.country == country && vbc.movieID == movieID)
    if(!countryViews){
      countryViews = {
        country: country,
        movieID: movieID,
        viewCounter: 0,
      } as ViewsByCountry;
      db.viewsByCountry.push(countryViews);
    }
    countryViews.viewCounter++;
    this.setDatabase(db);
  }
  
  incrementTopUserCounter(username: string) {
    let db = this.getDatabase();
    let topUserCounter = db.topUserCounters.find(u => u.username == username);
    if(!topUserCounter){
      topUserCounter = {
        username: username,
        viewCounter: 0,
      } as TopUserCounter;
      db.topUserCounters.push(topUserCounter);
    }
    topUserCounter.viewCounter++;
    this.setDatabase(db);
  }

  incremenMovieView(movieID: string) {
    let db = this.getDatabase();
    let movie = db.movies.find(m => m.imdbID == movieID);
    movie.viewCounter = movie.viewCounter + 1 || 1;
    this.setDatabase(db);
  }
}
