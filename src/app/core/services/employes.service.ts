import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployesService {
  private readonly url: string = `${environment.URL_API}`;

  constructor(private http: HttpClient) { }

  getAllEmployes = () => this.http.get(`${this.url}tipoempleado`);

  saveEmploye(dataEmploye: any): Observable<any> {
    console.log(dataEmploye);
    return this.http.post(`${this.url}empleado`, dataEmploye);
  }
}
