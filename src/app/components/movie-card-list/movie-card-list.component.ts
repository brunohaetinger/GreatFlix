import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'movie-card-list',
  templateUrl: './movie-card-list.component.html',
  styleUrls: ['./movie-card-list.component.sass']
})
export class MovieCardListComponent implements OnInit {
  @Input() movies: [];
  constructor() { }

  ngOnInit() {
  }

}
