import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { UserRolModel } from '../../models/user.rol.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-rol',
  templateUrl: './user-rol.component.html',
  styles: []
})
export class UserRolComponent implements OnInit {
  userRol: UserRolModel;

  constructor(private service:AuthService,
              private router:Router) { }

  ngOnInit() {
    this.userRol = new UserRolModel();
  }

  associate(){
    this.service.associateUserRol(this.userRol).subscribe((data) => {      
      Swal.fire({title:'Info',
          text:'The user: ' + this.userRol.UserEmail + ' was associated with : ' + this.userRol.Rol,
          allowOutsideClick: false});
          this.router.navigateByUrl('home');

    },(error)=> {
      Swal.fire({title:'ERROR',
      text:'Error asociando al usuario: ' + this.userRol.UserEmail + ' con el rol: ' + this.userRol.Rol + '',
      allowOutsideClick: false});
      this.router.navigateByUrl('empleados');
    })
  }

  remove(){
    this.service.removerUserRol(this.userRol).subscribe((data) => {
      
        Swal.fire({title:'Info',
          text:'User removed: ' + this.userRol.UserEmail + ' with : ' + this.userRol.Rol,
          allowOutsideClick: false});
          this.router.navigateByUrl('home');
        
    },(error)=> {
      Swal.fire({title:'ERROR',
      text:'Error removing: ' + this.userRol.UserEmail + ' with : ' + this.userRol.Rol + '',
      allowOutsideClick: false});
      this.router.navigateByUrl('home');
    })
  }
  

}
