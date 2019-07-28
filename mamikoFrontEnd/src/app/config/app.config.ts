import {InjectionToken} from '@angular/core';

import {IAppConfig} from './iapp.config';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: IAppConfig = {
  webServiceUrl: 'http://localhost:8080/',
  routes: {
    treeCategorie: 'treecategorie',
    heroes: 'heroes',
    users: 'users'
  },
  endpoints: {
    heroes: 'https://nodejs-example-app.herokuapp.com/heroes',
    users: 'http://localhost:8080/users/',
    parameters: 'http://localhost:8080/parameters/',
    treeCategorie: 'http://localhost:8080/tree-categorie/'
  },
  votesLimit: 3,
  topHeroesLimit: 4,
  snackBarDuration: 3000,
  repositoryURL: 'https://github.com/DherJ',
  languages: [
    'English',
    'Français'
  ],
  defaultLanguage: 'fr'
};
