import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../models/persona.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private readonly url: string = `${environment.URL_API}`;

  constructor(private http: HttpClient) { }

  getAllEmployes = () => this.http.get(`${this.url}persona`);

  getOneEmployeId = (id: number) => this.http.get(`${this.url}persona/${id}`);

  getOneEmployeCi = (ci: string) => this.http.post<Persona>(`${this.url}persona`, { ci });
}
