import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Meta, Title} from '@angular/platform-browser';

import {NavigationEnd, Router} from '@angular/router';
import {AppConfig} from './config/app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {

  constructor(private translateService: TranslateService,
              private title: Title,
              private meta: Meta,
              private router: Router) {

    this.translateService = translateService;
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');

    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        // to change the title of the page
        switch (event.urlAfterRedirects) {
          case '/':
            this.title.setTitle('Mamiko');
            this.meta.updateTag({
              name: 'description',
              content: 'Vente de prêt à porter avec protection anti-ondes'
            });
            break;
        }
      }
    });
  }
}
