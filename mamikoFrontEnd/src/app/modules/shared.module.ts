import {ModuleWithProviders, NgModule} from '@angular/core';
import {ProgressBarService} from '../services/progress-bar.service';
import {MaterialModule} from './material.module';
import {TranslateModule} from '@ngx-translate/core';
import {HeroService} from '../services/hero.service';
import {UserService} from '../services/user.service';
import {TreeCategorieService} from '../services/tree-categorie.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    MaterialModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule
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
