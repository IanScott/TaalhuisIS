import { Component, OnInit } from '@angular/core';
import { IGridComponentConfiguration } from 'src/app/shared/grid/grid.component';

@Component({
  selector: 'th-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  gridConfiguration: IGridComponentConfiguration;

  constructor() { }

  ngOnInit() {
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
