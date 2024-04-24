import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargoService {
  private readonly url: string = `${environment.URL_API}`;

  constructor(private http: HttpClient) { }

  getAll = () => {return this.http.get(`${this.url}cargo`)};
  // .pipe(map(t => {
  //   console.log(t);
  //   return t;
  // }));
}
