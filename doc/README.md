# GUIA DE AUXILIOS - README

## DESCRIPCION

Aplicacion movil de primeros auxilios para emergencias medicas en Peru. Incluye 12 guias de emergencias, mapa GPS con servicios cercanos, chat con IA (Gemini), y numeros de emergencia locales.

## INSTALACION

```bash
# Clonar repositorio
git clone [tu-repo]

# Instalar dependencias
cd AppGuiaAuxilios
npm install

# Ejecutar
npx expo start
```

## REQUISITOS

- Node.js 18+
- npm o yarn
- Expo Go en tu dispositivo movil

## TECNOLOGIAS

- React Native + Expo
- React Navigation (Drawer + Stack)
- Google Gemini IA
- Expo Location (GPS)
- React Native Maps
- AsyncStorage

## FUNCIONALIDADES

- 12 guias de primeros auxilios con pasos detallados
- Busqueda en tiempo real
- Mapa GPS con ubicacion del usuario
- Marcadores de Policia (105), Bomberos (116), SAMU (106)
- Chat IA especializado en emergencias medicas
- Onboarding para nuevos usuarios
- Persistencia de preferencias

## ESTRUCTURA

```
src/
├── components/      # Componentes reutilizables
├── data/           # Base de datos local
├── navigation/     # Configuracion de navegacion
└── screens/        # Pantallas de la app
```

## USO

1. Instalar Expo Go en tu telefono
2. Ejecutar `npx expo start`
3. Escanear codigo QR
4. Completar onboarding en primera ejecucion
5. Explorar emergencias desde el menu principal

## PANTALLAS

- **Splash**: Carga inicial con logo
- **Onboarding**: Tutorial primera vez
- **Home**: Lista de emergencias con busqueda
- **Detalle**: Pasos especificos de cada emergencia
- **Mapa**: GPS con servicios de emergencia cercanos
- **IA**: Chat con asistente inteligente
- **Acerca de**: Informacion de la app

## NUMEROS DE EMERGENCIA PERU

- Policia: 105
- Bomberos: 116
- SAMU: 106

## TROUBLESHOOTING

**Error de cache:**
```bash
rm -rf node_modules .expo package-lock.json
npm install
npx expo start --clear
```

**Error Worklets:**
- Cerrar Expo Go completamente
- Borrar cache de Expo Go en ajustes
- Reescanear QR

**Error gesture-handler:**
Verificar que `index.js` tenga como primera linea:
```javascript
import 'react-native-gesture-handler';
```

## LICENCIA

Sin especificar

## CONTACTO

Desarrollador: [Tu Nombre]
Version: 1.0.0
