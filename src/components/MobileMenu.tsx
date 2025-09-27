import React, { useEffect } from 'react';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => document.body.classList.remove('overflow-hidden');
    }, [isOpen]);

    return (
        <div className={`lg:hidden fixed inset-0 bg-white/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center text-center transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'invisible opacity-0'}`}>
            <button onClick={onClose} className="absolute top-6 right-6 p-2">
                <svg id="menu-close-icon" className="w-7 h-7 text-brand-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <nav className="flex flex-col space-y-8 text-2xl font-bold">
                <a href="#proceso" onClick={onClose} className="text-gray-700 hover:text-brand-blue-500 transition-colors duration-300">Cómo Funciona</a>
                <a href="#expertos" onClick={onClose} className="text-gray-700 hover:text-brand-blue-500 transition-colors duration-300">Nuestros Expertos</a>
                <a href="#faq" onClick={onClose} className="text-gray-700 hover:text-brand-blue-500 transition-colors duration-300">Preguntas Frecuentes</a>
                <a href="#contacto" onClick={onClose} className="mt-4 inline-block bg-brand-yellow-400 text-brand-blue-900 font-semibold py-3 px-8 rounded-full text-lg hover:bg-brand-yellow-500 transition-colors duration-300 shadow">
                    Consulta Virtual
                </a>
            </nav>
        </div>
    );
};

export default MobileMenu;
