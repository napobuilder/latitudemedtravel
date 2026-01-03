# Plan de Internacionalización (i18n) - Latitude Med Travel

## 📋 Estrategia General

### Estructura de URLs (SEO Optimizada)
```
/                    → Redirige a /es/ (idioma por defecto)
/es/                 → Versión completa en español
/en/                 → Versión completa en inglés
/es/servicios/:id    → Detalle de servicio en español
/en/procedures/:id   → Detalle de procedimiento en inglés
```

### Ventajas de esta estructura:
- ✅ URLs semánticas y claras para SEO
- ✅ Google entiende fácilmente el contenido por idioma
- ✅ Fácil implementación con React Router
- ✅ Escalable para futuros idiomas

---

## 🔧 Implementación Técnica

### Opción A: Context API (Recomendado para MVP)
- ✅ Más rápido de implementar
- ✅ Sin dependencias externas
- ✅ Suficiente para 2 idiomas
- ⚠️ Limitado si crece mucho

### Opción B: react-i18next (Recomendado a largo plazo)
- ✅ Estándar de la industria
- ✅ Más funcionalidades (pluralización, interpolación)
- ✅ Mejor para escalar
- ⚠️ Requiere dependencia adicional

**Recomendación inicial: Opción A (Context API)**

---

## 📁 Estructura de Archivos Propuesta

```
src/
  ├── contexts/
  │   └── LanguageContext.tsx        # Context para idioma y traducciones
  ├── hooks/
  │   └── useTranslation.ts          # Hook personalizado para usar traducciones
  ├── i18n/
  │   └── translations/
  │       ├── es.ts                 # Traducciones español (objeto)
  │       └── en.ts                 # Traducciones inglés (objeto)
  ├── data/
  │   ├── es/
  │   │   ├── services.ts           # Servicios en español
  │   │   ├── doctors.ts            # Doctores en español
  │   │   └── team.ts               # Equipo en español
  │   └── en/
  │       ├── services.ts           # Services in English
  │       ├── doctors.ts            # Doctors in English
  │       └── team.ts               # Team in English
  └── utils/
      └── languageDetector.ts       # Detectar idioma del navegador
```

---

## 🎯 SEO Crítico a Implementar

### 1. hreflang Tags (OBLIGATORIO)
```html
<link rel="alternate" hreflang="es" href="https://www.latitudemed.com/es/" />
<link rel="alternate" hreflang="en" href="https://www.latitudemed.com/en/" />
<link rel="alternate" hreflang="x-default" href="https://www.latitudemed.com/en/" />
```

### 2. Canonical URLs Dinámicas
```html
<link rel="canonical" href="https://www.latitudemed.com/es/" />
```

### 3. Meta Tags por Idioma
```html
<!-- Español -->
<html lang="es">
<meta property="og:locale" content="es_ES" />

<!-- Inglés -->
<html lang="en">
<meta property="og:locale" content="en_US" />
```

### 4. Structured Data (JSON-LD)
- Duplicar schema.org para cada idioma
- Usar URLs correctas según idioma

---

## 📝 Contenido a Traducir

### Prioridad Alta (Visible en todas las páginas)
- [x] Header/Navigation
- [x] Footer
- [x] Hero Section
- [x] CTAs (Call to Actions)
- [x] Formularios
- [x] Meta tags (title, description)

### Prioridad Media (Páginas principales)
- [x] TrustBar
- [x] Process (Proceso de 4 pasos)
- [x] FAQ
- [x] Naddia Section (Misión/Visión)
- [x] ContactCta

### Prioridad Baja (Contenido dinámico)
- [ ] Servicios/Procedimientos (16 servicios)
- [ ] Doctores/Experts
- [ ] Team (Nurses)
- [ ] Testimonials (¿traducir o mantener en español?)

---

## 🔄 Flujo de Detección de Idioma

1. **Primera visita:**
   - Detectar idioma del navegador (`navigator.language`)
   - Si es `es-*` → `/es/`
   - Si es `en-*` → `/en/`
   - Default → `/en/` (o `/es/` según preferencia)

2. **Selector manual:**
   - Dropdown en Header
   - Guardar preferencia en `localStorage`
   - Redirigir a la ruta correspondiente

3. **URLs directas:**
   - `/es/...` siempre muestra español
   - `/en/...` siempre muestra inglés

---

## ❓ Decisiones Pendientes

1. **IDs de Servicios:**
   - Opción A: Mantener IDs en español (`rinoplastia`) para ambos idiomas
   - Opción B: Traducir IDs (`rhinoplasty` para inglés)
   - **Recomendación:** Opción A inicialmente (más simple)

2. **Testimonios:**
   - ¿Traducir completamente?
   - ¿Mantener original con traducción?
   - **Recomendación:** Traducir completamente

3. **Nombres de procedimientos en URLs:**
   - `/es/servicios/rinoplastia`
   - `/en/procedures/rhinoplasty` (URLs traducidas)
   - **Recomendación:** Traducir URLs para SEO

4. **Términos médicos:**
   - ¿Mantener términos técnicos en español?
   - ¿Usar términos médicos estándar en inglés?
   - **Recomendación:** Usar términos médicos correctos en cada idioma

---

## 🚀 Plan de Implementación (Fases)

### Fase 1: Infraestructura Base (2-3 horas)
- [ ] Crear `LanguageContext` y `useTranslation` hook
- [ ] Crear archivos de traducciones básicas (`es.ts`, `en.ts`)
- [ ] Actualizar `App.tsx` con rutas `/es/` y `/en/`
- [ ] Implementar detector de idioma
- [ ] Crear componente `LanguageSelector` para Header

### Fase 2: Componentes Principales (3-4 horas)
- [ ] Traducir Header y Navigation
- [ ] Traducir Footer
- [ ] Traducir Hero
- [ ] Traducir meta tags dinámicos
- [ ] Implementar hreflang tags

### Fase 3: Secciones Importantes (4-5 horas)
- [ ] Traducir TrustBar
- [ ] Traducir Process
- [ ] Traducir FAQ
- [ ] Traducir ContactCta
- [ ] Traducir Naddia

### Fase 4: Contenido Dinámico (5-6 horas)
- [ ] Crear estructura `data/es/` y `data/en/`
- [ ] Traducir todos los servicios (16)
- [ ] Traducir información de doctores
- [ ] Traducir información del equipo
- [ ] Actualizar `ServiceDetailPage` para usar datos por idioma

### Fase 5: SEO y Pulido (2-3 horas)
- [ ] Implementar hreflang en todas las páginas
- [ ] Canonical URLs dinámicas
- [ ] Structured data por idioma
- [ ] Sitemap.xml con múltiples idiomas
- [ ] Testing completo

**Tiempo estimado total: 16-21 horas**

---

## 📊 Métricas de Éxito

- ✅ Sin contenido duplicado (cada URL es única)
- ✅ hreflang implementado correctamente
- ✅ Canonical URLs correctas
- ✅ Meta tags únicos por idioma
- ✅ Sitemap con todas las URLs
- ✅ Sin errores de consola
- ✅ Cambio de idioma fluido sin recargar

---

## 🔍 Consideraciones Adicionales

1. **Performance:**
   - Lazy load de traducciones si se usa react-i18next
   - Code splitting por idioma (opcional, para sitios grandes)

2. **Mantenimiento:**
   - Documentar proceso de agregar nuevas traducciones
   - Crear script para validar que todas las keys existen en ambos idiomas

3. **Analytics:**
   - Segregar métricas por idioma
   - Tracking de cambio de idioma

4. **Testing:**
   - Probar cambio de idioma en todas las páginas
   - Verificar que URLs funcionan correctamente
   - Validar hreflang con Google Search Console

