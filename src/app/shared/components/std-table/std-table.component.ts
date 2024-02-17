import { Component, OnInit, inject } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Istudent } from '../../model/student';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {
  stdArr ! : Array<Istudent> // array store
  constructor(private _studentService:StudentService) { } // inject

  ngOnInit(): void {  // comp linsation 
    this.stdArr = this._studentService.fetchAllStudents()
  }

  ondelete(id:string){
    alert('you are sure')
    console.log(id);
    this._studentService.removetableItem(id);

    
  }

}
