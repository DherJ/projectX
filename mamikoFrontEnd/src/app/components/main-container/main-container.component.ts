import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ArticlesService } from '../../services/articles.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Article } from '../../models/article.model';
import { CategorieLevel } from '../../models/categorie-level.model';
import { TreeCategorieService } from '../../services/tree-categorie.service';
import { TreeCategorie } from '../../models/tree-categorie.model';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {

  filterForm: FormGroup;

  private articles: Article[]=[];
  private treeCategorie: TreeCategorie=new TreeCategorie(null);
  private selectedCategorie: CategorieLevel;
  private articlesLoaded: boolean;
  lang: string;

  constructor(private fb: FormBuilder, private articlesService: ArticlesService, private treeCategorieService: TreeCategorieService, translateService: TranslateService) { 
    this.createForm();
    this.articlesLoaded = false;
    this.lang = translateService.currentLang;
    translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.lang = translateService.currentLang;
        this.articlesService.getArticles(this.lang).subscribe((articles: Article[]) => {
          this.articles = articles;
          this.articlesLoaded = true;
        });
    });     
  }

  ngOnInit() {

    this.articlesService.getArticles(this.lang).subscribe((articles: Article[]) => {
      this.articles = articles;
      this.articlesLoaded = true;
    });

    this.treeCategorieService.getTreeCategorie().subscribe((treeCategorieResult: TreeCategorie) => {
      this.treeCategorie = treeCategorieResult;
    }); 
  }

  createForm() {
    this.filterForm = this.fb.group({
       name: ['', this.filterForm ]
    });
  }

  selectCategorie(categorie: CategorieLevel) {
    console.log('toto');
  }

  formatLabel(value: number) {
    return value + '€';
  }
}
