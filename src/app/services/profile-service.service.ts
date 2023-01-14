import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { finalize, map, Observable } from 'rxjs';
import { ProfileInterface } from '../models/profile-interface';
import { FileInterface } from '../models/file-interface';

@Injectable({
  providedIn: 'root',
})
export class ProfileServiceService {
  private filePath: any;
  private downloadURl!: Observable<string>;

  constructor(
    private storage: AngularFireStorage,
    private firestore: AngularFirestore
  ) {}

  // async createProfile2(perfil: ProfileInterface, file: FileInterface){
  //   const imgRef = `imagesProfile/${file.name}`;
  //   //const task = this.storage.upload(imgRef, file);
  //   //   this.storage.upload(imgRef,file).then(x=>{
  //   //    console.log("archivo subido:",x)
  //   //  }).catch(error=>{console.log(error)})
  //   this.storage.upload(imgRef,file).snapshotChanges()
  //   .pipe(finalize(() => {imgRef. getDownloadURL().subscribe((urlImage) => {this.downloadURl = urlImage;})}));
      
  //   await this.firestore.collection('registro-canarios').doc(perfil.email).set(perfil);
  //     }
  
   //guardar
    // const file = $event.target.files[0];
    // const imgRef = `imagesProfile/${file.name}`;
    // //this.storage. refFromURL(`imagesProfile/${file.name}`)

    // this.storage.upload(imgRef,file).then(x=>{
    //   console.log("archivo subido:",x)
    // }).catch(error=>{console.log(error)})
    // //console.log(file);

  // createProfile(perfil: ProfileInterface, image: FileInterface): void {
  //   this.uploadImage(perfil, image);
  // }

   addProfile(perfil: ProfileInterface) {

    const perfilObj = {
      email: perfil.email,
      name: perfil.name,
      lastName: perfil.lastName,
      photoURL: 'prueba',
      breedingCode: perfil.breedingCode,
      city: perfil.city,
      state: perfil.state,
      creationDate: new Date(),
      updateDate: new Date(),
      rol: "user",
      fileRef: 'prueba',
      isDeleted: false,
    };
    this.firestore.collection('registro-canarios').doc(perfil.email).set(perfilObj);
    console.log("perfil agregado")
  }
    uploadImage(image: FileInterface){
  //private uploadImage(perfil: ProfileInterface,image: FileInterface) {
    this.filePath = `images/${image.name}`;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, image);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((urlImage) => {
            this.downloadURl = urlImage;
            //this.addProfile(perfil);
            console.log('imagen subida');
          });
        })
      )
      .subscribe();
  }



  // getPerfil(user: string) {
  //   return this.firestore
  //     .collection('registro-canarios')
  //     .snapshotChanges()
  //     .pipe(
  //       map((contenido) =>
  //         contenido.map((stado) => {
  //           let data = stado.payload.doc.data() as ProfileInterface;
  //           let id = stado.payload.doc.id;
  //           return { id, ...data };
  //         })
  //       )
  //     );
  // }
  prueba2(file:FileInterface, perfil:ProfileInterface) {
  
    this.filePath = `images/${file.name}`;
    const uploadTask = this.storage.upload(this.filePath, file).then(() => {
         const ref = this.storage.ref(this.filePath);
         const downloadURL = ref.getDownloadURL().subscribe(url => { 
         const Url = url;
         console.log(Url);
     });
     const perfilObj = {
      email: perfil.email,
      name: perfil.name,
      lastName: perfil.lastName,
      photoURL: this.downloadURl,
      breedingCode: perfil.breedingCode,
      city: perfil.city,
      state: perfil.state,
      creationDate: new Date(),
      updateDate: new Date(),
      rol: "user",
      //fileRef: this.filePath,
      isDeleted: false,
    };
    this.firestore.collection('registro-canarios').doc(perfil.email).set(perfilObj);
    console.log("perfil creado");
    })
}

 
}
