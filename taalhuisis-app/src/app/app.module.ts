import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { ShellModule } from './shell/shell.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './dashboard/dashboard.module';
import { StudentsModule } from './students/students.module';

export const firebaseConfig = {
  apiKey: 'AIzaSyATwTLh0Idt0Ep09UK9FSsqhkt0yf5F_PY',
  authDomain: 'taalhuis-d426f.firebaseapp.com',
  databaseURL: 'https://taalhuis-d426f.firebaseio.com',
  projectId: 'taalhuis-d426f',
  storageBucket: 'taalhuis-d426f.appspot.com',
  messagingSenderId: '1009299099911'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
 	  AngularFirestoreModule,
    BrowserAnimationsModule,
    ShellModule,
    DashboardModule,
    StudentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
