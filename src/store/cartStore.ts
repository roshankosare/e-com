import { create } from "zustand";

export const useCartStore = create<CartState>((set) => ({
  itemCount: Number(localStorage.getItem("itemCount")) || 0,
  items: JSON.parse(localStorage.getItem("cart") || "[]"),
  addToCart: (product: Product, size: string | null, task: "add" | "sub") =>
    set((state) => {
      const existingItem = state.items.find(
        (item) => item.product.id === product.id && item.size === size
      );
      if (existingItem) {
        const currentCart = state.items.map((p) =>
          p.product.id === existingItem.product.id && p.size === size
            ? {
                ...p,
                quantity: task === "add" ? p.quantity + 1 : p.quantity - 1,
              }
            : { ...p }
        );
        localStorage.setItem("cart", JSON.stringify(currentCart));
        return {
          items: currentCart,
        };
      } else {
        const itemCount = state.itemCount + 1;
        const items = [
          ...state.items,
          { product: product, quantity: 1, size: size, id: Date.now() },
        ];
        localStorage.setItem("itemCount", JSON.stringify(itemCount));
        localStorage.setItem("cart", JSON.stringify(items));
        return {
          itemCount: itemCount,
          items: items,
        };
      }
    }),
  removeFromCart: (id, size) =>
    set((state) => {
      const itemCount = state.itemCount - 1;
      const items = state.items.filter(
        (i) => !(i.product.id === id && i.size === size)
      );
      localStorage.setItem("itemCount", JSON.stringify(itemCount));
      localStorage.setItem("cart", JSON.stringify(items));
      return {
        itemCount: itemCount,
        items: items,
      };
    }),
}));
