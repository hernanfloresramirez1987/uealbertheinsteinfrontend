import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExtdocService {
  private readonly url: string = `${environment.URL_API}`;

  constructor(private http: HttpClient) { }

  getAllExtDocs = () => this.http.get(`${this.url}extdoc`)
}
