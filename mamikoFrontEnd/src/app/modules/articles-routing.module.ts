import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ArticlesComponent} from '../components/articles/articles.component';
import { ArticleDetailComponent } from '../components/articles/article-detail/article-detail.component';
import { ArticleListComponent } from '../components/articles/article-list/article-list.component';

const articlesRoutes: Routes = [
  {
    path: '',
    component: ArticlesComponent,
    children: [
      {path: '', component: ArticleListComponent},
      {path: ':id', component: ArticleDetailComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(articlesRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class ArticlesRoutingModule {
}
