// ============================================
// NAVEGACIÓN PRINCIPAL - DRAWER + STACK
// ============================================

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, Image } from 'react-native';

// Importar pantallas
import HomeScreen from '../screens/HomeScreen.jsx';
import DetailScreen from '../screens/DetailScreen.jsx';
import MapScreen from '../screens/MapScreen.jsx';
import AIScreen from '../screens/AIScreen.jsx';
import AboutScreen from '../screens/AboutScreen.jsx';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// ============================================
// STACK NAVIGATOR (Home -> Detalle -> Mapa)
// ============================================
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#DC2626',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: '700',
          fontSize: 18,
        },
        headerRight: () => (
          <Image
            source={require('../../assets/LogoContigoPE.png')}
            style={{ width: 40, height: 40, marginRight: 15 }}
            resizeMode="contain"
          />
        ),
      }}
    >
      {/* Pantalla Principal - Sin header (tiene uno personalizado) */}
      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      {/* Pantalla de Detalle */}
      <Stack.Screen
        name="Detalle"
        component={DetailScreen}
        options={({ route }) => ({
          title: route.params?.item?.titulo || 'Detalle',
        })}
      />

      {/* Pantalla de Mapa */}
      <Stack.Screen
        name="Mapa"
        component={MapScreen}
        options={({ route }) => {
          const servicioKey = route.params?.servicioKey;
          let title = 'Mapa';

          if (servicioKey === 'policia') title = 'Policía Nacional del Perú';
          else if (servicioKey === 'bomberos') title = 'CGBVP - Bomberos';
          else if (servicioKey === 'hospital') title = 'SAMU - Minsa';

          return { title };
        }}
      />
    </Stack.Navigator>
  );
};

// ============================================
// PANTALLA DE CONFIGURACIÓN (PLACEHOLDER)
// ============================================
const ConfigScreen = () => {
  return (
    <View style={styles.centerContainer}>
      <Text style={styles.emoji}>⚙️</Text>
      <Text style={styles.placeholderTitle}>Configuración</Text>
      <Text style={styles.placeholderText}>
        Próximamente: Ajustes de la aplicación
      </Text>
    </View>
  );
};

// ============================================
// DRAWER NAVIGATOR (MENÚ PRINCIPAL)
// ============================================
const AppNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#F9FAFB',
          width: 280,
        },
        drawerActiveTintColor: '#DC2626',
        drawerInactiveTintColor: '#6B7280',
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: '600',
          marginLeft: -16,
        },
        drawerItemStyle: {
          borderRadius: 12,
          marginVertical: 4,
          paddingVertical: 4,
        },
        headerStyle: {
          backgroundColor: '#DC2626',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: '700',
        },
        headerRight: () => (
          <Image
            source={require('../../assets/LogoContigoPE.png')}
            style={{ width: 40, height: 40, marginRight: 15 }}
            resizeMode="contain"
          />
        ),
      }}
    >
      {/* Opción: Inicio (Stack con Home, Detalle, Mapa) */}
      <Drawer.Screen
        name="Inicio"
        component={HomeStack}
        options={{
          drawerIcon: ({ color, size }) => (
            <Text style={{ fontSize: size, color }}>🏠</Text>
          ),
          headerShown: false,
        }}
      />

      {/* Opción: Asistente IA */}
      <Drawer.Screen
        name="AsistenteIA"
        component={AIScreen}
        options={{
          title: 'Asistente IA',
          drawerIcon: ({ color, size }) => (
            <Text style={{ fontSize: size, color }}>🤖</Text>
          ),
        }}
      />

      {/* Opción: Configuración */}
      <Drawer.Screen
        name="Configuracion"
        component={ConfigScreen}
        options={{
          title: 'Configuración',
          drawerIcon: ({ color, size }) => (
            <Text style={{ fontSize: size, color }}>⚙️</Text>
          ),
        }}
      />

      {/* Opción: Acerca de */}
      <Drawer.Screen
        name="AcercaDe"
        component={AboutScreen}
        options={{
          title: 'Acerca de',
          drawerIcon: ({ color, size }) => (
            <Text style={{ fontSize: size, color }}>ℹ️</Text>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    padding: 24,
  },
  emoji: {
    fontSize: 80,
    marginBottom: 24,
  },
  placeholderTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1F2937',
    marginBottom: 12,
  },
  placeholderText: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default AppNavigator;
