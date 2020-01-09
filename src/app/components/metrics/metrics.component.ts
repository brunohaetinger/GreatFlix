import { Component, OnInit } from '@angular/core';
import Movie from 'src/app/types/Movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.sass']
})
export class MetricsComponent implements OnInit {
  mostWatched: Movie[]
  countries: string[]
  constructor(private moviesService: MoviesService) { 
    this.mostWatched = moviesService.getMostWatchedMovies();
    this.countries = moviesService.getCountries();
  }

  ngOnInit() {
  }

  countryChanged(event){
    this.mostWatched = this.moviesService.getMostWatchedMoviesInCountry(event.value);
  }

}
