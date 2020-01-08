import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'most-watched-genres',
  templateUrl: './most-watched-genres.component.html',
  styleUrls: ['./most-watched-genres.component.sass']
})
export class MostWatchedGenresComponent implements OnInit {
  topGenres: string[]
  constructor(moviesService: MoviesService) { 
    this.topGenres = moviesService.getTopGenres();
  }

  ngOnInit() {
  }

}
