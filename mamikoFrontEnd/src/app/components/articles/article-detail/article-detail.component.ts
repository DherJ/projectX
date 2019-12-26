import {Component} from '@angular/core';
import {Article} from '../../../models/article.model';
import {ArticlesService} from '../../../services/articles.service';
import {ActivatedRoute} from '@angular/router';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})

export class ArticleDetailComponent {
  article: Article;
  private lang: string;

  constructor(private articlesService: ArticlesService,
              private activatedRoute: ActivatedRoute, translateService: TranslateService) {
                this.lang = translateService.currentLang;
        translateService.onLangChange.subscribe((event: LangChangeEvent) => {
          this.lang = translateService.currentLang;
        });
        this.activatedRoute.params.subscribe((params: any) => {
          if (params['id']) {
            this.articlesService.getArticleById(params['id'], this.lang).subscribe((article: Article) => {
              this.article = article;
            });
          }
        });
  }
}