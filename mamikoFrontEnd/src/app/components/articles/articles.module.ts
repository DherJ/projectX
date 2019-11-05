import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ArticlesRoutingModule} from '../../modules/articles-routing.module';
import {SharedModule} from '../../modules/shared.module';

import {ArticlesService} from '../../services/articles.service';
import {ArticlesComponent} from '../../components/articles/articles.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ArticlesRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    ArticlesComponent
  ],
  providers: [
    ArticlesService
  ]
})

export class ArticlesModule {
}
