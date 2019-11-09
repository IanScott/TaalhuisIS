import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { StudentsComponent } from './students/students/students.component';

const routes: Routes = [
  { path: '', component: ShellComponent, children: [
    { path: '', component: DashboardComponent },
    { path: 'students', component: StudentsComponent }
  ] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
