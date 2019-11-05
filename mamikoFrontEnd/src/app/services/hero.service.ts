
import {throwError as observableThrowError, Observable} from 'rxjs';

import {catchError, map} from 'rxjs/operators';
import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {AppConfig} from '../config/app.config';

import {Hero} from '../models/hero.model';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class HeroService {
  request$: EventEmitter<any>;

  private headers: HttpHeaders;
  private heroesUrl: string;
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

    this.heroesUrl = AppConfig.endpoints.heroes;
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});

    this.translateService.get(['heroCreated', 'saved', 'heroLikeMaximum', 'heroRemoved'], {
      'value': AppConfig.votesLimit
    }).subscribe((texts) => {
      this.translations = texts;
    });
  }

  getAllHeroes(): Observable<Hero[]> {
    this.request$.emit('starting');
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      map(response => {
        this.request$.emit('finished');
        return response;
      }),
      catchError(error => this.handleError(error)),);
  }

  getHeroById(heroId: string): Observable<Hero> {
    this.request$.emit('starting');
    return this.http.get<Hero>(this.heroesUrl + '/' + heroId).pipe(
      map(response => {
        this.request$.emit('finished');
        return response;
      }),
      catchError(error => this.handleError(error)),);
  }

  createHero(hero: any): Observable<Hero> {
    this.request$.emit('starting');
    return this.http
      .post<Hero>(this.heroesUrl, JSON.stringify({
        name: hero.name,
        alterEgo: hero.alterEgo
      }), {headers: this.headers}).pipe(
      map(response => {
        this.request$.emit('finished');
        this.showSnackBar('heroCreated');
        return response;
      }),
      catchError(error => this.handleError(error)),);
  }

  like(hero: Hero) {
    if (this.checkIfUserCanVote()) {
      this.request$.emit('starting');
      const url = `${this.heroesUrl}/${hero.id}/like`;
      return this.http
        .post(url, {}, {headers: this.headers}).pipe(
        map((response) => {
          this.request$.emit('finished');
          localStorage.setItem('votes', '' + (Number(localStorage.getItem('votes')) + 1));
          hero.likes += 1;
          this.showSnackBar('saved');
          return response;
        }),
        catchError(error => this.handleError(error)),);
    } else {
      this.showSnackBar('heroLikeMaximum');
      return observableThrowError('maximum votes');
    }
  }

  checkIfUserCanVote(): boolean {
    return Number(localStorage.getItem('votes')) < AppConfig.votesLimit;
  }

  deleteHeroById(id: any): Observable<Array<Hero>> {
    this.request$.emit('starting');
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete<Array<Hero>>(url, {headers: this.headers}).pipe(
      map((response) => {
        this.request$.emit('finished');
        this.showSnackBar('heroRemoved');
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
