import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import Movie from 'src/app/types/Movie';

@Component({
  selector: 'main-selection',
  templateUrl: './main-selection.component.html',
  styleUrls: ['./main-selection.component.sass']
})
export class MainSelectionComponent implements OnInit {
  popularMovies: Movie[];
  mostWatchedMovies: Movie[];
  constructor(moviesService: MoviesService) {
    this.popularMovies = moviesService.getPopularMovies();  
    this.mostWatchedMovies = moviesService.getMostWatchedMovies();  
  }

  ngOnInit() {
  }

}
