export interface ProfileInterface {
    email?:string,
    name?:string,
    lastName?:string,
    photoURL?:string,
    breedingCode?:string,
    city?:string,
    state?:string,
    creationDate?:Date,
    updateDate?:Date,
    fileRef?: string,
    rol?:string[],
    isDeleted?:boolean

}
