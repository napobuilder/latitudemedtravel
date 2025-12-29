import { create } from 'zustand';
import { Servicio } from '../data';

type CartItem = {
  servicio: Servicio;
};

type CartState = {
  item: CartItem | null; // Solo una consulta a la vez
  addToCart: (servicio: Servicio) => void;
  clearCart: () => void;
  stripePaymentLink: string; // Link de Stripe para el pago
};

const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/4gM6oH5ZDgbX1ug5K1cjS01';

export const useCart = create<CartState>((set) => ({
  item: null,
  stripePaymentLink: STRIPE_PAYMENT_LINK,
  addToCart: (servicio) =>
    set((state) => {
      // Si ya hay una consulta, la reemplazamos
      return { item: { servicio } };
    }),
  clearCart: () => set({ item: null }),
}));
