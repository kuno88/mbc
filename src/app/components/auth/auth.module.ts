import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';


//compoenetes
import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
@NgModule({
  declarations: [SignInComponent, SignUpComponent, RecoverPasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    
  ],
})

export class AuthModule {}
