import { Component, OnInit, Input } from "@angular/core";
import { MoviesService } from "src/app/services/movies.service";

@Component({
  selector: "movie-card",
  templateUrl: "./movie-card.component.html",
  styleUrls: ["./movie-card.component.sass"]
})
export class MovieCardComponent implements OnInit {
  @Input() movie;
  pic;
  constructor(public moviesService: MoviesService) {
    
  }

  ngOnInit() {
    if (!this.pic && this.movie) {
      this.moviesService.getPoster(this.movie.imdbID).then(poster => {
        this.pic = poster;
      });
    }
  }
}
