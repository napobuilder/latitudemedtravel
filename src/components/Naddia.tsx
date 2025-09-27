import React from 'react';

const Naddia: React.FC = () => {
  return (
    <section id="naddia" className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-900 mb-4">Conoce a Nuestra Broker</h2>
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300 p-6">
            <svg className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-brand-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
            <h3 className="text-xl font-bold text-brand-blue-900">Naddia Patricia</h3>
            <p className="text-brand-blue-700 font-semibold mb-2">Broker y Asesora Principal</p>
            <p className="text-gray-600 text-sm">[Placeholder for description about Naddia. We can add more information here later.]</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Naddia;
