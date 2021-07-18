export type Category = 'Foods' | 'Drinks' | 'Snacks' | 'Sauces';
export interface ISustenance {
  category: Category;
  imageURL: string;
  name: string;
  price: string;
}
