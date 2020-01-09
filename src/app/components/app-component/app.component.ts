import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { EventEmitterService } from 'src/app/services/event-emitter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  isLoggedIn: boolean;
  constructor(private userService: UserService) { 
    this.checkIsLoggedIn();
    EventEmitterService.get('changeUser').subscribe(()=>{
      this.checkIsLoggedIn();
    });
  }  
  
  checkIsLoggedIn(){
    this.isLoggedIn = this.userService.getCurrentUser() ? true : false;
  }
}
