import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import CartSidebar from './CartSidebar';
import MobileMenu from './MobileMenu';
import ServicesIcon from './ServicesIcon';
import ServicesMenu from './ServicesMenu';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import { servicios } from '../data';
import { useCart } from '../hooks/useCart';
import { getLanguagePrefix, buildLocalizedPath, getServicesRouteName } from '../utils/routes';

const Header: React.FC = () => {
    const [isCartOpen, setCartOpen] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isServicesMenuOpen, setServicesMenuOpen] = useState(false);
    const [cartAnimation, setCartAnimation] = useState(false);
    const { item, shouldOpenCart, setShouldOpenCart } = useCart();
    const { language } = useLanguage();
    const t = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();
    const languagePrefix = getLanguagePrefix(location.pathname) || `/${language}`;

    // Helper para manejar enlaces a secciones de la homepage
    const handleSectionLink = (sectionId: string, e?: React.MouseEvent<HTMLAnchorElement>) => {
        if (e) {
            e.preventDefault();
        }
        
        const sectionName = sectionId.replace('#', '');
        const isHomePage = location.pathname === `/${language}` || location.pathname === '/es' || location.pathname === '/en';
        
        if (isHomePage) {
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
            navigate(`${languagePrefix}#${sectionName}`);
        }
    };

    // Abrir carrito automáticamente cuando se agrega un item
    useEffect(() => {
        if (shouldOpenCart && item) {
            // Animación suave del badge primero
            setCartAnimation(true);
            // Pequeño delay antes de abrir el carrito para mejor UX
            setTimeout(() => {
                setCartOpen(true);
                setShouldOpenCart(false);
            }, 150);
            // Resetear animación después de un tiempo
            setTimeout(() => setCartAnimation(false), 800);
        }
    }, [shouldOpenCart, item, setShouldOpenCart]);

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
                        <Link to={languagePrefix} className="pl-4 flex-shrink-0 flex items-center gap-3">
                            <img src="https://i.imgur.com/HKRbp5a.png" alt="Icono de Latitude Med Travel" className="h-12 w-auto" />
                            <span className="font-display text-base sm:text-xl tracking-wide uppercase">
                                <span className="text-brand-yellow-500">LATITUDE</span>
                                <span className="text-brand-blue-900"> MED TRAVEL</span>
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-1">
                            <a 
                                href="#proceso" 
                                onClick={(e) => handleSectionLink('#proceso', e)}
                                className="text-gray-700 hover:bg-gray-200/70 font-medium px-4 py-2 rounded-full transition-colors cursor-pointer"
                            >
                                {t.header.nav.howItWorks}
                            </a>
                            <div className="relative group">
                                <button className="flex items-center gap-1.5 text-gray-700 hover:bg-gray-200/70 font-medium px-4 py-2 rounded-full transition-colors">
                                    <span>{t.header.nav.services}</span>
                                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                                </button>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-screen max-w-6xl p-4 opacity-0 scale-95 group-hover:scale-100 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 grid grid-cols-2 gap-6 p-6">
                                        {/* Procedimientos Faciales */}
                                        <div>
                                            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-200">
                                                <div className="flex-shrink-0 bg-brand-yellow-400/20 text-brand-blue-900 rounded-lg p-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                                </div>
                                                <h3 className="font-bold text-brand-blue-900 text-lg">{t.header.servicesMenu.facialProcedures}</h3>
                                            </div>
                                            <div className="space-y-2">
                                                {servicios.filter(s => s.categoria === 'facial').map(servicio => (
                                                    <Link
                                                        key={servicio.id}
                                                        to={buildLocalizedPath(language, `/${getServicesRouteName(language)}/${servicio.id}`)}
                                                        className="block px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm text-gray-700 hover:text-brand-blue-900"
                                                    >
                                                        {servicio.nombre}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        {/* Procedimientos Corporales */}
                                        <div>
                                            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-200">
                                                <div className="flex-shrink-0 bg-brand-yellow-400/20 text-brand-blue-900 rounded-lg p-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.085a2 2 0 00-1.736.97l-2.714 5.428a2 2 0 001.736 2.97h4.615a2 2 0 002-2z" /></svg>
                                                </div>
                                                <h3 className="font-bold text-brand-blue-900 text-lg">{t.header.servicesMenu.bodyProcedures}</h3>
                                            </div>
                                            <div className="space-y-2">
                                                {servicios.filter(s => s.categoria === 'corporal').map(servicio => (
                                                    <Link
                                                        key={servicio.id}
                                                        to={buildLocalizedPath(language, `/${getServicesRouteName(language)}/${servicio.id}`)}
                                                        className="block px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm text-gray-700 hover:text-brand-blue-900"
                                                    >
                                                        {servicio.nombre}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a 
                                href="#expertos" 
                                onClick={(e) => handleSectionLink('#expertos', e)}
                                className="text-gray-700 hover:bg-gray-200/70 font-medium px-4 py-2 rounded-full transition-colors cursor-pointer"
                            >
                                {t.header.nav.experts}
                            </a>
                            <a 
                                href="#faq" 
                                onClick={(e) => handleSectionLink('#faq', e)}
                                className="text-gray-700 hover:bg-gray-200/70 font-medium px-4 py-2 rounded-full transition-colors cursor-pointer"
                            >
                                {t.header.nav.faq}
                            </a>
                        </nav>

                        {/* Action Buttons */}
                        <div className="flex items-center space-x-2 pr-4">
                            <a 
                                href="#contacto" 
                                onClick={(e) => handleSectionLink('#contacto', e)}
                                className="hidden sm:inline-block bg-brand-yellow-400 text-brand-blue-900 font-semibold py-2 px-5 rounded-full text-sm hover:bg-brand-yellow-500 transition-colors duration-300 shadow cursor-pointer"
                            >
                                {t.header.cta.consultation}
                            </a>
                            <LanguageSelector />
                            <div className="lg:hidden">
                                <ServicesIcon onClick={handleServicesMenuToggle} />
                            </div>
                            <button onClick={handleCartToggle} className="relative p-2 rounded-full hover:bg-gray-100 transition-colors duration-300">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                {item && (
                                    <span className={`absolute -top-1 -right-1 bg-brand-yellow-400 text-brand-blue-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center transition-all duration-500 ${cartAnimation ? 'scale-125' : 'scale-100'}`}>
                                        1
                                    </span>
                                )}
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