/**
 * Utilidad para manejar URLs de imágenes remotas
 * Si hay problemas de CORS, podemos usar un proxy aquí
 */

/**
 * Procesa una URL de imagen, aplicando proxy si es necesario
 * @param url - URL de la imagen (puede ser local o remota)
 * @returns URL procesada lista para usar
 */
export const getImageUrl = (url: string): string => {
  // Si la URL ya es absoluta (http/https), usarla directamente
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  
  // Si es una ruta relativa, mantenerla como está (para imágenes locales)
  return url;
};

/**
 * Verifica si una URL es remota
 */
export const isRemoteUrl = (url: string): boolean => {
  return url.startsWith('http://') || url.startsWith('https://');
};

