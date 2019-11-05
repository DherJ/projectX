
import {throwError as observableThrowError, Observable} from 'rxjs';

import {catchError, map} from 'rxjs/operators';
import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {AppConfig} from '../config/app.config';

import {Parameter} from '../models/parameter.model';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class ParametersService {
  request$: EventEmitter<any>;

  private headers: HttpHeaders;
  private parametersUrl: string;
  private translations: any;

  private handleError(error: any) {
    this.request$.emit('finished');
    if (error instanceof Response) {
      return observableThrowError(error.json()['error'] || 'backend server error');
    }
    return observableThrowError(error || 'backend server error');
  }

  constructor(private http: HttpClient,
              private translateService: TranslateService,
              private snackBar: MatSnackBar) {
    this.request$ = new EventEmitter();

    this.parametersUrl = AppConfig.endpoints.parameters;
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});

    this.translateService.get(['parameterCreated', 'saved', 'parameterRemoved']).subscribe((texts) => {
      this.translations = texts;
    });
  }

  getAllParameters(): Observable<Parameter[]> {
    this.request$.emit('starting');
    return this.http.get<Parameter[]>(this.parametersUrl).pipe(
      map(response => {
        this.request$.emit('finished');
        return response;
      }),
      catchError(error => this.handleError(error)),);
  }

  getParameterByCode(parameterCode: string): Observable<Parameter> {
    this.request$.emit('starting');
    return this.http.get<Parameter>(this.parametersUrl + '/' + parameterCode).pipe(
      map(response => {
        this.request$.emit('finished');
        return response;
      }),
      catchError(error => this.handleError(error)),);
  }

  createParameter(parameter: any): Observable<Parameter> {
    this.request$.emit('starting');
    return this.http
      .post<Parameter>(this.parametersUrl, JSON.stringify({
        parameterCode: parameter.parameterCode,
        parameterValue: parameter.parameterValue
      }), {headers: this.headers}).pipe(
      map(response => {
        this.request$.emit('finished');
        this.showSnackBar('parameterCreated');
        return response;
      }),
      catchError(error => this.handleError(error)),);
  }

  deleteParameter(parameterCode: any): Observable<Array<Parameter>> {
    this.request$.emit('starting');
    const url = `${this.parametersUrl}/${parameterCode}`;
    return this.http.delete<Array<Parameter>>(url, {headers: this.headers}).pipe(
      map((response) => {
        this.request$.emit('finished');
        this.showSnackBar('parameterRemoved');
        return response;
      }),
      catchError(error => this.handleError(error)),);
  }

  showSnackBar(name): void {
    const config: any = new MatSnackBarConfig();
    config.duration = AppConfig.snackBarDuration;
    this.snackBar.open(this.translations[name], 'OK', config);
  }
}
