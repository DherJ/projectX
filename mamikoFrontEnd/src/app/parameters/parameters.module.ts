import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ParametersRoutingModule} from './parameters-routing.module';
import {SharedModule} from '../shared/modules/shared.module';

import {ParametersListComponent} from './parameters-list/parameters-list.component';
import {ParametersService} from './shared/parameters.service';
import {ParametersComponent} from './parameters.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ParametersRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    ParametersComponent,
    ParametersListComponent
  ],
  entryComponents: [
  ],
  providers: [
    ParametersService
  ]
})
export class UsersModule { }
