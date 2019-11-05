import {Component, ViewChild} from '@angular/core';
import {Article} from '../../../models/article.model';
import {ArticlesService} from '../../../services/articles.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {AppConfig} from '../../../config/app.config';
import {Router} from '@angular/router';
import {LoggerService} from '../../../services/logger.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})

export class ArticleListComponent {
  articles: Article[];
  error: string;
  @ViewChild('form') myNgForm; // just to call resetForm method

  constructor(private articlesService: ArticlesService,
              private dialog: MatDialog,
              private router: Router,
              private formBuilder: FormBuilder) {

    this.articlesService.getArticles().subscribe((articles: Array<Article>) => {
      this.articles = articles;
    });
  }

  seeArticleDetails(article): void {
    this.router.navigate([AppConfig.routes.articles + '/' + article.articleId]);
  }

}
