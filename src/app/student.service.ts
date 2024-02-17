import { Injectable } from '@angular/core';
import { Istudent } from './shared/model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
stdArray : Array<Istudent> = [
  {
    fname : "anuja",
    lname : "bhosle",
    email : "bhosleanu@gmail.com",
    contact : 1478523695,
    id      : "456"
  },
  {
    fname : "madu",
    lname : "patil",
    email : "patilmadu@gmail.com",
    contact : 3698521470,
    id     : '459'
  }
]
  constructor() { }

  fetchAllStudents() : Array<Istudent>{
    //API call to get students Data
    return this.stdArray
  }

   addStd(stdObj: Istudent){// data base send to obj Api call save 
    //Api call to store data in DB
    this.stdArray.push(stdObj)
  }
  removetableItem(id:string){
    let getIndex =this.stdArray.findIndex(std => std.id === id)
    console.log(getIndex);
    this.stdArray.splice(getIndex,1)

    

}
}
