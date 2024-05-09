import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  private readonly url: string = `${environment.URL_API}`;

  constructor(private http: HttpClient) { }

  getAllRols = () => {return this.http.get(`${this.url}rol`)};
}
