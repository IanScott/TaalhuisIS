import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

export interface IColumn {
  name: string;
  property: string;
}

export interface IGridComponentConfiguration {
  title: string;
  columns: IColumn[];
}

@Component({
  selector: 'th-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent<T> {

  @Input() set gridConfiguration(config: IGridComponentConfiguration) {
    this._configureGrid(config);
  }

  MOCK: any[] = [{firstName: 'Matt', lastName: 'NK'}, {firstName: 'Ian', lastName: 'KN'}];
  title: string;
  columns: IColumn[];
  displayedColumns: string[];
  dataSource: MatTableDataSource<T> = new MatTableDataSource<T>(this.MOCK);

  private _configureGrid(gridConfiguration: IGridComponentConfiguration): void {
    this.title = gridConfiguration.title;
    this.columns = gridConfiguration.columns;
    this.displayedColumns = gridConfiguration.columns.map(x => x.property);
    this.dataSource = new MatTableDataSource<T>(this.MOCK);
  }

}
