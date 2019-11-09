import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2'
import { ShellModule } from './shell/shell.module';

import { StudentDataService } from './services/student-data.service';

export const firebaseConfig = {
  apiKey: 'AIzaSyATwTLh0Idt0Ep09UK9FSsqhkt0yf5F_PY',
  authDomain: 'taalhuis-d426f.firebaseapp.com',
  databaseURL: 'https://taalhuis-d426f.firebaseio.com',
  projectId: 'taalhuis-d426f<',
  storageBucket: 'taalhuis-d426f.appspot.com',
  messagingSenderId: '1009299099911'
};

@NgModule({
  declarations: [
    AppComponent,
    StudentDataService
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    ShellModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
