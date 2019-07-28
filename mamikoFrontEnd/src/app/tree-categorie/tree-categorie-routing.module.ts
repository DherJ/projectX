import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TreeCategorieComponent} from './tree-categorie.component';

const treeCategoriesRoutes: Routes = [
  {
    path: 'tree-categorie',
    component: TreeCategorieComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(treeCategoriesRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class TreeCategorieRoutingModule {
}
