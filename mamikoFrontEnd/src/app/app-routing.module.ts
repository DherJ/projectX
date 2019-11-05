import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HeroTopComponent} from './components/heroes/hero-top/hero-top.component';
import {UserListComponent} from './components/users/user-list/user-list.component';
import {AppConfig} from './config/app.config';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: HeroTopComponent},
  {path: AppConfig.routes.heroes, loadChildren: './modules/heroes.module#HeroesModule'},
  {path: 'users', component: UserListComponent},
  {path: AppConfig.routes.heroes, loadChildren: './modules/users.module#UsersModule'},
  {path: AppConfig.routes.treeCategorie, loadChildren: './modules/tree-categorie.module#TreeCategorieModule'}
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
