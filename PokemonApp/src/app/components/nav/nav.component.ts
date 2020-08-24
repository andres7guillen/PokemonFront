import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: []
})
export class NavComponent implements OnInit {
  isLogged:boolean = true;
  constructor(private auth:AuthService,
    private router:Router) { }


  ngOnInit() {
    this.isLogged = this.auth.isAuthenticated();
  }

  logOut(){    
    this.auth.LogOut();
    this.auth.userToken = '';
    this.router.navigateByUrl('/login');
  }

}
