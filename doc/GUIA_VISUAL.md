# 🎨 GUÍA VISUAL DE LA APLICACIÓN

## 📱 Flujo de Navegación

```
┌─────────────────────────────────────┐
│         HOME SCREEN                 │
│  (Pantalla Principal)               │
│                                     │
│  🚨 Guía de Auxilios               │
│  ┌───────────────────────────┐     │
│  │   🔍 Buscar emergencia    │     │
│  └───────────────────────────┘     │
│                                     │
│  ┌──────────────────────┐          │
│  │ 🔥 Quemadura         ›│──┐      │
│  │ 🔪 Corte Profundo    ›│  │      │
│  │ 😵 Atragantamiento   ›│  │      │
│  │ 😴 Desmayo           ›│  │      │
│  │ 🦴 Fractura          ›│  │      │
│  │ 💉 Sangrado Nasal    ›│  │      │
│  │ 🐝 Picadura          ›│  │      │
│  │ 😷 Alergia           ›│  │      │
│  │ ☀️  Golpe de Calor    ›│  │      │
│  │ ⚡ Convulsión        ›│  │      │
│  │ ☠️  Intoxicación      ›│  │      │
│  │ ⚡ Electrocución     ›│  │      │
│  └──────────────────────┘  │      │
│                             │      │
│  ┌───────────────────────┐ │      │
│  │ 👮 Policía     │ 123 │ │      │
│  │ 🚒 Bomberos    │ 119 │ │      │
│  │ 🏥 Hospital    │ 132 │ │      │
│  └───────────────────────┘ │      │
└─────────────────────────────────┘ │
                 │                   │
       ┌─────────┴─────────┐         │
       │                   │         │
       ▼                   ▼         │
┌────────────┐      ┌──────────────┐│
│   MAPA     │      │   DETALLE    ││
│  SCREEN    │      │   SCREEN     ││
│            │      │              ││
│  🗺️         │      │  ┌────────┐  ││
│  [Mapa]    │      │  │ Imagen │  ││
│  📍📍📍     │      │  └────────┘  ││
│            │      │              ││
│  ┌────────┐│      │  Título      ││
│  │Servicio││      │  Subtítulo   ││
│  │  123   ││      │              ││
│  │[Llamar]││      │  Pasos:      ││
│  └────────┘│      │  1. ...      ││
└────────────┘      │  2. ...      ││
                    │  3. ...      ││
                    │              ││
                    │  ⚠️ Nota     ││
                    └──────────────┘│
                                    │
                                    │
            ◄───────────────────────┘
```

## 🎯 Descripción de Pantallas

### 1️⃣ HOME SCREEN - Pantalla Principal

**Componentes:**
- ✅ Header Rojo con título "🚨 Guía de Auxilios"
- ✅ Barra de búsqueda (TextInput funcional)
- ✅ FlatList con 12 tarjetas de emergencias
- ✅ Footer fijo con 3 botones de servicios

**Funcionalidades:**
- Filtrado en tiempo real por título
- Navegación a detalle al tocar tarjeta
- Navegación a mapa al tocar servicio
- Scroll vertical suave

**Estilo:**
- Fondo gris claro (#F9FAFB)
- Tarjetas blancas con sombras
- Imágenes circulares
- Flechas indicadoras

---

### 2️⃣ DETAIL SCREEN - Detalle de Emergencia

**Componentes:**
- ✅ Imagen grande (70% del ancho)
- ✅ Título rojo prominente
- ✅ Subtítulo en gris
- ✅ Línea divisoria
- ✅ Sección de pasos con emoji 📋
- ✅ Caja de advertencia amarilla con ⚠️

**Funcionalidades:**
- ScrollView vertical
- Recibe item vía navigation params
- Header con título dinámico
- Botón back en header

**Estilo:**
- Tipografía grande y legible
- Espaciado generoso
- Colores contrastantes
- Texto justificado

---

### 3️⃣ MAP SCREEN - Mapa de Servicios

**Componentes:**
- ✅ MapView ocupando toda la pantalla
- ✅ 3 Marcadores (Marker) por servicio
- ✅ Tarjeta flotante en la parte inferior
- ✅ Botón "LLAMAR AHORA" prominente

**Funcionalidades:**
- Mapa interactivo con zoom/pan
- Marcadores con colores personalizados
- Botón de ubicación del usuario
- Llamada telefónica con confirmación
- Región inicial centrada en marcadores

**Estilo:**
- Tarjeta con sombra pronunciada
- Número gigante en color del servicio
- Botón con gradiente y sombra
- Position absolute para overlay

---

## 🎨 Paleta de Colores

### Colores Principales:
- 🔴 **Rojo Principal**: `#DC2626`
  - Headers
  - Títulos importantes
  - Servicio Bomberos

- 🔵 **Azul Policía**: `#1E40AF`
  - Botón de Policía
  - Marcadores de policía

- 🟢 **Verde Hospital**: `#059669`
  - Botón de Hospital
  - Marcadores de hospital

### Colores Secundarios:
- ⚪ **Blanco**: `#FFFFFF` (Tarjetas, fondos)
- ⚫ **Gris Oscuro**: `#1F2937` (Texto principal)
- 🌫️ **Gris Medio**: `#6B7280` (Texto secundario)
- 🌥️ **Gris Claro**: `#F9FAFB` (Fondo general)

### Colores de Alerta:
- 🟡 **Amarillo**: `#FEF3C7` (Fondo de advertencias)
- 🟠 **Naranja**: `#F59E0B` (Borde de advertencias)

---

## 📐 Dimensiones y Espaciado

### Tarjetas:
- Padding: 12px
- Border Radius: 15px
- Margin: 8px vertical, 16px horizontal
- Elevation: 4

### Imágenes Circulares (Home):
- Tamaño: 60x60 px
- Border Radius: 30px

### Botones de Servicio:
- Padding: 16px vertical
- Border Radius: 15px
- Elevation: 5
- Emoji: 32px

### Tipografía:
- Header: 28px, peso 800
- Título tarjeta: 18px, peso 700
- Subtítulo: 14px, peso 400
- Número servicio: 20-64px, peso 800-900

---

## 🔄 Interacciones

### Animaciones:
- ✅ activeOpacity: 0.7 (tarjetas y botones)
- ✅ Transiciones suaves entre pantallas
- ✅ Fade in al cargar imágenes

### Feedback Táctil:
- ✅ TouchableOpacity en todos los botones
- ✅ Alertas de confirmación (llamadas)
- ✅ Estados empty en búsqueda

---

## 📊 Datos Estructurados

### emergenciasData (12 objetos):
```javascript
{
  id: string,
  titulo: string,
  subtitulo: string,
  imagen: require(),
  pasos: string (multilínea)
}
```

### serviciosData (3 objetos):
```javascript
{
  nombre: string,
  numero: string,
  color: string (hex),
  marcadores: [
    {
      id: string,
      latitude: number,
      longitude: number,
      titulo: string
    }
  ]
}
```

---

## 🎬 Flujos de Usuario

### Flujo 1: Ver información de emergencia
1. Usuario abre la app → HOME
2. Usuario toca tarjeta de emergencia
3. App navega a DETAIL
4. Usuario lee pasos
5. Usuario presiona back → Regresa a HOME

### Flujo 2: Buscar emergencia específica
1. Usuario está en HOME
2. Usuario toca barra de búsqueda
3. Usuario escribe "que" → Filtra "Quemadura"
4. Usuario toca resultado
5. App navega a DETAIL

### Flujo 3: Llamar a servicio de emergencia
1. Usuario está en HOME
2. Usuario toca botón "Policía" (footer)
3. App navega a MAPA
4. Mapa muestra 3 ubicaciones de policía
5. Usuario presiona "LLAMAR AHORA"
6. Alert de confirmación
7. Usuario confirma
8. App abre marcador telefónico

---

## 🚀 Animación de Splash (Opcional)

Si quieres agregar animación de splash:
1. Edita `app.json`
2. Configura `splash` con tu imagen
3. Ajusta `backgroundColor` y `resizeMode`

---

## 📱 Compatibilidad

- ✅ iOS 13+
- ✅ Android 6.0+ (API 23)
- ✅ Tablets (responsive)
- ✅ Modo oscuro (pendiente)

---

**Diseño completado por un Senior React Native Developer** 💻
