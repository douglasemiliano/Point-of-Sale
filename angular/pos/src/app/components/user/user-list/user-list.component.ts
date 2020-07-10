import { AppConstants } from './../../../app-constants';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { UserEditComponent } from '../user-edit/user-edit.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any;
  url: string;
  fields: string [];
  constructor(private userService: UserService, private router: Router, public dialog: MatDialog) {
    this.userService.getUsers().subscribe(result => {
      this.users = result;
    });
    this.url = AppConstants.baseUsers;
    this.fields = ['name'];
  }

  ngOnInit(): void { }

  public goToHome(): void {
    this.router.navigate(['']);
  }

  createUser() {
    this.userService.setId(undefined);
    this.dialog.open(UserEditComponent);
  }
  editUser(id: number) {
    this.userService.setId(id);
    this.dialog.open(UserEditComponent);
  }
  filterList(resultSearch) {
    this.users = resultSearch;
  }
}
