import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {  
  user:User;

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() { 
    this.user = new User();
  }

  onSubmit(form:NgForm){
    if(form.valid){
      Swal.fire({title:'',text:'wait please...',
                allowOutsideClick:false});
      Swal.showLoading();

      this.authService.CreateUser(this.user).subscribe(data => {
        console.log(data);
        Swal.close();
        this.router.navigateByUrl('/home');
      },(error) => {
        Swal.close();
        Swal.fire({title:'Error creating user',text:error.error,
                allowOutsideClick:false});
        console.log(error.error);
      })
    }
    
  }

}
