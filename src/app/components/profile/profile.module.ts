import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/shared.module";
import { ProfileRoutingModule } from './profile-routing.module';
import { CreateProfileComponent } from './pages/create-profile/create-profile.component';
import { DisplayProfileComponent } from './pages/display-profile/display-profile.component';


@NgModule({
  declarations: [
    CreateProfileComponent,
    DisplayProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ]
})
export class ProfileModule { }
