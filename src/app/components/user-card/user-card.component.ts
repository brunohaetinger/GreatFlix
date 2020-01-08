import { Component, OnInit, Input } from '@angular/core';
import User from 'src/app/types/User';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.sass']
})
export class UserCardComponent implements OnInit {
  @Input() user: User
  constructor() {
    
   }

  ngOnInit() {
  }

}
