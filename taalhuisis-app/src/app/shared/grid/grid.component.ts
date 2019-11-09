import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

export interface IColumn {
  name: string;
  property: string;
}

export interface IGridComponentConfiguration<T> {
  title: string;
  columns: IColumn[];
  dataSource$: Observable<T[]>;
}

@Component({
  selector: 'th-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent<T> {

  @Input() set gridConfiguration(config: IGridComponentConfiguration<T>) {
    this._configureGrid(config);
  }

  title: string;
  columns: IColumn[];
  displayedColumns: string[];
  dataSource$: Observable<T[]>;

  private _configureGrid(gridConfiguration: IGridComponentConfiguration<T>): void {
    this.title = gridConfiguration.title;
    this.columns = gridConfiguration.columns;
    this.displayedColumns = gridConfiguration.columns.map(x => x.property);
    this.dataSource$ = gridConfiguration.dataSource$;
  }

}
