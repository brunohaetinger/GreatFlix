import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable()
export class CanActivateGuard implements CanActivate {

  constructor(private userService: UserService) {}

  canActivate() {
    return this.userService.getCurrentUser() ? true : false;
  }
}