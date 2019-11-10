import { Component, OnInit } from '@angular/core';
import { IGridComponentConfiguration, IColumn } from 'src/app/shared/grid/grid.component';
import { Observable } from 'rxjs';
import { CoursedataService } from 'src/app/services/coursedata.service';

const COLUMNS: IColumn[] = [
  { name: 'Id', property: 'id' },
  { name: 'Name', property: 'name' },
  { name: 'Name (english)', property: 'name(eng)' }
];

@Component({
  selector: 'th-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  gridConfiguration: IGridComponentConfiguration<any>;
  courses$: Observable<any[]>;

  constructor(private cd: CoursedataService) { }

  ngOnInit() {
    this.courses$ = this.cd.getCourses();
    this.gridConfiguration = {
      title: 'Courses',
      columns: COLUMNS,
      dataSource$: this.courses$
    };
  }
}
