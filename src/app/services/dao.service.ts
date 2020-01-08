import { Injectable } from "@angular/core";
import Database from "../types/Database";
import moviesJSON from '../../assets/movies.json';
import usersJSON from '../../assets/users.json';
import Movie from '../types/Movie';
import User from '../types/User';

const DB_KEY = "db";

@Injectable({
  providedIn: "root"
})
export class DaoService {
  constructor() {
    console.log('DAO SERVICE');
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
    localDB.movies = moviesJSON as Movie[];
    localDB.users = usersJSON as User[];
    return localDB;
  }
}
