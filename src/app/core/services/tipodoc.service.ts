import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipodocService {
  private readonly url: string = `${environment.URL_API}`;

  constructor(private http: HttpClient) { }

  getAll = () => this.http.get(`${this.url}tipodoc`);
}
