import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import {User} from '../../models/User';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  userId: string;
  user: User;
  isReadOnly = true;
  constructor(
    public  usersService: UsersService,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    //Get user id
    this.userId = this.activatedRoute.snapshot.params['id'];
    //Get user data
    this.usersService.getUser(this.userId).subscribe((response: User ) => {
      this.user = response;
    });
  }

  onEdit() {
    this.isReadOnly = false;
    const updUser = Object.assign({}, this.user);
    this.usersService.updateUser(updUser).subscribe((response: User) => {
      //show message
      //redirect main
      this.router.navigate(['/']);
    }, err => {
      console.log(err);
      //show error message
    });
  }
}
