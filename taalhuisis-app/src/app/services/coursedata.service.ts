import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursedataService {
  private courses:Observable<any[]>;

  constructor(private af: AngularFirestore) { 
    this.courses = af.collection('courses').valueChanges();
  }

  getCourses():Observable<any[]>{
    return this.courses;
  }
}
