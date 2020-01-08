import Movie from "./Movie";
import User from './User';
import UserView from './UserView';
import ViewsByCountry from './ViewsByCountry';
import TopUserCounter from './TopUserCounter';

type Database = {
    movies: Movie[],
    users: User[],
    userViews: UserView[],
    topUserCounters: TopUserCounter[],
    viewsByCountry: ViewsByCountry[]
}

export default Database;