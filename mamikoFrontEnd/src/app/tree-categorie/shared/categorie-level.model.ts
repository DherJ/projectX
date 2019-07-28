import { LibelleTranslation } from './libelle-translation.model';

export class CategorieLevel {
  constructor(
    public levelId: number,
    public levelNum: number,
    public levelParentNum: number,
    public levelParentId: number,
    public libelles: Map<String, LibelleTranslation>,
    public childrens: CategorieLevel[]) {}
}
