import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from 'src/app/services/movies.service';
import Movie from 'src/app/types/Movie';

@Component({
  selector: "play-movie",
  templateUrl: "./play-movie.component.html",
  styleUrls: ["./play-movie.component.sass"]
})
export class PlayMovieComponent implements OnInit {
  movie: Movie;
  constructor(route: ActivatedRoute, moviesService: MoviesService) {
    const id: string = route.snapshot.params["id"];
    this.movie = moviesService.getMovieByID(id);
  }

  ngOnInit() {}
}
