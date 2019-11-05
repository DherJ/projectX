import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from '@angular/router';

import {UserListComponent} from '../components/users/user-list/user-list.component';
import {UserDetailComponent} from '../components/users/user-detail/user-detail.component';
import {UsersComponent} from '../components/users/users.component';

const usersRoutes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {path: '', component: UserListComponent},
      {path: ':id', component: UserDetailComponent}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(usersRoutes)
  ],
  declarations: []
})
export class UsersRoutingModule { }
