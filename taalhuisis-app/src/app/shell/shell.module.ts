import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { ShellRoutingModule } from './shell-routing.module';
import { MainmenuComponent } from './mainmenu/mainmenu.component';


@NgModule({
  declarations: [
    ShellComponent,
    MainmenuComponent
  ],
  imports: [
    CommonModule,
    ShellRoutingModule
  ],
  exports:[ 
    ShellComponent
  ]
})
export class ShellModule { }
