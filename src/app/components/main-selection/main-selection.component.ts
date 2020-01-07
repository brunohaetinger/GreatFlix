import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'main-selection',
  templateUrl: './main-selection.component.html',
  styleUrls: ['./main-selection.component.sass']
})
export class MainSelectionComponent implements OnInit {
  popularMovies: [];
  mostWatchedMovies: [];
  constructor(moviesService: MoviesService) {
    this.popularMovies = moviesService.getPopularMovies();  
    this.mostWatchedMovies = moviesService.getMostWatchedMovies();  
  }

  ngOnInit() {
  }

}
