export type Product = {
  id: number;
  title: string;
  image: string;
  rating: number;
  price: number;
  oldPrice?: number;
  discount?: string;
};
