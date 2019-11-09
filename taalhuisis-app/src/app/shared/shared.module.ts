import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatPaginatorModule, MatTableModule } from '@angular/material';

import { GridComponent } from './grid/grid.component';
import { DeepFindPipe } from './pipes/deep-find.pipe';


@NgModule({
  declarations: [GridComponent, DeepFindPipe],
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
