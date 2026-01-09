# GUIA DE AUXILIOS - DOCUMENTACION TECNICA

## DESCRIPCION DEL PROYECTO

Aplicacion movil de primeros auxilios desarrollada con React Native y Expo SDK 54, adaptada al contexto peruano con integracion de IA (Gemini), GPS en tiempo real, y navegacion por drawer.

## STACK TECNOLOGICO

- React Native 0.81.5
- Expo ~54.0.31
- React Navigation 7.x (Drawer + Stack)
- Google Generative AI (Gemini 1.5 Flash)
- Expo Location (GPS)
- React Native Maps 1.20.1
- AsyncStorage (persistencia)
- React Native Reanimated (animaciones)

## ESTRUCTURA DEL PROYECTO

```
AppGuiaAuxilios/
├── src/
│   ├── components/
│   │   └── EmergencyCard.jsx          # Tarjeta reutilizable de emergencias
│   ├── data/
│   │   └── data.jsx                   # Base de datos local (12 emergencias + servicios)
│   ├── navigation/
│   │   └── AppNavigator.jsx           # Drawer + Stack Navigator
│   └── screens/
│       ├── SplashScreen.jsx           # Pantalla de carga inicial
│       ├── OnboardingScreen.jsx       # Tutorial primera vez
│       ├── HomeScreen.jsx             # Lista principal con busqueda
│       ├── DetailScreen.jsx           # Detalle de emergencia
│       ├── MapScreen.jsx              # Mapa con GPS y servicios
│       ├── AIScreen.jsx               # Chat IA Gemini
│       └── AboutScreen.jsx            # Informacion de la app
├── assets/
│   ├── LogoContigoPE.png              # Logo principal
│   └── logo.png                       # Logo secundario
├── App.jsx                            # Punto de entrada con logica de onboarding
├── babel.config.js                    # Config Babel + Reanimated plugin
└── package.json                       # Dependencias del proyecto
```

## FUNCIONALIDADES PRINCIPALES

### 1. Pantalla de Carga (SplashScreen)
- Animacion de spinner personalizado
- Logo centrado
- Duracion: 2.5 segundos
- Transicion automatica al onboarding o app principal

### 2. Onboarding (Primera Vez)
- Tutorial de 3 caracteristicas: Guias offline, Mapa, IA
- Solicitud de permisos de ubicacion GPS
- Almacenamiento en AsyncStorage para no repetir
- Boton "Comenzar" que activa la app

### 3. Navegacion Drawer
**Menu lateral con 4 opciones:**
- Inicio: Stack Navigator (Home → Detalle → Mapa)
- Asistente IA: Chat con Gemini
- Configuracion: Placeholder para ajustes
- Acerca de: Info de la app y desarrollador

### 4. Pantalla Principal (Home)
- Header personalizado con menu hamburguesa
- Barra de busqueda en tiempo real
- Lista de 12 emergencias medicas
- Footer con 3 botones de servicios (Policia 105, Bomberos 116, SAMU 106)
- Boton flotante (FAB) para acceso rapido a IA
- Navegacion a detalle al tocar tarjeta

### 5. Detalle de Emergencia
- Imagen grande de la emergencia
- Titulo y descripcion
- Pasos numerados de atencion
- Advertencia de seguridad
- Boton de navegacion a mapa de servicios

### 6. Mapa GPS
- Obtencion de ubicacion real del usuario
- Fallback a Lima (-12.0464, -77.0428) si no hay GPS
- Marcadores de 3 distritos por servicio
- Servicios: Policia Nacional, CGBVP Bomberos, SAMU Minsa
- Marcador de usuario personalizado
- Botones de llamada funcionales

### 7. Asistente IA (Gemini)
- API Key: AIzaSyCfr5e2My5rljDqoynk2PhHDT-Uzfv857I
- Modelo: gemini-1.5-flash
- Contexto: Especialista en primeros auxilios para Peru
- Interfaz de chat con burbujas
- Scroll automatico a ultimo mensaje
- Campo de texto con boton de envio
- Recomienda llamar al SAMU (106) en emergencias graves

### 8. Acerca de
- Logo de la aplicacion
- Nombre del desarrollador
- Version 1.0.0
- Numeros de emergencia de Peru (105, 116, 106)
- Lista de 5 caracteristicas principales

## DATOS PERUANOS

### Numeros de Emergencia
- Policia Nacional del Peru: 105
- Bomberos (CGBVP): 116
- SAMU (Sistema de Atencion Movil de Urgencia): 106

### Coordenadas de Referencia (Lima)
**Policia Nacional:**
- San Isidro: -12.0952, -77.0364
- Miraflores: -12.1190, -77.0285
- San Miguel: -12.0775, -77.0864

**CGBVP Bomberos:**
- Lima Centro: -12.0464, -77.0300
- San Borja: -12.0900, -77.0050
- Callao: -12.0564, -77.1181

**SAMU Minsa:**
- Hospital Rebagliati: -12.0870, -77.0070
- Hospital Almenara: -12.0640, -76.9860
- Hospital Dos de Mayo: -12.0560, -77.0400

### Base de Datos Local (12 Emergencias)
1. Quemaduras
2. Heridas y Cortes
3. Atragantamiento
4. Reanimacion Cardiopulmonar (RCP)
5. Fracturas
6. Mordeduras de Animales
7. Desmayos
8. Envenenamiento
9. Shock
10. Hemorragia Nasal
11. Convulsiones
12. Ahogamiento

Cada emergencia incluye:
- ID unico
- Titulo
- Descripcion breve
- Pasos detallados de atencion
- Imagen PNG asociada

## CONFIGURACION DE BABEL

```javascript
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'],
  };
};
```

Nota: El plugin de reanimated DEBE ir al final del array de plugins.

## INSTRUCCIONES DE EJECUCION

### Instalacion Inicial
```bash
cd AppGuiaAuxilios
npm install
```

### Ejecutar en Desarrollo
```bash
npx expo start
# O con cache limpia
npx expo start --clear
```

### Ejecutar en Dispositivo
1. Instalar Expo Go desde Play Store / App Store
2. Escanear codigo QR generado por Metro
3. La app cargara automaticamente

### Problemas Comunes

**Error: Worklets mismatch**
Solucion:
1. Cerrar completamente Expo Go (Forzar detencion)
2. Borrar cache de Expo Go en ajustes del dispositivo
3. Eliminar node_modules, .expo, package-lock.json
4. npm install
5. npx expo start --clear
6. Reescanear QR con Expo Go

**Error: react-native-gesture-handler**
Solucion: Verificar que en index.js la primera linea sea:
```javascript
import 'react-native-gesture-handler';
```

**Error: babel-preset-expo**
Solucion:
```bash
npm install babel-preset-expo --save-dev
```

## INTEGRACION DE API GEMINI

### Configuracion
- Provider: Google Generative AI
- API Key almacenada directamente en AIScreen.jsx (linea 9)
- Modelo: gemini-1.5-flash
- Temperature: No especificada (default)

### System Instruction
```
Eres un experto en primeros auxilios y emergencias medicas especializado 
en el contexto de Peru. Proporciona instrucciones claras, precisas y rapidas 
para emergencias. Siempre recomienda llamar al SAMU (106) en caso de 
emergencias graves.
```

### Flujo de Chat
1. Usuario escribe mensaje en TextInput
2. handleSendMessage captura el texto
3. Se agrega mensaje de usuario al historial
4. Se envia al modelo de Gemini con historial completo
5. Respuesta de IA se agrega al historial
6. ScrollView se desplaza automaticamente al final
7. TextInput se limpia para siguiente mensaje

## PERSISTENCIA DE DATOS

### AsyncStorage
- Clave: 'onboardingCompleted'
- Valor: 'true' | null
- Uso: Detectar si es la primera vez que se abre la app
- Ubicacion: App.jsx (checkOnboarding function)

### Logica de Flujo
```
App inicia
  ↓
SplashScreen (2.5s)
  ↓
checkOnboarding()
  ↓
¿onboardingCompleted == 'true'?
  ├─ NO → Mostrar OnboardingScreen
  │         Usuario completa → setItem('onboardingCompleted', 'true')
  │                            Navegar a Main
  └─ SI → Ir directo a Main (AppNavigator)
```

## ESTILOS Y DISENO

### Paleta de Colores
- Primario: #DC2626 (Rojo emergencia)
- Secundario: #1E4ED8 (Azul institucional)
- Background: #F9FAFB (Gris claro)
- Texto primario: #1F2937 (Gris oscuro)
- Texto secundario: #6B7280 (Gris medio)
- Blanco: #FFFFFF

### Tipografia
- Peso regular: 400
- Peso medio: 600
- Peso bold: 700
- Peso extra bold: 800

### Espaciado
- Padding contenedor: 16-24px
- Margen entre elementos: 8-16px
- Radio de bordes: 12-16px

### Sombras (iOS y Android)
```javascript
// iOS
shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.1,
shadowRadius: 8,

// Android
elevation: 3
```

## DEPENDENCIAS COMPLETAS

```json
{
  "dependencies": {
    "expo": "~54.0.31",
    "react": "18.3.1",
    "react-native": "0.81.5",
    "@react-navigation/native": "^7.6.13",
    "@react-navigation/stack": "^7.6.13",
    "@react-navigation/drawer": "^7.6.13",
    "@google/generative-ai": "^0.21.0",
    "@react-native-async-storage/async-storage": "~2.1.0",
    "expo-location": "~18.0.6",
    "react-native-maps": "1.20.1",
    "react-native-reanimated": "~3.18.0",
    "react-native-gesture-handler": "~2.22.0",
    "react-native-safe-area-context": "^5.3.0",
    "react-native-screens": "^4.6.0"
  },
  "devDependencies": {
    "@babel/core": "^7.25.2",
    "babel-preset-expo": "^12.0.2"
  }
}
```

## AUTORIA Y VERSION

- Desarrollador: [Tu Nombre]
- Version: 1.0.0
- Fecha: Enero 2026
- Plataformas: Android / iOS
- Licencia: No especificada

## NOTAS ADICIONALES

- Todos los archivos .js se convirtieron a .jsx por preferencia del desarrollador
- El proyecto utiliza Expo managed workflow (no bare workflow)
- No se requiere Xcode o Android Studio para desarrollo
- Las imagenes de emergencias son archivos PNG locales en assets/
- El mapa requiere API key de Google Maps en produccion
- La app funciona offline excepto el chat de IA
- Los marcadores del mapa son coordenadas estaticas (no API real)
