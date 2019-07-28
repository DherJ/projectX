import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {throwIfAlreadyLoaded} from './module-import-guard';
import {LoggerService} from './logger.service';
import {ParametersService} from '../parameters/shared/parameters.service';
import {TreeCategorieService} from '../tree-categorie/shared/tree-categorie.service';

import {NavComponent} from './nav/nav.component';
import {FooterComponent} from './footer/footer.component';
import {SharedModule} from '../shared/modules/shared.module';
import {RouterModule} from '@angular/router';
import {SearchBarComponent} from './search-bar/search-bar.component';
import { AppConnexionComponent } from './app-connexion/app-connexion.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    NavComponent,
    FooterComponent
  ],
  declarations: [
    NavComponent,
    FooterComponent,
    SearchBarComponent,
    AppConnexionComponent
  ],
  providers: [
    LoggerService,
    ParametersService,
    TreeCategorieService
  ]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
