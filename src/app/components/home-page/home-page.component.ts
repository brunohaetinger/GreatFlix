import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {
  first: {};  
  constructor(moviesService: MoviesService) { 
    this.first = moviesService.getFirstNMovies(3);
  }

  ngOnInit() {
  }

}
