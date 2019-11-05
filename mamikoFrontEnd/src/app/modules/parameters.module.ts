import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ParametersRoutingModule} from './parameters-routing.module';
import {SharedModule} from './shared.module';

import {ParametersListComponent} from '../components/parameters/parameters-list/parameters-list.component';
import {ParametersService} from '../services/parameters.service';
import {ParametersComponent} from '../components/parameters/parameters.component';

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
