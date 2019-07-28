import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {TreeCategorieRoutingModule} from './tree-categorie-routing.module';
import {SharedModule} from '../shared/modules/shared.module';

import {TreeCategorieService} from './shared/tree-categorie.service';
import {TreeCategorieComponent} from './tree-categorie.component';

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
