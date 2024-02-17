import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UuidService } from '../../services/uuid.service';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {
  stdForm ! : FormGroup
  constructor(private _uuidService : UuidService,
              private _studentService : StudentService) 
              { }

  ngOnInit(): void {
    this.createStdForm()
  }
  createStdForm(){
    this.stdForm = new FormGroup({
      fname : new FormControl(null,[Validators.required]),
      lname : new FormControl(null,[Validators.required]),
      email : new FormControl(null,[Validators.required]),
      contact : new FormControl(null,[Validators.required]),

    })
  }
  onStdSubmit(){
    if(this.stdForm.valid){
      alert('you are sure')
      console.log(this.stdForm.value);
      let obj = {...this.stdForm.value,id : this._uuidService.uuid }
      this._studentService.addStd(obj);
      this.stdForm.reset()
    }
  
  }


}
