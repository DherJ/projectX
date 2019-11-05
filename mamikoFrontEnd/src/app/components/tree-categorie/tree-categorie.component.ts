import { Component, Inject, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {APP_CONFIG, AppConfig} from '../../config/app.config';
import {IAppConfig} from '../../config/iapp.config';
import {ProgressBarService} from '../../services/progress-bar.service';
import { MatIconRegistry } from '@angular/material/icon';
import {TranslateService} from '@ngx-translate/core';
import {TreeCategorieService} from '../../services/tree-categorie.service';
import {TreeCategorie} from '../../models/tree-categorie.model';
import { Observable } from 'rxjs';
import { CategorieLevel } from '../../models/categorie-level.model';

@Component({
  selector: 'app-tree-categorie',
  templateUrl: './tree-categorie.component.html'
})

export class TreeCategorieComponent implements OnInit {

  private treeCategorie: TreeCategorie;
  private translateService: TranslateService;

  constructor(@Inject(APP_CONFIG) appConfig: IAppConfig,
    private progressBarService: ProgressBarService,
    translateService: TranslateService,
    private matIconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private treeCategorieService: TreeCategorieService) {

      this.treeCategorie = new TreeCategorie(null);
      this.translateService = translateService;
      this.treeCategorieService.getTreeCategorie().subscribe((treeCategorieResult: TreeCategorie) => {
        this.treeCategorie = treeCategorieResult;
      }); 
  }

  ngOnInit() {
  }

  getLabelOfCategorie(categorie: CategorieLevel): string {
    return categorie.libelles[this.translateService.currentLang] ? categorie.libelles[this.translateService.currentLang].label : 'undefined';
  }
}
