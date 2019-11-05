import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {TreeCategorieRoutingModule} from './tree-categorie-routing.module';
import {SharedModule} from './shared.module';

import {TreeCategorieService} from '../services/tree-categorie.service';
import {TreeCategorieComponent} from '../components/tree-categorie/tree-categorie.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    TreeCategorieRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    TreeCategorieComponent
  ],
  providers: [
    TreeCategorieService
  ]
})

export class TreeCategorieModule {
}
