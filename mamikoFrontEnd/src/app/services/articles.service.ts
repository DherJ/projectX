
import {throwError as observableThrowError, Observable} from 'rxjs';

import {catchError, map} from 'rxjs/operators';
import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {AppConfig} from '../config/app.config';

import {Article} from '../models/article.model';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class ArticlesService {
  request$: EventEmitter<any>;

  private headers: HttpHeaders;
  private articlesUrl: string;
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

    this.articlesUrl = AppConfig.endpoints.Articles;
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
  }

  getArticles(): Observable<Article[]> {
    this.request$.emit('starting');
    return this.http.get<Article[]>(this.articlesUrl).pipe(
      map(response => {
        this.request$.emit('finished');
        return response;
      }),
      catchError(error => this.handleError(error)),);
  }

  getArticleById(articleId: number): Observable<Article> {
    this.request$.emit('starting');
    return this.http.get<Article>(this.articlesUrl + '/' + articleId).pipe(
      map(response => {
        this.request$.emit('finished');
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
