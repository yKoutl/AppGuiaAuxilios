# 🚨 Guía de Auxilios - React Native App

Aplicación móvil de primeros auxilios desarrollada con React Native (Expo) que proporciona información detallada sobre 12 tipos de emergencias médicas y acceso rápido a servicios de emergencia con mapas interactivos.

## 📱 Características

- **12 Tipos de Emergencias**: Información detallada sobre primeros auxilios
- **Búsqueda en Tiempo Real**: Filtra emergencias según palabras clave
- **Mapas Interactivos**: Ubicación de servicios de emergencia cercanos
- **Llamadas Directas**: Botones para llamar a Policía (123), Bomberos (119) y Hospital (132)
- **Diseño Moderno**: Interfaz limpia con animaciones suaves

## 🛠️ Stack Tecnológico

- **React Native** (19.1.0)
- **Expo** (~54.0.31)
- **React Navigation** (Stack Navigator)
- **react-native-maps** (1.20.1)
- **Sin Backend** (Datos locales en JS)

## 📁 Estructura de Carpetas

```
AppGuiaAuxilios/
├── src/
│   ├── components/
│   │   └── EmergencyCard.js      # Componente de tarjeta
│   ├── data/
│   │   └── data.js                # Base de datos local
│   ├── screens/
│   │   ├── HomeScreen.js          # Pantalla principal
│   │   ├── DetailScreen.js        # Detalle de emergencia
│   │   └── MapScreen.js           # Mapa de servicios
├── assets/
│   ├── quemadura.png
│   ├── corte.png
│   ├── atragantamiento.png
│   ├── desmayo.png
│   ├── fractura.png
│   ├── sangrado.png
│   ├── picadura.png
│   ├── alergia.png
│   ├── golpecalor.png
│   ├── convulsion.png
│   ├── intoxicacion.png
│   └── electro.png
├── App.js                         # Configuración de navegación
└── package.json
```

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Node.js (v16 o superior)
- npm o yarn
- Expo CLI
- Expo Go app en tu dispositivo móvil

### Pasos

1. **Clonar el repositorio** (o navegar a la carpeta del proyecto)

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Agregar imágenes a la carpeta assets/**
   
   Necesitas agregar 12 imágenes PNG con los siguientes nombres:
   - quemadura.png
   - corte.png
   - atragantamiento.png
   - desmayo.png
   - fractura.png
   - sangrado.png
   - picadura.png
   - alergia.png
   - golpecalor.png
   - convulsion.png
   - intoxicacion.png
   - electro.png

   **Recomendación**: Usa iconos o ilustraciones simples relacionadas con cada tipo de emergencia.

4. **Iniciar el proyecto**
   ```bash
   npm start
   ```
   o
   ```bash
   npx expo start
   ```

5. **Ejecutar en tu dispositivo**
   - Escanea el código QR con la app Expo Go (Android) o Camera (iOS)
   - O presiona `a` para Android emulator o `i` para iOS simulator

## 📝 Archivos Principales

### 1. `src/data/data.js`
Contiene toda la información de las emergencias y servicios:
- `emergenciasData`: Array de 12 objetos con información de primeros auxilios
- `serviciosData`: Objeto con datos de Policía, Bomberos y Hospital (incluye coordenadas para mapas)

### 2. `src/components/EmergencyCard.js`
Componente reutilizable para mostrar cada emergencia en la lista.

### 3. `src/screens/HomeScreen.js`
Pantalla principal con:
- Header personalizado
- Barra de búsqueda funcional
- Lista de emergencias (FlatList)
- Footer con botones de servicios de emergencia

### 4. `src/screens/DetailScreen.js`
Muestra información detallada de cada emergencia:
- Imagen grande
- Título y subtítulo
- Pasos detallados de primeros auxilios
- Advertencia de seguridad

### 5. `src/screens/MapScreen.js`
Mapa interactivo con:
- Marcadores de ubicaciones de servicios
- Tarjeta flotante con información del servicio
- Botón para realizar llamada telefónica

### 6. `App.js`
Configuración de React Navigation con 3 pantallas:
- Home (sin header)
- Detalle
- Mapa

## 🎨 Personalización

### Colores
Los colores principales están definidos en cada archivo de estilos:
- Rojo principal: `#DC2626`
- Azul (Policía): `#1E40AF`
- Verde (Hospital): `#059669`

### Coordenadas del Mapa
Las coordenadas están configuradas para Bogotá, Colombia. Puedes cambiarlas en `src/data/data.js` en la sección `serviciosData`.

### Números de Emergencia
Los números de emergencia son para Colombia (123, 119, 132). Actualízalos según tu país en `src/data/data.js`.

## 📱 Pantallas

1. **Home**: Lista de 12 emergencias con búsqueda y acceso a servicios
2. **Detalle**: Instrucciones paso a paso para cada emergencia
3. **Mapa**: Ubicaciones de servicios de emergencia con opción de llamada

## ⚠️ Nota Importante

Esta aplicación proporciona información general de primeros auxilios. En caso de emergencia real, siempre contacta a los servicios de emergencia profesionales.

## 📄 Licencia

Este es un proyecto de portafolio educativo.

## 👨‍💻 Desarrollo

Desarrollado como ejemplo de React Native para demostrar:
- Navegación entre pantallas
- Integración de mapas
- Gestión de datos locales
- Diseño responsivo y moderno
- Funcionalidades de búsqueda y filtrado

---

**¡Listo para usar!** 🎉
