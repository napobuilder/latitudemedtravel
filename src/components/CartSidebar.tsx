import React, { useEffect } from 'react';
import { useCart } from '../hooks/useCart';

interface CartSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
    const { items, removeFromCart } = useCart();

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => document.body.classList.remove('overflow-hidden');
    }, [isOpen]);

    const total = items.reduce((acc, item) => acc + item.servicio.precioServicio * item.quantity, 0);

    return (
        <div className={`fixed inset-0 z-50 ${isOpen ? '' : 'invisible'}`}>
            <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={onClose}></div>
            <div className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform duration-300 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex items-center justify-between p-6 border-b">
                    <h2 className="text-2xl font-bold text-brand-blue-900">Tu Consulta</h2>
                    <button onClick={onClose} className="p-2 text-gray-500 hover:text-gray-800">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
                {items.length === 0 ? (
                    <div className="flex-grow p-6 flex flex-col items-center justify-center text-center">
                        <svg className="w-24 h-24 text-gray-300 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1"><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <h3 className="text-xl font-semibold text-gray-700">Tu carrito está vacío</h3>
                        <p className="text-gray-500 mt-2">Agrega procedimientos para tu consulta.</p>
                    </div>
                ) : (
                    <div className="flex-grow overflow-y-auto p-6">
                        {items.map(item => (
                            <div key={item.servicio.id} className="flex items-center justify-between mb-4">
                                <div>
                                    <h3 className="font-bold">{item.servicio.nombre}</h3>
                                    <p className="text-sm text-gray-500">Cantidad: {item.quantity}</p>
                                    <p className="text-sm font-bold">${item.servicio.precioServicio.toLocaleString()}</p>
                                </div>
                                <button onClick={() => removeFromCart(item.servicio.id)} className="text-red-500 hover:text-red-700">
                                    Eliminar
                                </button>
                            </div>
                        ))}
                    </div>
                )}
                <div className="p-6 border-t bg-gray-50">
                    <div className="flex justify-between items-center mb-4 text-lg">
                        <span className="font-medium text-gray-600">Subtotal</span>
                        <span className="font-bold text-brand-blue-900">${total.toLocaleString()}</span>
                    </div>
                    <a href="#" className="block w-full text-center bg-brand-yellow-400 text-brand-blue-900 font-bold py-3 px-6 rounded-full hover:bg-brand-yellow-500 transition-colors">
                        Continuar
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CartSidebar;
