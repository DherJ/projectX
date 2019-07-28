import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {AppConfig} from '../../config/app.config';

import {User} from './user.model';
import {Observable} from 'rxjs/Observable';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class UserService {
  request$: EventEmitter<any>;

  private headers: HttpHeaders;
  private usersUrl: string;
  private translations: any;

  private handleError(error: any) {
    this.request$.emit('finished');
    if (error instanceof Response) {
      return Observable.throw(error.json()['error'] || 'backend server error');
    }
    return Observable.throw(error || 'backend server error');
  }

  constructor(private http: HttpClient,
              private translateService: TranslateService,
              private snackBar: MatSnackBar) {
    this.request$ = new EventEmitter();

    this.usersUrl = AppConfig.endpoints.users;
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});

    this.translateService.get(['userCreated', 'saved', 'userLikeMaximum', 'userRemoved'], {
      'value': AppConfig.votesLimit
    }).subscribe((texts) => {
      this.translations = texts;
    });
  }

  getAllUsers(): Observable<User[]> {
    let config = {
      headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET')
      .set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    };
    this.request$.emit('starting');
    return this.http.get(this.usersUrl, config)
      .map(response => {
        this.request$.emit('finished');
        return response;
      })
      .catch(error => this.handleError(error));
  }

  getUserById(userId: string): Observable<User> {
    this.request$.emit('starting');
    return this.http.get(this.usersUrl + '/' + userId)
      .map(response => {
        this.request$.emit('finished');
        return response;
      })
      .catch(error => this.handleError(error));
  }

  createUser(user: any): Observable<User> {
    this.request$.emit('starting');
    return this.http
      .post(this.usersUrl, JSON.stringify({
        name: user.name,
        alterEgo: user.alterEgo
      }), {headers: this.headers})
      .map(response => {
        this.request$.emit('finished');
        this.showSnackBar('UserCreated');
        return response;
      })
      .catch(error => this.handleError(error));
  }

  like(user: User) {
    if (this.checkIfUserCanVote()) {
      this.request$.emit('starting');
      const url = `${this.usersUrl}/${user.id}/like`;
      return this.http
        .post(url, {}, {headers: this.headers})
        .map((response) => {
          this.request$.emit('finished');
          localStorage.setItem('votes', '' + (Number(localStorage.getItem('votes')) + 1));
          user.likes += 1;
          this.showSnackBar('saved');
          return response;
        })
        .catch(error => this.handleError(error));
    } else {
      this.showSnackBar('UserLikeMaximum');
      return Observable.throw('maximum votes');
    }
  }

  checkIfUserCanVote(): boolean {
    return Number(localStorage.getItem('votes')) < AppConfig.votesLimit;
  }

  deleteUserById(id: any): Observable<Array<User>> {
    this.request$.emit('starting');
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .map((response) => {
        this.request$.emit('finished');
        this.showSnackBar('UserRemoved');
        return response;
      })
      .catch(error => this.handleError(error));
  }

  showSnackBar(name): void {
    const config: any = new MatSnackBarConfig();
    config.duration = AppConfig.snackBarDuration;
    this.snackBar.open(this.translations[name], 'OK', config);
  }
}
