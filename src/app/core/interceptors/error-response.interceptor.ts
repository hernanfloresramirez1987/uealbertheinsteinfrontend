import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorResponseInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req)
    .pipe(
      catchError((err: HttpErrorResponse) => {
      let errorMessage = ``;
      
      if (err.error instanceof ErrorEvent) {
        errorMessage = ``;
      } else {
        errorMessage = `Error code: ${err.status}, message: ${err.message}`;
      }
      return throwError(() => errorMessage);
    })
  );
};
