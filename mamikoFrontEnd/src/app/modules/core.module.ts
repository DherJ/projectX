import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {throwIfAlreadyLoaded} from './module-import-guard';
import {LoggerService} from '../services/logger.service';
import {ParametersService} from '../services/parameters.service';
import {TreeCategorieService} from '../services/tree-categorie.service';

import {NavComponent} from '../components/nav/nav.component';
import {FooterComponent} from '../components/footer/footer.component';
import {SharedModule} from './shared.module';
import {RouterModule} from '@angular/router';
import {SearchBarComponent} from '../components/search-bar/search-bar.component';
import { AppConnexionComponent } from '../components/app-connexion/app-connexion.component';

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
