import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {HeroRoutingModule} from './heroes-routing.module';
import {SharedModule} from '../modules/shared.module';

import {HeroListComponent, RemoveHeroDialogComponent} from '../components/heroes/hero-list/hero-list.component';
import {HeroService} from '../services/hero.service';
import {HeroDetailComponent} from '../components/heroes/hero-detail/hero-detail.component';
import {HeroesComponent} from '../components/heroes/heroes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HeroRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    HeroesComponent,
    HeroListComponent,
    RemoveHeroDialogComponent,
    HeroDetailComponent
  ],
  entryComponents: [
    RemoveHeroDialogComponent
  ],
  providers: [
    HeroService
  ]
})

export class HeroesModule {
}
