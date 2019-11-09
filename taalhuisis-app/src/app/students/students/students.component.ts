import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentDataService } from 'src/app/services/student-data.service';
import { IGridComponentConfiguration, IColumn } from 'src/app/shared/grid/grid.component';

const COLUMNS: IColumn[] = [
  { name: 'First name', property: 'firstName' },
  { name: 'Last name', property: 'lastName' },
  { name: 'Email', property: 'email' },
  { name: 'Telephone', property: 'telephone' },
  { name: 'Date of birth', property: 'dateOfBirth.seconds', dataType: 'date' }
];

@Component({
  selector: 'th-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  gridConfiguration: IGridComponentConfiguration<any>;
  students$: Observable<any[]>;

  constructor(private sd: StudentDataService) { }

  ngOnInit() {
    this.students$ = this.sd.getStudents();
    this.gridConfiguration = {
      title: 'Students',
      columns: COLUMNS,
      dataSource$: this.students$
    };
  }
}
