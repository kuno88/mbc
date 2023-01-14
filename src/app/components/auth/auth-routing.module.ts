import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { canActivate, redirectLoggedInTo } from '@angular/fire/compat/auth-guard';

const redirectToHome = () => redirectLoggedInTo('[home/index]');

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'signIn' },
      { path: 'signIn', component: SignInComponent, ...canActivate(redirectToHome)},
      { path: 'signUp', component: SignUpComponent, ...canActivate(redirectToHome)},
      { path: 'recover', component: RecoverPasswordComponent },
      { path: '**', redirectTo: 'signIn' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
