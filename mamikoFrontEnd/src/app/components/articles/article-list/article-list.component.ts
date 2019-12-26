import {Component, ViewChild, Input, OnInit} from '@angular/core';
import {Article} from '../../../models/article.model';
import {ArticlesService} from '../../../services/articles.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {AppConfig} from '../../../config/app.config';
import {Router} from '@angular/router';
import {LoggerService} from '../../../services/logger.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})

export class ArticleListComponent implements OnInit {
  
  error: string;
  lang: string;
  @Input("articles") articles: Article[];
  private displayArticles: boolean = false;

  @ViewChild('form') myNgForm;

  constructor(translateService: TranslateService,
              private dialog: MatDialog,
              private router: Router,
              private formBuilder: FormBuilder) {      
  }

  ngOnInit() {
    this.displayArticles = true;
  }

  seeArticleDetails(article): void {
    this.router.navigate([AppConfig.routes.articles + '/' + article.articleId]);
  }
}
