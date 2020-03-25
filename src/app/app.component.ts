import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  counterActive: number = 0;
  counterInactive: number = 0;

  constructor(private userService: UserService) { }

  ngOnInit(){
    this.counterActive = this.userService.counterActive;
    this.counterInactive = this.userService.counterInactive;
  }

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
}
