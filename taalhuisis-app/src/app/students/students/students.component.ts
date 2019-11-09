import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentDataService } from 'src/app/services/student-data.service';
import { IGridComponentConfiguration } from 'src/app/shared/grid/grid.component';

@Component({
  selector: 'th-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  gridConfiguration: IGridComponentConfiguration;
  students$: Observable<any[]>;

  constructor(private sd: StudentDataService) { }

  ngOnInit() {
    this.students$ = this.sd.getStudents();
    this.gridConfiguration = {
      title: 'Students',
      columns: [{
        name: 'First name', property: 'firstName'
      },
      {
        name: 'Last name', property: 'lastName'
      }]
    };
  }
}
