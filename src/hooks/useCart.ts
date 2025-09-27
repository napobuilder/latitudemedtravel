import { create } from 'zustand';
import { Servicio } from '../data';

type CartItem = {
  servicio: Servicio;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  addToCart: (servicio: Servicio) => void;
  removeFromCart: (serviceId: string) => void;
  clearCart: () => void;
};

export const useCart = create<CartState>((set) => ({
  items: [],
  addToCart: (servicio) =>
    set((state) => {
      const existingItem = state.items.find(
        (item) => item.servicio.id === servicio.id
      );
      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.servicio.id === servicio.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return { items: [...state.items, { servicio, quantity: 1 }] };
      }
    }),
  removeFromCart: (serviceId) =>
    set((state) => ({
      items: state.items.filter((item) => item.servicio.id !== serviceId),
    })),
  clearCart: () => set({ items: [] }),
}));
