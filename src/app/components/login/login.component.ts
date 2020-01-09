import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.sass"]
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";

  constructor(
    private userService: UserService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    if (userService.getCurrentUser()) {
      router.navigate(["/main-selection"]);
    }
  }

  ngOnInit() {}

  executeLogIn() {
    const logInRes = this.userService.logIn(this.username, this.password);
    if (logInRes == true) {
      this.router.navigate(["/main-selection"]);
    } else {
      this.openSnackBar(logInRes);
    }
  }

  openSnackBar(message: string, action?: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: "top"
    });
  }
}
