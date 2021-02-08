import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Zapatilla } from './zapatilla';

@Injectable({
  providedIn: 'root'
})
export class ZapatillaService {
  private zapatillasUrl = 'api/zapatillas';

  constructor(private http: HttpClient) { }

  getZapatillas(): Observable<Zapatilla[]> {
    return this.http.get<Zapatilla[]>(this.zapatillasUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getMaxZapatillaId(): Observable<Zapatilla> {
    return this.http.get<Zapatilla[]>(this.zapatillasUrl)
    .pipe(
      // Get max value from an array
      map(data => Math.max.apply(Math, data.map(function(o) { return o.id; }))   ),
      catchError(this.handleError)
    );
  }

  getZapatillaById(id: number): Observable<Zapatilla> {
    const url = `${this.zapatillasUrl}/${id}`;
    return this.http.get<Zapatilla>(url)
      .pipe(
        tap(data => console.log('getZapatilla: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  createZapatilla(zapatilla: Zapatilla): Observable<Zapatilla> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    zapatilla.id = null;
    return this.http.post<Zapatilla>(this.zapatillasUrl, zapatilla, { headers: headers })
      .pipe(
        tap(data => console.log('createZapatilla: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteZapatilla(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.zapatillasUrl}/${id}`;
    return this.http.delete<Zapatilla>(url, { headers: headers })
      .pipe(
        tap(data => console.log('deleteZapatilla: ' + id)),
        catchError(this.handleError)
      );
  }

  updateZapatilla(zapatilla: Zapatilla): Observable<Zapatilla> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.zapatillasUrl}/${zapatilla.id}`;
    return this.http.put<Zapatilla>(url, zapatilla, { headers: headers })
      .pipe(
        tap(() => console.log('updateZapatilla: ' + zapatilla.id)),
        // Return the zapatilla on an update
        map(() => zapatilla),
        catchError(this.handleError)
      );
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
