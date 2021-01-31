import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

const restOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({ providedIn: 'root' })
export class TimecardService {
  constructor(private http: HttpClient) {}
  private timecard =
    'https://1k3tsc1ik3.execute-api.us-east-2.amazonaws.com/prod/timecards/';

  getTimecard(id): Observable<any> {
    return this.http
      .get<any>(this.timecard+id)
      .pipe(catchError(this.handleError('getTimecard', [])));
  }

  createTimecard(): Observable<any> {
    return this.http
      .post<any>(this.timecard,null)
      .pipe(catchError(this.handleError('getDepartment', [])));
  }

  updateTimecard(timecard): Observable<any> {
    return this.http
      .put<any>(this.timecard,timecard)
      .pipe(catchError(this.handleError('getDepartment', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }
}
