import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly url: string = `${environment.URL_API}`;

  constructor(private http: HttpClient) { }

  login(dataLogin: any): Observable<any> {
    return this.http.post<any>(`${this.url}auth`, { username: dataLogin.username, password: dataLogin.password })
      .pipe(
        map(data => {
          console.log(data);
          if (data.status === 201) this.storeToken(data.token);
          return data;
        }),
        catchError(this.handleError('login', []))
      );
  }

  logout(): void {
    this.clearToken();
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    return !!token;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  private storeToken(token: string): void {
    console.log(token)
    localStorage.setItem('token', token);
  }

  private clearToken(): void {
    localStorage.removeItem('token');
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      // Devolver un resultado seguro y vacío para que la aplicación pueda seguir funcionando
      return of(result as T);
    };
  }
}
