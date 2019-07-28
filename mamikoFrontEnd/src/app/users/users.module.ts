import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {UsersRoutingModule} from './users-routing.module';
import {SharedModule} from '../shared/modules/shared.module';

import {UserListComponent} from './user-list/user-list.component';
import {UserService} from './shared/user.service';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {UsersComponent} from './users.component';

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
