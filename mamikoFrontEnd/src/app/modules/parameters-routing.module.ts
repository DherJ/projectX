import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ParametersListComponent} from '../components/parameters/parameters-list/parameters-list.component';
import {ParametersComponent} from '../components/parameters/parameters.component';

const parametersRoutes: Routes = [
  {
    path: '',
    component: ParametersComponent,
    children: [
      {path: '', component: ParametersListComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(parametersRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class ParametersRoutingModule {
}
