import React from 'react';

interface ServicesIconProps {
    onClick: () => void;
}

const ServicesIcon: React.FC<ServicesIconProps> = ({ onClick }) => {
    return (
        <button onClick={onClick} className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300">
            <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M10 4H4V10H10V4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 4H14V10H20V4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 14H4V20H10V14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 14H14V20H20V14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
    );
};

export default ServicesIcon;
