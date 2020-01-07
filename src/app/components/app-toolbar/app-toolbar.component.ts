import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'toolbar',
  templateUrl: './app-toolbar.component.html',
  styleUrls: ['./app-toolbar.component.sass']
})
export class AppToolbarComponent implements OnInit {
  title = 'SnowFlix';
  constructor() { }

  ngOnInit() {
  }

}
