export type TProduct = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: string; count: string };
  title: string;
  quantity?: number;
};
