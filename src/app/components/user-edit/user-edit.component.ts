import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import {User} from '../../models/User';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  userId: string;
  userEditForm: FormGroup;
  user: User;
  isReadOnly = true;
  constructor(
    public  usersService: UsersService,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.userEditForm = new FormGroup({
      name: new FormControl(''),
      username: new FormControl(''),
      email: new FormControl(''),
      street: new FormControl(''),
      suite: new FormControl('')
    });
    // Get user id
    this.userId = this.activatedRoute.snapshot.params['id'];
    // Get user data
    this.usersService.getUser(this.userId).subscribe((response: User ) => {
      this.user = response;

      this.userEditForm = new FormGroup({
        name: new FormControl(this.user.name, [Validators.required]),
        username: new FormControl(this.user.username, [Validators.required]),
        email: new FormControl(this.user.email, [Validators.email, Validators.required]),
        street: new FormControl(this.user.address.street, [Validators.required]),
        suite: new FormControl(this.user.address.suite, [Validators.required])
      });
    });
  }

  onEdit() {
    if (this.userEditForm.invalid) {return;}
    this.isReadOnly = false;
    const updUser = Object.assign({}, this.user);
    this.usersService.updateUser(updUser).subscribe((response: User) => {
      // show message
      // redirect main
      this.router.navigate(['/']);
    }, err => {
      console.log(err);
      // show error message
    });
  }
}
