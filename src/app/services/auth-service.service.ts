import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, onAuthStateChanged } from 'firebase/auth';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  async register(email: string, pass: string) {
    return await this.afAuth.createUserWithEmailAndPassword(email, pass);
  }

  async login(email: string, pass: string) {
    return await this.afAuth.signInWithEmailAndPassword(email, pass);
  }

  firebaseError(code: string) {
    switch (code) {
      case 'auth/email-already-in-use':
        return 'El usuario ya existe';
      case 'auth/weak-password':
        return 'Contraseña es debil';
      case 'auth/invalid-email':
        return 'El correo es invalido';
      case 'auth/user-not-found':
        return 'El usuario no existe';
      case 'auth/wrong-password':
        return "Contraseña incorrecta";
      default:
        return 'Error desconocidos';
    }
  }

  recoverPassword(email : string){
    return this.afAuth.sendPasswordResetEmail(email);
  }

  logout() {
    console.log('ingreso al logout');
    return this.afAuth.signOut();
  }
  // async isAuth() {
  //   let usuario;
  //   const auth = getAuth();
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       usuario = user;
  //       //const uid = user.uid;
  //       console.log("DESDE EL NAV:", usuario);
        
  //     }
  //   });
  //   return usuario;
  // }
  // async isAuth(){
  //   //let perfil;
  //  // this.afAuth.authState.subscribe();
  //  // return await this.afAuth.onAuthStateChanged((user)=>{
  //     //perfil=user;
  //     //console.log("Usuario desde el servicio: ",user?.uid)
  //  // });
  //  this.afAuth.currentUser;
  // }
}
