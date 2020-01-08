import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'genre-card',
  templateUrl: './genre-card.component.html',
  styleUrls: ['./genre-card.component.sass']
})
export class GenreCardComponent implements OnInit {
  @Input() genre: string
  constructor() { }

  ngOnInit() {
  }

}
