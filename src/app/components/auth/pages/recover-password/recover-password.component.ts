import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'app/services/auth-service.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {
  recuperarPassword : FormGroup;
  loading=false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) { 
    this.recuperarPassword = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
    });
  }

  ngOnInit(): void {
  }

  recuperar(){
    const email = this.recuperarPassword.value.email;
    this.loading=true;
    this.auth.recoverPassword(email).then(()=>{
      this.toastr.info('Correo enviado a :'+ email,'Recuperar contraseña')
      this.router.navigate(['/auth/login']);
    }).catch((error)=>{
      this.toastr.error(this.auth.firebaseError(error.code), 'Error');
      this.loading=false;
    })

  }

}
