import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {
  students:Observable<any[]>;

  constructor(private af: AngularFireDatabase) {
    this.students = af.list('students').valueChanges();
  }

  getStudents():Observable<any[]>{
    return this.students;
  }


}
