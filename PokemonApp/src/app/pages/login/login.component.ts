import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  user:User;  
  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit() {
    this.user = new User();
    //Creadenciales quemadas para no estar ingresando usuario, mientras se habilita el recordar usuario
    // this.user.email = 'andres7guillen@gmail.com';
    // this.user.PassWord = 'Y0k0gawA-1992'
  }

  onLogin(formulario:NgForm){
    if(formulario.valid){
      Swal.fire({title:'info',text:'espere por favor...',
                allowOutsideClick:false
    });
      Swal.showLoading();
      
      this.auth.Login(this.user).subscribe(data => {
        Swal.close();
        console.log(data);
        this.router.navigateByUrl('/home');
      },(error) => {
        Swal.close();
        Swal.fire({title:'Error al autenticar',text:error.error });

        console.log(error.error);
      })
    }
  }

  

}
