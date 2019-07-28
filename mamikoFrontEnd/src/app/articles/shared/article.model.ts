
export class Article {
  constructor(
    public articleId: number,
    public articleLabel: string,
    public articleDescription: string,
    public articlePriceHT: number,
    public articlePriceTTC: number,
    public categorieId: number) {}
}
