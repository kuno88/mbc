import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../services/auth-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

 ingresoUsuario : FormGroup;
 loading=false;
 Usuario: any;

  constructor( 
    private fb: FormBuilder,
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router) {
      this.ingresoUsuario = this.fb.group({
        email: ['', [Validators.required,Validators.email]],
        password: ['', [Validators.required,Validators.minLength(6)]],
      
      });
   }

  ngOnInit(): void {
  }

  ingresar(){
    const email = this.ingresoUsuario.value.email;
    const password = this.ingresoUsuario.value.password;

    this.loading=true;
    this.auth.login(email,password).then((user)=>{
      this.Usuario = user;
      this.toastr.success('Bienvenido: '+ email,'Usuario')
      this.router.navigate(['/home/index']);
      console.log('USUARIO', this.Usuario);
    }).catch((error)=>{
      console.log(error);
      this.loading=false;
      this.toastr.error(this.auth.firebaseError(error.code), 'Error');
    })
  }


}
