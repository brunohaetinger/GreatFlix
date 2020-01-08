import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.sass']
})
export class UserAvatarComponent implements OnInit {
  @Input() picture;
  constructor() { }

  ngOnInit() {
  }

}
