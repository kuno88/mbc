import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileInterface } from 'app/models/profile-interface';
import { AuthService } from 'app/services/auth-service.service';
import { ProfileServiceService } from 'app/services/profile-service.service';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {
  usuario:any;
  createProfile : FormGroup;
  loading=false;
  file:any;
  

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private storage: AngularFireStorage,
    private profileService : ProfileServiceService
  ){ 
    this.createProfile = this.fb.group({
      email: [sessionStorage.getItem('email')],
      name:[''],
      lastName:[''],
      breabreedingCode:[''],
      city:[''],
      state:['']
    })
  }

  ngOnInit(): void {
  }
  
    uploadFile($event:any){
    //mostrar el archivo seleccionado en un img
    const imgMuestra = document.getElementById("imgMuestra") as HTMLImageElement;
    const file = $event.target.files[0];
    if($event.target.files.length !== 0 ){
    imgMuestra.src= URL.createObjectURL(file);
    
    }
    //this.file=$event.target.file[0];
   // const objectURL = URL.createObjectURL(primerArchivo);
    //imgMuestra.src =objectURL;
    
    //console.log("Prueba evento: ",$event);
    //guardar
    // const file = $event.target.files[0];
    // const imgRef = `imagesProfile/${file.name}`;
    // //this.storage. refFromURL(`imagesProfile/${file.name}`)

    // this.storage.upload(imgRef,file).then(x=>{
    //   console.log("archivo subido:",x)
    // }).catch(error=>{console.log(error)})
    // //console.log(file);


  }

 async registerProfile(){
    try {
      const data: ProfileInterface = {
        email: this.createProfile.value.email,
        name: this.createProfile.value.name,
        lastName: this.createProfile.value.lastName,
        breedingCode: this.createProfile.value.breabreedingCode,
        city: this.createProfile.value.city,
        state: this.createProfile.value.state,
        rol:["usuario"]
      }

      if (data) {
       //await this.profileService.createProfile(data, this.file);
      // this.profileService.createProfile2(data,this.file);
      await this.profileService.addProfile(data);
      this.profileService.uploadImage(this.file);
      }
    } catch (error) {
      console.log(error);

    }
  }

}
