import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HeroTopComponent} from './heroes/hero-top/hero-top.component';
import {UserListComponent} from './users/user-list/user-list.component';
import {AppConfig} from './config/app.config';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: HeroTopComponent},
  {path: AppConfig.routes.heroes, loadChildren: './heroes/heroes.module#HeroesModule'},
  {path: 'users', component: UserListComponent},
  {path: AppConfig.routes.heroes, loadChildren: './users/users.module#UsersModule'},
  {path: AppConfig.routes.treeCategorie, loadChildren: './tree-categorie/tree-categorie.module#TreeCategorieModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
