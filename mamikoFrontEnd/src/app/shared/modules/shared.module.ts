import {ModuleWithProviders, NgModule} from '@angular/core';
import {ProgressBarService} from '../services/progress-bar.service';
import {MaterialModule} from './material.module';
import {TranslateModule} from '@ngx-translate/core';
import {HeroService} from '../../heroes/shared/hero.service';
import {UserService} from '../../users/shared/user.service';
import {TreeCategorieService} from '../../tree-categorie/shared/tree-categorie.service';

@NgModule({
  imports: [
    MaterialModule,
    TranslateModule
  ],
  exports: [
    MaterialModule,
    TranslateModule
  ]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ProgressBarService, HeroService, UserService, TreeCategorieService
      ]
    };
  }
}
