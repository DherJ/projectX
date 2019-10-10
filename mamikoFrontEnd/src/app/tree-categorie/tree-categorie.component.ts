import { Component, Inject, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {APP_CONFIG, AppConfig} from '../config/app.config';
import {IAppConfig} from '../config/iapp.config';
import {ProgressBarService} from '../shared/services/progress-bar.service';
import { MatIconRegistry } from '@angular/material/icon';
import {TranslateService} from '@ngx-translate/core';
import {TreeCategorieService} from './shared/tree-categorie.service';
import {TreeCategorie} from './shared/tree-categorie.model';

@Component({
  selector: 'app-tree-categorie',
  templateUrl: './tree-categorie.component.html'
})

export class TreeCategorieComponent implements OnInit {

  private treeCategorie: TreeCategorie;
  private isDataLoaded: boolean;
  
  constructor(@Inject(APP_CONFIG) appConfig: IAppConfig,
    private progressBarService: ProgressBarService,
    translateService: TranslateService,
    private matIconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private treeCategorieService: TreeCategorieService) {
      this.isDataLoaded = false;
  }

  ngOnInit() {
    this.treeCategorieService.getTreeCategorie().subscribe((treeCategorieResult: TreeCategorie) => {
      this.treeCategorie = treeCategorieResult;
      this.isDataLoaded = true;
    });
  }
}
