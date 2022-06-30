import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClasseModel } from '../shared/classe.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class ClasseService {
  private classeUrl = 'http://localhost:3000/classes';

  constructor(private http: HttpClient) {}

  getClasses(): Observable<ClasseModel[]> {
    return this.http.get<any>(this.classeUrl);
  }

  addClasse(name: string) {
    const body = JSON.stringify({ name });
    return this.http.post<any>(this.classeUrl, body, httpOptions);
  }

  getClasse(id: number): Observable<any> {
    const url = `${this.classeUrl}/${id}`;
    return this.http.get<any>(url, httpOptions);
  }

  removeClasse(id: number): Observable<any> {
    const url = `${this.classeUrl}/${id}`;

    return this.http.delete<any>(url);
  }

  updateClasse(id: number, name: string): Observable<any> {
    const body = JSON.stringify({ name });
    console.log(body);
    const url = `${this.classeUrl}/${id}`;
    return this.http.patch<any>(url, body, httpOptions);
  }
}
