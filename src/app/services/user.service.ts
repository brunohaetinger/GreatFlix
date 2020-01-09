import { Injectable } from '@angular/core';
import { DaoService } from './dao.service';
import User from '../types/User';
import { EventEmitterService } from './event-emitter.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private dao: DaoService) { }

  logIn(username, password){
    let users: User[] = this.dao.getDatabase().users;
    let user: User = users.find( (u) => u.username == username);
    if(!user){
      return "Invalid username";
    }else{
      if(user.password != password){
        return "Invalid password";
      }else{
        EventEmitterService.get('changeUser').emit();
        localStorage.setItem('currentUser', JSON.stringify(user));
        return true;
      }
    }
  }

  logOut(){
    localStorage.removeItem('currentUser');
    EventEmitterService.get('changeUser').emit();
  }

  getCurrentUser(): User{
    return JSON.parse(localStorage.getItem('currentUser'));
  }
}
