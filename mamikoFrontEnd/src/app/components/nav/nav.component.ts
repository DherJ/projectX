import {Component, Inject, Input, OnInit, Output} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

import {DomSanitizer} from '@angular/platform-browser';
import {APP_CONFIG, AppConfig} from '../../config/app.config';
import {IAppConfig} from '../../config/iapp.config';
import {ProgressBarService} from '../../services/progress-bar.service';
import {ParametersService} from '../../services/parameters.service';
import {Parameter} from '../../models/parameter.model';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  viewProviders: [MatIconRegistry]
})

export class NavComponent implements OnInit {

  @Input() parameters: Parameter[];
  @Output() selectedLanguage: string;

  languageList: string[];
  appConfig: any;
  menuItems: any[];
  progressBarMode: string;
  languages: string[];
  selectedFlag: string;
  private translateService: TranslateService;

  constructor(@Inject(APP_CONFIG) appConfig: IAppConfig,
              private progressBarService: ProgressBarService,
              translateService: TranslateService,
              private matIconRegistry: MatIconRegistry,
              sanitizer: DomSanitizer,
              private parametersService: ParametersService) {

    this.languages = AppConfig.languages;
    this.appConfig = appConfig;
    this.translateService = translateService;

    this.loadMenus();

    this.progressBarService.updateProgressBar$.subscribe((mode: string) => {
      this.progressBarMode = mode;
    });

    matIconRegistry.addSvgIcon
      ( 'flag_en', sanitizer.bypassSecurityTrustResourceUrl('../../assets/svg-icons/flag_en.svg'));
            matIconRegistry.addSvgIcon
      ( 'flag_fr', sanitizer.bypassSecurityTrustResourceUrl('../../assets/svg-icons/flag_fr.svg'));
  }

  ngOnInit() {

    this.parametersService.getAllParameters().subscribe((parameters: Parameter[]) => {
      this.parameters = parameters;
      if (parameters != null) {
        this.languageList = parameters.filter( elt => {
          return elt.parameterCode.match('param_available_language');
        }).map(elt => {
          return elt.parameterValue;
        }).reduce(elt => {
          return elt;
        }).split(';');

        let userLang = navigator.language;
        let defaultLanguage = this.languageList.find(item => {
          return userLang.includes(item);
        });

        if ( defaultLanguage == null ) {
          this.selectedLanguage = 'en';
          this.selectedFlag = 'flag_en';
        } else {
          this.selectedLanguage = defaultLanguage;
          this.selectedFlag = 'flag_' + defaultLanguage;
        }
        this.translateService.use(this.selectedLanguage).subscribe(() => {
          this.loadMenus();
        });
      }
    });

  }

  changeLanguage(language: string): void {
    this.selectedLanguage = language;
    this.selectedFlag = 'flag_' + language.substring(0, 2);
    this.translateService.use(language).subscribe(() => {
      this.loadMenus();
    });
  }

  getFlagOfLang(lang: string) {
    return 'flag_' + lang;
  }

  getSelectedFlag() {
    return this.selectedFlag;
  }

  private loadMenus(): void {
    this.translateService.get(['home', 'heroesList', 'usersList'], {}).subscribe((texts: any) => {
      this.menuItems = [
        {link: '/', name: texts['home']},
        {link: '/' + AppConfig.routes.heroes, name: texts['heroesList']},
        {link: '/' + AppConfig.routes.users, name: texts['usersList']}
      ];
    });
  }
}
