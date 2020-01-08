import { Component, OnInit } from '@angular/core';
import User from 'src/app/types/User';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'top-user-list',
  templateUrl: './top-user-list.component.html',
  styleUrls: ['./top-user-list.component.sass']
})
export class TopUserListComponent implements OnInit {
  topUsers: User[]
  
  constructor(moviesService: MoviesService) {
    this.topUsers = moviesService.getTopUsers();
   }

  ngOnInit() {
  }

}
