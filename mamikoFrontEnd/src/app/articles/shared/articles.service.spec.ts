import {async, TestBed} from '@angular/core/testing';
import {ArticlesService} from './articles.service';
import {APP_BASE_HREF} from '@angular/common';
import {APP_CONFIG, AppConfig} from '../../config/app.config';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import {TestsModule} from '../../shared/modules/tests.module';
import {TranslateModule} from '@ngx-translate/core';
import {HttpErrorResponse} from '@angular/common/http';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';

describe('ArticlesService', () => {
  let articlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TestsModule,
        TranslateModule.forRoot()
      ],
      providers: [
        {provide: APP_CONFIG, useValue: AppConfig},
        {provide: APP_BASE_HREF, useValue: '/'},
        ArticlesService
      ]
    });

    articlesService = TestBed.get(ArticlesService);
  });

  it('should contains heroes', async(() => {
    articlesService.getAllArticles().subscribe((data: any) => {
      expect(data.length).toBeGreaterThan(AppConfig.topHeroesLimit);
    });
  }));
});
