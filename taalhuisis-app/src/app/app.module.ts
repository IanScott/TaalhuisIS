import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ShellModule } from './shell/shell.module';


const config = {
  apiKey: 'AIzaSyATwTLh0Idt0Ep09UK9FSsqhkt0yf5F_PY',
  authDomain: 'taalhuis-d426f.firebaseapp.com',
  databaseURL: 'https://taalhuis-d426f.firebaseio.com',
  projectId: 'taalhuis-d426f<',
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
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    ShellModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
