import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatPaginatorModule, MatTableModule } from '@angular/material';

import { GridComponent } from './grid/grid.component';


@NgModule({
  declarations: [GridComponent],
  imports: [
    CommonModule,
    MatCardModule, 
    MatPaginatorModule, 
    MatButtonModule, 
    MatTableModule
  ],
  exports: [
    GridComponent
  ]
})
export class SharedModule { }
