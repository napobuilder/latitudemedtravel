import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios/:serviceId" element={<ServiceDetailPage />} />
        </Routes>
      </main>
    </>
  );
};

export default App;