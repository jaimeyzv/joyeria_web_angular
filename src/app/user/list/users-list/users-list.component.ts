import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../../model/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})

export class UsersListComponent implements OnInit {
  users!: Array<IUser>;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((response) => {
      this.users = <Array<IUser>>response;
    });
  }
}
