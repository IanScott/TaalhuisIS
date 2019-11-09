import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface IStudent {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: { seconds: number };
  telephone: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {
  students: Observable<IStudent[]>;

  constructor(af: AngularFirestore) {
    this.students = af.collection<IStudent>('students').valueChanges();
  }

  getStudents():Observable<IStudent[]>{
    return this.students;
  }
}
