import { Component, OnInit } from '@angular/core';
import { StudentDataService } from 'src/app/services/student-data.service';

@Component({
  selector: 'th-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students$ = null;
  constructor(private sd:StudentDataService ) { }

  ngOnInit() {
    this.students$ = this.sd.getStudents();
  }

}
