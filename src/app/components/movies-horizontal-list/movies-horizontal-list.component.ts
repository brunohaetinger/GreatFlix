import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'movies-horizontal-list',
  templateUrl: './movies-horizontal-list.component.html',
  styleUrls: ['./movies-horizontal-list.component.sass']
})
export class MoviesHorizontalListComponent implements OnInit {
  @Input() title: string;
  @Input() movies;
  constructor() { }

  ngOnInit() {
  }

}
