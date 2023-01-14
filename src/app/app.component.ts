import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from './services/auth-service.service';
//import { getAuth, onAuthStateChanged } from "firebase/auth";
//import { stringLength } from '@firebase/util';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MIS CANARIOS';
  public isLogged: boolean = false;
  User : any;
  name: any;
  constructor(private auth: AuthService, public afAuth: AngularFireAuth) {}

  ngOnInit(){
  this.afAuth.authState.subscribe(user=>{
    if(user){      
      this.User = user.email;
      this.name = this.User.split("@").shift();
      //console.log(this.User.split("@").shift());
      sessionStorage.setItem('email',this.User);
    }
 })
  }
salir(){
  this.auth.logout();
  sessionStorage.removeItem('email');
}


}
