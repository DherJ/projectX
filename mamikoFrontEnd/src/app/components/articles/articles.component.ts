import { Component, Inject, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {APP_CONFIG, AppConfig} from '../../config/app.config';
import {IAppConfig} from '../../config/iapp.config';
import {ProgressBarService} from '../../services/progress-bar.service';
import { MatIconRegistry } from '@angular/material/icon';
import {TranslateService} from '@ngx-translate/core';
import {ArticlesService} from '../../services/articles.service';
import {Article} from '../../models/article.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html'
})

export class ArticlesComponent implements OnInit {

  private articles: Article[];

  constructor(@Inject(APP_CONFIG) appConfig: IAppConfig,
    private progressBarService: ProgressBarService,
    translateService: TranslateService,
    private matIconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private articlesService: ArticlesService) {

  }

  ngOnInit() {

    this.articlesService.getArticles().subscribe((articles: Article[]) => {
      this.articles = articles;
    });
  }

}
