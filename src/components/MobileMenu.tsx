import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => document.body.classList.remove('overflow-hidden');
    }, [isOpen]);

    // Helper para manejar enlaces a secciones de la homepage
    const handleSectionLink = (sectionId: string, e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onClose(); // Cerrar el menú móvil
        
        const sectionName = sectionId.replace('#', '');
        
        if (location.pathname === '/') {
            // Si estamos en homepage, hacer scroll suave con offset para el header
            setTimeout(() => {
                const element = document.getElementById(sectionName);
                if (element) {
                    const headerOffset = 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 10);
        } else {
            // Si estamos en otra página, navegar a homepage con hash
            navigate(`/#${sectionName}`);
        }
    };

    return (
        <div className={`lg:hidden fixed inset-0 bg-white/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center text-center transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'invisible opacity-0'}`}>
            <button onClick={onClose} className="absolute top-6 right-6 p-2">
                <svg id="menu-close-icon" className="w-7 h-7 text-brand-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <nav className="flex flex-col space-y-8 text-2xl font-bold">
                <a 
                    href="#proceso" 
                    onClick={(e) => handleSectionLink('#proceso', e)} 
                    className="text-gray-700 hover:text-brand-blue-500 transition-colors duration-300 cursor-pointer"
                >
                    Cómo Funciona
                </a>
                <a 
                    href="#expertos" 
                    onClick={(e) => handleSectionLink('#expertos', e)} 
                    className="text-gray-700 hover:text-brand-blue-500 transition-colors duration-300 cursor-pointer"
                >
                    Nuestros Expertos
                </a>
                <a 
                    href="#faq" 
                    onClick={(e) => handleSectionLink('#faq', e)} 
                    className="text-gray-700 hover:text-brand-blue-500 transition-colors duration-300 cursor-pointer"
                >
                    Preguntas Frecuentes
                </a>
                <a 
                    href="#contacto" 
                    onClick={(e) => handleSectionLink('#contacto', e)} 
                    className="mt-4 inline-block bg-brand-yellow-400 text-brand-blue-900 font-semibold py-3 px-8 rounded-full text-lg hover:bg-brand-yellow-500 transition-colors duration-300 shadow cursor-pointer"
                >
                    Valoración
                </a>
            </nav>
        </div>
    );
};

export default MobileMenu;
