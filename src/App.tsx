import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useLanguage } from './contexts/LanguageContext';
import { getLanguageFromPath } from './utils/routes';
import HomePage from './pages/HomePage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';

// Componente para manejar scroll restoration
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Solo hacer scroll al top si NO hay hash en la URL
    // Si hay hash, dejamos que HomePage maneje el scroll
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

// Componente para redirigir desde / a /es/ o /en/
const RootRedirect: React.FC = () => {
  const { language } = useLanguage();
  return <Navigate to={`/${language}`} replace />;
};

// Componente wrapper para sincronizar idioma con la URL
const LanguageSync: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    // Si la URL tiene un prefijo de idioma, sincronizar el contexto
    const urlLanguage = getLanguageFromPath(location.pathname);
    if (urlLanguage && urlLanguage !== language) {
      setLanguage(urlLanguage);
    }
  }, [location.pathname, language, setLanguage]);

  return null;
};

const App: React.FC = () => {
  return (
    <>
      <LanguageSync />
      <ScrollToTop />
      <Header />
      <main className="pt-20">
        <Routes>
          {/* Redirigir / a /es/ o /en/ según preferencia */}
          <Route path="/" element={<RootRedirect />} />
          
          {/* Rutas en español */}
          <Route path="/es" element={<HomePage />} />
          <Route path="/es/servicios/:serviceId" element={<ServiceDetailPage />} />
          
          {/* Rutas en inglés */}
          <Route path="/en" element={<HomePage />} />
          <Route path="/en/procedures/:serviceId" element={<ServiceDetailPage />} />
          
          {/* 404 para cualquier otra ruta */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
};

export default App;