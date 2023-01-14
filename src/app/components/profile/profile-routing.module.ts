import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProfileComponent } from './pages/create-profile/create-profile.component';
import { DisplayProfileComponent } from './pages/display-profile/display-profile.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'display' },
      { path: 'create', component: CreateProfileComponent},
      { path: 'display', component: DisplayProfileComponent},
      { path: '**', redirectTo: 'display' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
