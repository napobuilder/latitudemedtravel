import React, { useEffect } from 'react';
import { useCart } from '../hooks/useCart';

interface CartSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
    const { item, clearCart, stripePaymentLink, setShouldOpenCart } = useCart();

    const handleClose = () => {
        setShouldOpenCart(false);
        onClose();
    };

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => document.body.classList.remove('overflow-hidden');
    }, [isOpen]);

    const handleCheckout = () => {
        // Redirigir a Stripe
        window.open(stripePaymentLink, '_blank');
    };

    return (
        <div className={`fixed inset-0 z-50 ${isOpen ? '' : 'invisible'}`}>
            <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={handleClose}></div>
            <div className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform duration-300 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex items-center justify-between p-6 border-b">
                    <h2 className="text-2xl font-bold text-brand-blue-900">Consulta Virtual</h2>
                    <button onClick={handleClose} className="p-2 text-gray-500 hover:text-gray-800">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
                {!item ? (
                    <div className="flex-grow p-6 flex flex-col items-center justify-center text-center">
                        <svg className="w-24 h-24 text-gray-300 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1"><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <h3 className="text-xl font-semibold text-gray-700">No hay consulta seleccionada</h3>
                        <p className="text-gray-500 mt-2">Selecciona un procedimiento para agendar tu consulta virtual.</p>
                    </div>
                ) : (
                    <div className="flex-grow overflow-y-auto p-6">
                        <div className="bg-gray-50 rounded-xl p-6 mb-4">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                    <h3 className="font-bold text-lg text-brand-blue-900 mb-2">{item.servicio.nombre}</h3>
                                    <p className="text-sm text-gray-600 mb-1">{item.servicio.subtitulo}</p>
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                                        item.servicio.categoria === 'facial' 
                                            ? 'bg-blue-100 text-blue-800' 
                                            : 'bg-purple-100 text-purple-800'
                                    }`}>
                                        {item.servicio.categoria === 'facial' ? 'Procedimiento Facial' : 'Procedimiento Corporal'}
                                    </span>
                                </div>
                            </div>
                            <div className="border-t pt-4 mt-4">
                                <p className="text-sm text-gray-600 mb-2">Esta consulta virtual incluye:</p>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span>Evaluación personalizada del procedimiento</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span>Revisión de tu caso con el especialista</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span>Información sobre el procedimiento y resultados esperados</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span>Orientación sobre el proceso y próximos pasos</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span>Presupuesto personalizado</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
                <div className="p-6 border-t bg-gray-50">
                    <div className="flex justify-between items-center mb-4 text-lg">
                        <span className="font-medium text-gray-600">Total de la Consulta</span>
                        <span className="font-bold text-brand-blue-900">${item?.servicio.precioConsulta || 55} USD</span>
                    </div>
                    {item ? (
                        <button 
                            onClick={handleCheckout}
                            className="block w-full text-center bg-brand-yellow-400 text-brand-blue-900 font-bold py-3 px-6 rounded-full hover:bg-brand-yellow-500 transition-colors mb-2"
                        >
                            Proceder al Pago con Stripe
                        </button>
                    ) : (
                        <button 
                            disabled
                            className="block w-full text-center bg-gray-300 text-gray-500 font-bold py-3 px-6 rounded-full cursor-not-allowed"
                        >
                            Selecciona un Procedimiento
                        </button>
                    )}
                    <p className="text-xs text-gray-500 text-center mt-2">
                        Pago seguro procesado por Stripe
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CartSidebar;
