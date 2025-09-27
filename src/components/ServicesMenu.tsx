import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { servicios } from '../data';

interface ServicesMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const ServicesMenu: React.FC<ServicesMenuProps> = ({ isOpen, onClose }) => {
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
                <svg className="w-7 h-7 text-brand-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-8">Nuestros Servicios</h2>
            <nav className="flex flex-col space-y-6 text-2xl font-bold">
                {servicios.map(servicio => (
                    <Link 
                        key={servicio.id} 
                        to={`/servicios/${servicio.id}`}
                        onClick={onClose} 
                        className="text-brand-blue-900 hover:text-brand-yellow-500 transition-colors duration-300"
                    >
                        {servicio.nombre}
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default ServicesMenu;
