import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './app-toolbar.component.html',
  styleUrls: ['./app-toolbar.component.sass']
})
export class AppToolbarComponent implements OnInit {
  title = 'SnowFlix';
  constructor(router: Router) { 
    router.events.subscribe((val) => {
      if(val instanceof ActivationEnd) {
        this.title = val.snapshot.data.title;
      }
  });
  }

  ngOnInit() {
  }

}
