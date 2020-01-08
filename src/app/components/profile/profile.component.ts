import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { UserService } from 'src/app/services/user.service';
import Movie from 'src/app/types/Movie';
import User from 'src/app/types/User';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
  user: User
  lastWatched: Movie[]
  constructor(moviesService: MoviesService, userService: UserService) {
    this.user = userService.getCurrentUser();
    this.lastWatched = moviesService.getCurrentUserLastWatchedMovies();
  }

  ngOnInit() {
  }

}
