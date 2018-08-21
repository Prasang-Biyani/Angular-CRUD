import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { IUser } from '../model/user.model';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {


  users: IUser[];
  constructor(private _router: Router, private userService: UserService) { }

  ngOnInit() {

    this.userService.getUsers()
    .subscribe(data => {
      this.users = data;
    });
  }

  deleteUser(user: IUser): void {
    this.userService.deleteUser(user.id)
    .subscribe(data => {
      this.users = this.users.filter( u => u !== user);
    });
  }

  editUser(user: IUser): void {
    localStorage.removeItem('editUserId');
    localStorage.setItem('editUserId', user.id.toString());
    this._router.navigate(['edit']);
  }

  addUser(): void {
    this._router.navigate(['add']);
  }
}
