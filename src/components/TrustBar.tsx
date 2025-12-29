import React from 'react';

const TrustBar: React.FC = () => {
  return (
    <section className="bg-gray-50 py-8 border-t border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center justify-center">
            <svg className="h-10 w-10 mb-2 text-brand-blue-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" /></svg>
            <p className="text-sm font-semibold text-gray-600">Clínicas con Acreditación JCI</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <svg className="h-10 w-10 mb-2 text-brand-blue-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 4h5m-5 4h5m-5-4h.01M9 7h.01M13 7h.01M15 7h.01M9 11h.01M13 11h.01M15 11h.01M9 15h.01M13 15h.01M15 15h.01M9 19h.01M13 19h.01M15 19h.01" /></svg>
            <p className="text-sm font-semibold text-gray-600">Cirujanos Certificados SCCP</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <svg className="h-10 w-10 mb-2 text-brand-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            <p className="text-sm font-semibold text-gray-600">Equipo de Soporte en Estados Unidos</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <svg className="h-10 w-10 mb-2 text-brand-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <p className="text-sm font-semibold text-gray-600">Acompañamiento Premium</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
