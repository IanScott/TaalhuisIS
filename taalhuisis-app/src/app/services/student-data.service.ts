import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {
  students:Observable<any[]>;

  constructor(private af: AngularFirestore) {
    this.students = af.collection('students').valueChanges();
  }

  getStudents():Observable<any[]>{
    return this.students;
  }


}
