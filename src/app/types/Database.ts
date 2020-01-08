import Movie from "./Movie";
import User from './User';
import UserView from './UserView';
import ViewsByCountry from './ViewsByCountry';
import TopUserCounter from './TopUserCounter';
import GenreViews from './GenreViews';

type Database = {
    movies: Movie[],
    users: User[],
    userViews: UserView[],
    topUserCounters: TopUserCounter[],
    viewsByCountry: ViewsByCountry[],
    genresViews: GenreViews[]
}

export default Database;