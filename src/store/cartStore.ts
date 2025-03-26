import { create } from "zustand";

export const useCartStore = create<CartState>((set) => ({
  itemCount: 0,
  items: [],
  addToCart: (product: Product, size: string | null, task: "add" | "sub") =>
    set((state) => {
      const existingItem = state.items.find(
        (item) => item.product.id === product.id && item.size === size
      );
      if (existingItem) {
        return {
          items: state.items.map((p) =>
            p.product.id === existingItem.product.id && p.size === size
              ? {
                  ...p,
                  quantity: task === "add" ? p.quantity + 1 : p.quantity - 1,
                }
              : { ...p }
          ),
        };
      } else {
        return {
          itemCount: state.itemCount + 1,
          items: [
            ...state.items,
            { product: product, quantity: 1, size: size, id: Date.now() },
          ],
        };
      }
    }),
  removeFromCart: (id, size) =>
    set((state) => ({
      items: state.items.filter(
        (i) => !(i.product.id === id && i.size === size)
      ),
    })),
}));
