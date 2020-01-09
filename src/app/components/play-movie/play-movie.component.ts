import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from "src/app/services/movies.service";
import Movie from "src/app/types/Movie";
import { DaoService } from "src/app/services/dao.service";
import { UserService } from "src/app/services/user.service";
import User from "src/app/types/User";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: "play-movie",
  templateUrl: "./play-movie.component.html",
  styleUrls: ["./play-movie.component.sass"]
})
export class PlayMovieComponent implements OnInit {
  movie: Movie;
  poster: string;
  constructor(
    route: ActivatedRoute,
    moviesService: MoviesService,
    private dao: DaoService,
    private userService: UserService,
    private _snackBar: MatSnackBar
  ) {
    const id: string = route.snapshot.params["id"];
    this.movie = moviesService.getMovieByID(id);
    moviesService.getPoster(this.movie.imdbID).then(poster => {
      this.poster = poster;
    });
  }

  ngOnInit() {}

  playMovieClick() {
    const user: User = this.userService.getCurrentUser();
    this.dao.insertUserView(user.username, this.movie.imdbID);

    //set auxiliary Metrics
    this.dao.incrementGenreWatchedCounter(this.movie.genres);
    this.dao.incrementViewByCountryCounter(this.movie.imdbID, user.country);
    this.dao.incrementTopUserCounter(user.username);
    this.dao.incremenMovieView(this.movie.imdbID);

    this.openSnackBar("Thanks for watching!", "");
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: 'top'
    });
  }
}
