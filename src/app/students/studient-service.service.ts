import { EventEmitter, Injectable } from '@angular/core';
import { StudentModel } from '../shared/student.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class StudientService {
  private studentUrl = 'http://localhost:3000/students';

  constructor(private http: HttpClient) {}

  getStudients(): Observable<StudentModel[]> {
    return this.http.get<any>(this.studentUrl);
  }

  addStudient(name: string) {
    const body = JSON.stringify({ name });
    return this.http.post<any>(this.studentUrl, body, httpOptions);
  }

  getStudient(id: number): Observable<any> {
    const url = `${this.studentUrl}/${id}`;
    return this.http.get<any>(url, httpOptions);
  }

  removeStudent(id: number): Observable<any> {
    const url = `${this.studentUrl}/${id}`;

    return this.http.delete<any>(url);
  }

  updateStudent(id: number, name: string): Observable<any> {
    const body = JSON.stringify({ name });
    console.log(body);
    const url = `${this.studentUrl}/${id}`;
    return this.http.patch<any>(url, body, httpOptions);
  }

  //

  attachClasse(id: string, classe: string): Observable<any> {
    console.log(id);
    const body = JSON.stringify({ currentClasse: classe });
    console.log(body);

    const url = `${this.studentUrl}/join/${id}`;
    console.log(url);

    return this.http.post<any>(url, body, httpOptions);
  }

  detachClasse(id: number): Observable<any> {
    const url = `${this.studentUrl}/detach/${id}`;
    return this.http.get<any>(url, httpOptions);
  }

  updateInput = new EventEmitter<number>();
}
