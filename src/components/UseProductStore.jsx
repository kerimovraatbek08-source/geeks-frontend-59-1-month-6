import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [
    {
      id: 1,
      title: "iPhone 15",
      description: "Apple smartphone",
      price: 900,
    },
  ],

  addProduct: (product) =>
    set((state) => ({
      products: [...state.products, { id: Date.now(), ...product }],
    })),

  removeProduct: (id) =>
    set((state) => ({
      products: state.products.filter((item) => item.id !== id),
    })),
}));
