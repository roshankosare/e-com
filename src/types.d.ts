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

  type CartItem = {
    id: number;
    product: Product;
    size: string | null;
    quantity: number;
  };

  type CartState = {
    items: CartItem[];
    itemCount: number;
    addToCart: (
      product: Product,
      size: string | null,
      task: "add" | "sub"
    ) => void;
    removeFromCart: (id: number, size: string | null) => void;
  };
}

export {};
