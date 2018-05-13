import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private users:Any;
  constructor(private userService:UsersService) { }

  ngOnInit() {
    this.userService.allUsers().subscribe(res => this.users=res.json())
  }

}
