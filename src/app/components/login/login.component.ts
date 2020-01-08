import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";

  constructor(private userService: UserService, private router: Router) {
    if(userService.getCurrentUser()){
      router.navigate(['/main-selection']);
    }
  }

  ngOnInit() {
  }

  executeLogIn() {
    const logInRes = this.userService.logIn(this.username, this.password);
    if(logInRes == true){
      this.router.navigate(['/main-selection']);
    }else{
      console.log(logInRes);
    }
  }
}
