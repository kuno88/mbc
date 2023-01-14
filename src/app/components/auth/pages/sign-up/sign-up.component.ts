import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../services/auth-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  registrarUsuario: FormGroup;
  loading=false;
  Usuario: any;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.registrarUsuario = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]],
      repeatPassword: ['', [Validators.required,Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
  
  }

  registrar() {
    const email = this.registrarUsuario.value.email;
    const password = this.registrarUsuario.value.password;
    const repeatPassword = this.registrarUsuario.value.repeatPassword;

    if(password != repeatPassword){
      this.toastr.error('Las contraseñas ingresadas deben ser las mismas','Error');
      return;
    }
    this.loading=true;
    this.auth.register(email, password)
      .then((user) => {
        this.Usuario = user;
        this.toastr.success('Usuario registrado con exito','Usuario registrado')
        this.router.navigate(['/home/index']);
        console.log('USUARIO', this.Usuario);
      })
      .catch((error) => {
        console.log(error);
        this.loading=false;
        this.toastr.error(this.auth.firebaseError(error.code), 'Error');
      });
  }

  
}
