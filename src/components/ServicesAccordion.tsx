import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { servicios } from '../data';

const ServicesAccordion: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <div className="relative" ref={dropdownRef}>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300">
                <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M10 4H4V10H10V4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20 4H14V10H20V4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 14H4V20H10V14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20 14H14V20H20V14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            <div className={`absolute top-full right-0 mt-3 w-64 p-2 transition-all duration-300 transform ${isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                <div className="bg-white rounded-xl shadow-lg border border-gray-100">
                    <div className="p-2 space-y-1">
                        {servicios.map(servicio => (
                            <Link 
                                key={servicio.id} 
                                to={`/servicios/${servicio.id}`}
                                onClick={() => setIsOpen(false)} 
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium"
                            >
                                {servicio.nombre}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesAccordion;
