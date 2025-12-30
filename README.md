# Latitude Med Travel

Sitio web profesional de turismo médico especializado en cirugía plástica en Colombia. Plataforma moderna que conecta pacientes desde Estados Unidos con cirujanos certificados y clínicas acreditadas en Colombia.

## 🎯 Descripción del Proyecto

Latitude Med Travel es una agencia de turismo médico que actúa como intermediario (broker) entre pacientes de Estados Unidos y cirujanos de élite en Colombia. El sitio web ofrece información detallada sobre procedimientos de cirugía plástica, permite agendar valoraciones virtuales y facilita todo el proceso de coordinación del viaje médico.

### Modelo de Negocio
- **Servicio Principal:** Gestión y facilitación de cirugías estéticas para clientes que viajan a Colombia
- **Propuesta de Valor:** Paquete completo con conexión a doctores de élite, coordinación de citas, viaje y acompañamiento
- **Monetización:** Comisión por cada cirugía/venta concretada

## 🚀 Tecnologías Utilizadas

- **React 19.1.1** - Framework principal
- **TypeScript** - Tipado estático
- **Vite 5.2.0** - Build tool y dev server
- **React Router DOM 7.9.3** - Enrutamiento
- **Tailwind CSS 3.4.3** - Estilos
- **Framer Motion 12.23.22** - Animaciones
- **Zustand 5.0.8** - Gestión de estado (carrito de compras)
- **ESLint** - Linter para calidad de código

## 📦 Instalación

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn

### Pasos

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/napobuilder/latitudemedtravel.git
   cd latitudemedtravel
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   - El servidor se iniciará en `http://localhost:5173` (o el puerto que Vite asigne)

## 🛠️ Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza el build de producción
- `npm run lint` - Ejecuta el linter para verificar calidad de código

## 📁 Estructura del Proyecto

```
LMT-website/
├── public/                 # Archivos estáticos
│   ├── assets/
│   │   ├── images/         # Imágenes del sitio
│   │   ├── icons/          # Iconos SVG
│   │   ├── videos/         # Videos
│   │   └── favicon_io/     # Favicons
├── src/
│   ├── components/         # Componentes React reutilizables
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Procedures.tsx
│   │   ├── Process.tsx
│   │   ├── Experts.tsx
│   │   ├── Team.tsx
│   │   ├── Faq.tsx
│   │   ├── ContactCta.tsx
│   │   └── ...
│   ├── pages/              # Páginas principales
│   │   ├── HomePage.tsx
│   │   ├── ServiceDetailPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── hooks/              # Custom hooks
│   │   └── useCart.ts      # Hook para carrito de compras
│   ├── data.ts             # Datos centralizados (servicios, doctores, equipo)
│   ├── css/
│   │   └── main.css        # Estilos globales
│   ├── App.tsx             # Componente principal
│   └── main.tsx            # Punto de entrada
├── index.html              # HTML principal
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## ✨ Features Implementadas

### ✅ Navegación y UX
- [x] Navegación funcional desde cualquier página (homepage y páginas de procedimientos)
- [x] Scroll restoration automático al cambiar de página
- [x] Menú móvil responsive
- [x] Carrito de compras con sidebar
- [x] Página 404 personalizada

### ✅ Contenido
- [x] 16 procedimientos de cirugía plástica (8 faciales, 8 corporales)
- [x] Información detallada de cada procedimiento
- [x] Sección de expertos (Dr. Pinto con credenciales completas)
- [x] Sección de equipo (enfermeras Carolina Matheus y Angela Peña)
- [x] Testimonios de pacientes
- [x] FAQ (Preguntas Frecuentes)
- [x] Proceso de 4 pasos explicado

### ✅ Funcionalidades
- [x] Formulario de contacto integrado
- [x] Agregar procedimientos al carrito desde formulario
- [x] Páginas individuales para cada procedimiento
- [x] Sistema de valoración virtual ($55 USD)

### ✅ SEO y Optimización
- [x] Meta tags optimizados (title, description, keywords)
- [x] Open Graph tags para redes sociales
- [x] Twitter Cards
- [x] Structured Data (JSON-LD) - Schema.org
- [x] Canonical URLs
- [x] Favicons configurados
- [x] Teléfono actualizado en schema.org (+1 423-482-1525)

### ✅ Diseño y Estilo
- [x] Diseño responsive (mobile-first)
- [x] Animaciones suaves con Framer Motion
- [x] Cards interactivas con efectos hover
- [x] Hero section con slider de imágenes
- [x] Secciones destacadas con efectos visuales

## 📋 Estado Actual

### Completado ✅
- Estructura completa del sitio
- Todos los procedimientos implementados
- Navegación funcional
- SEO optimizado
- Formulario de contacto
- Carrito de compras
- Página 404
- Enlaces sociales (Instagram)

### En Progreso / Pendiente 📝
- [ ] Internacionalización (i18n) - Versión en inglés
  - Ver `I18N_PLAN.md` y `I18N_OPTIONS_COMPARISON.md` para detalles
- [ ] Integración de Formspree en formulario de contacto
- [ ] Integración de Stripe para pagos
- [ ] Optimización de imágenes (WebP, lazy loading avanzado)
- [ ] Analytics (Google Analytics, Facebook Pixel)
- [ ] Mejoras de accesibilidad (ARIA labels, contraste)

## 🔗 Enlaces Importantes

- **Sitio Web:** https://www.latitudemed.com
- **Instagram:** https://www.instagram.com/latitude.med.travel
- **Repositorio:** https://github.com/napobuilder/latitudemedtravel.git

## 📞 Información de Contacto

- **Ubicación:** Tennessee, Estados Unidos
- **Teléfono:** +1 (423) 482-1525

## 📚 Documentación Adicional

- `GEMINI.md` - Overview del proyecto y convenciones de desarrollo
- `I18N_PLAN.md` - Plan detallado para internacionalización
- `I18N_OPTIONS_COMPARISON.md` - Comparación de opciones para multiidioma
- `SESSION_SUMMARY.md` - Resumen de sesiones de desarrollo
- `SERVICIOS_IMAGENES.md` - Documentación de imágenes de servicios

## 🎨 Convenciones de Desarrollo

Este proyecto sigue los principios de "Código de Honor":

- **Precisión y Claridad:** Código auto-documentado
- **Eficiencia Pragmática:** DRY, KISS, YAGNI
- **Awareness Estructural:** Desarrollo con toda la estructura en mente
- **Modularización:** Componentes reutilizables
- **Separación de Responsabilidades:** HTML, CSS, JS organizados
- **Zero Technical Debt:** Implementación correcta desde el inicio

## 🚀 Próximos Pasos

1. **Internacionalización (Alta Prioridad)**
   - Implementar versión en inglés
   - Ver `I18N_PLAN.md` para plan detallado

2. **Integraciones**
   - Formspree para formularios
   - Stripe para pagos
   - Analytics

3. **Optimizaciones**
   - Performance (lazy loading, code splitting)
   - SEO adicional (sitemap.xml, robots.txt)
   - Accesibilidad

## 📝 Notas de Desarrollo

- El proyecto usa **TypeScript** para type safety
- Los datos están centralizados en `src/data.ts`
- El carrito usa **Zustand** para gestión de estado
- Las imágenes se cargan desde URLs remotas (con proxy opcional)
- El sitio está optimizado para SEO con meta tags y structured data

## 🤝 Contribución

Este es un proyecto privado. Para contribuciones o preguntas, contactar al equipo de desarrollo.

---

**Última actualización:** Diciembre 2024
