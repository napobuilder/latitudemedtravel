import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartSidebar from './CartSidebar';
import MobileMenu from './MobileMenu';
import ServicesIcon from './ServicesIcon';
import ServicesMenu from './ServicesMenu';

const Header: React.FC = () => {
    const [isCartOpen, setCartOpen] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isServicesMenuOpen, setServicesMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!isMenuOpen);
        if (isCartOpen) setCartOpen(false);
        if (isServicesMenuOpen) setServicesMenuOpen(false);
    };

    const handleCartToggle = () => {
        setCartOpen(!isCartOpen);
        if (isMenuOpen) setMenuOpen(false);
        if (isServicesMenuOpen) setServicesMenuOpen(false);
    };

    const handleServicesMenuToggle = () => {
        setServicesMenuOpen(!isServicesMenuOpen);
        if (isCartOpen) setCartOpen(false);
        if (isMenuOpen) setMenuOpen(false);
    };

    return (
        <>
            <header className="fixed top-0 w-full bg-white/80 backdrop-blur-lg shadow-md z-30 transition-all duration-300">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <Link to="/" className="pl-4 flex-shrink-0 flex items-center gap-3">
                            <img src="https://i.imgur.com/HKRbp5a.png" alt="Icono de Latitude Med Travel" className="h-12 w-auto" />
                            <span className="font-display text-base sm:text-xl tracking-wide uppercase">
                                <span className="text-brand-yellow-500">LATITUDE</span>
                                <span className="text-brand-blue-900"> MED TRAVEL</span>
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-1">
                            <a href="#proceso" className="text-gray-700 hover:bg-gray-200/70 font-medium px-4 py-2 rounded-full transition-colors">Cómo Funciona</a>
                            <div className="relative group">
                                <button className="flex items-center gap-1.5 text-gray-700 hover:bg-gray-200/70 font-medium px-4 py-2 rounded-full transition-colors">
                                    <span>Servicios</span>
                                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                                </button>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-screen max-w-4xl p-4 opacity-0 scale-95 group-hover:scale-100 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 grid grid-cols-2 gap-2 p-4">
                                        <Link to="/servicios/liposuccion-hd" className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                                            <div className="flex-shrink-0 bg-brand-yellow-400/20 text-brand-blue-900 rounded-lg p-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.085a2 2 0 00-1.736.97l-2.714 5.428a2 2 0 001.736 2.97h4.615a2 2 0 002-2z" /></svg>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-brand-blue-900">Cirugía Plástica Corporal</h3>
                                                <p className="text-sm text-gray-600">Define tu silueta con procedimientos de contorno corporal.</p>
                                            </div>
                                        </Link>
                                        <Link to="/servicios/cirugia-facial" className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                                            <div className="flex-shrink-0 bg-brand-yellow-400/20 text-brand-blue-900 rounded-lg p-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-brand-blue-900">Cirugía Plástica Facial</h3>
                                                <p className="text-sm text-gray-600">Armoniza tus rasgos y rejuvenece tu apariencia.</p>
                                            </div>
                                        </Link>
                                        <Link to="/servicios/medicina-estetica" className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                                            <div className="flex-shrink-0 bg-brand-yellow-400/20 text-brand-blue-900 rounded-lg p-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-brand-blue-900">Medicina Estética Facial</h3>
                                                <p className="text-sm text-gray-600">Tratamientos no invasivos para una piel radiante.</p>
                                            </div>
                                        </Link>
                                        <Link to="/servicios/diseno-de-sonrisa" className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                                            <div className="flex-shrink-0 bg-brand-yellow-400/20 text-brand-blue-900 rounded-lg p-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-brand-blue-900">Diseño de Sonrisa</h3>
                                                <p className="text-sm text-gray-600">Alcanza la sonrisa perfecta con nuestros expertos dentales.</p>
                                            </div>
                                        </Link>
                                        <Link to="/servicios/implante-capilar" className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors col-span-2 justify-center">
                                            <div className="flex-shrink-0 bg-brand-yellow-400/20 text-brand-blue-900 rounded-lg p-3">
                                               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h1a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.884 4.078A11.956 11.956 0 0112 3c2.345 0 4.543.896 6.116 2.422m0 0l1.414 1.414M1.67 17.657l1.414-1.414m17.243 0l-1.414 1.414M12 21a9 9 0 100-18 9 9 0 000 18z" /></svg>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-brand-blue-900">Implante Capilar</h3>
                                                <p className="text-sm text-gray-600">Recupera la densidad y confianza con técnicas avanzadas.</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <a href="#expertos" className="text-gray-700 hover:bg-gray-200/70 font-medium px-4 py-2 rounded-full transition-colors">Nuestros Expertos</a>
                            <a href="#faq" className="text-gray-700 hover:bg-gray-200/70 font-medium px-4 py-2 rounded-full transition-colors">Preguntas Frecuentes</a>
                        </nav>

                        {/* Action Buttons */}
                        <div className="flex items-center space-x-2 pr-4">
                            <a href="#contacto" className="hidden sm:inline-block bg-brand-yellow-400 text-brand-blue-900 font-semibold py-2 px-5 rounded-full text-sm hover:bg-brand-yellow-500 transition-colors duration-300 shadow">
                                Consulta Virtual
                            </a>
                            <div className="lg:hidden">
                                <ServicesIcon onClick={handleServicesMenuToggle} />
                            </div>
                            <button onClick={handleCartToggle} className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </button>
                            <button onClick={handleMenuToggle} className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors duration-300">
                                <svg id="menu-open-icon" className="w-7 h-7 text-brand-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            {isMenuOpen && <MobileMenu isOpen={isMenuOpen} onClose={() => setMenuOpen(false)} />}
            {isCartOpen && <CartSidebar isOpen={isCartOpen} onClose={() => setCartOpen(false)} />}
            {isServicesMenuOpen && <ServicesMenu isOpen={isServicesMenuOpen} onClose={() => setServicesMenuOpen(false)} />}
        </>
    );
};

export default Header;