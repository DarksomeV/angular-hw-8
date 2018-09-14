import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  brand = 'Services';
   isAuth: boolean = false;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.auth.userState.subscribe((isAuth: string) => {
      this.isAuth = Boolean(isAuth);
    });
  }

  onLogout() {
    this.auth.logout().subscribe((key: boolean) => {
      if (!key) this.isAuth = Boolean(key);
    });
  }

}
