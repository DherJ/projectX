import {async, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {ArticleDetailComponent} from '../../components/articles/article-detail/article-detail.component';
import {ArticlesModule} from '../../modules/articles.module';
import {TestsModule} from '../../modules/tests.module';
import {APP_CONFIG, AppConfig} from '../../config/app.config';
import {TranslateModule} from '@ngx-translate/core';
import {ArticlesService} from '../../services/articles.service';

describe('ArticleDetailComponent', () => {
  let fixture;
  let component;
  let articlesService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestsModule,
        TranslateModule.forRoot(),
        ArticlesModule
      ],
      providers: [
        {provide: APP_CONFIG, useValue: AppConfig},
        {provide: APP_BASE_HREF, useValue: '/'},
        articlesService
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleDetailComponent);
    component = fixture.debugElement.componentInstance;
    articlesService = TestBed.get(ArticlesService);
  }));

  it('should create article detail component', (() => {
    expect(component).toBeTruthy();
  }));

});
