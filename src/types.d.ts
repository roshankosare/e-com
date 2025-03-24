declare global {
  type Categorie = {
    name: string;
    image: string;
  };

  type Product = {
    title: string;
    image: string;
    price: number;
    category: string;
    description: string;
    rating: {
      rate: number;
      count: number;
    };
    id: number;
  };
}
export {};
