import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',redirectTo: 'home', pathMatch:'full'},
  {path: 'home', loadChildren:()=> import('./components/home/home.module').then(m=> m.HomeModule)},
  {path: 'auth', loadChildren:()=>import('./components/auth/auth.module').then(m=> m.AuthModule)},
  {path: 'canaries', loadChildren:()=>import('./components/canaries/canaries.module').then(m=> m.CanariesModule)},
  {path: 'breeding', loadChildren:()=>import('./components/breeding/breeding.module').then(m=> m.BreedingModule)},
  {path: 'profile', loadChildren:()=>import('./components/profile/profile.module').then(m=> m.ProfileModule)},
  {path: 'nomenclator', loadChildren: () => import('./components/nomenclator/nomenclator.module').then(m => m.NomenclatorModule) },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
