import {Component} from '@angular/core';
import {Article} from '../shared/article.model';
import {ArticlesService} from '../shared/articles.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})

export class ArticleDetailComponent {
  article: Article;

  constructor(private articlesService: ArticlesService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params: any) => {
      if (params['id']) {
        this.articlesService.getArticleById(params['id']).subscribe((article: Article) => {
          this.article = article;
        });
      }
    });
  }

}
