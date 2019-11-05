import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {UsersRoutingModule} from './users-routing.module';
import {SharedModule} from './shared.module';

import {UserListComponent} from '../components/users/user-list/user-list.component';
import {UserService} from '../services/user.service';
import {UserDetailComponent} from '../components/users/user-detail/user-detail.component';
import {UsersComponent} from '../components/users/users.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    UsersRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    UsersComponent,
    UserListComponent
  ],
  entryComponents: [
  ],
  providers: [
    UserService
  ]
})
export class UsersModule { }
