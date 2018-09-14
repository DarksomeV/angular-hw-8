import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.auth.isAuth) this.router.navigate(['/']);
    this.signUpForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      name: new FormControl('', [Validators.minLength(3), Validators.maxLength(16), Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      password: new FormControl('', [Validators.minLength(8), Validators.required])
    });
  }

  onSubmit() {
    if (this.signUpForm.invalid) {return; }
    this.auth.signup(this.signUpForm.value.email, this.signUpForm.value.name, this.signUpForm.value.password).subscribe((res: boolean) => {
      if (res) this.router.navigate(['/']);
    }, ({error, status}) => {
      console.log(error, status);
    });
  }

}
