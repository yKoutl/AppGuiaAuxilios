// ============================================
// NAVEGACIÓN PRINCIPAL - DRAWER + STACK
// ============================================

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Home, Bot, Settings, Info, AlertCircle, Building2 } from 'lucide-react-native';

// Importar pantallas
import HomeScreen from '../screens/HomeScreen.jsx';
import DetailScreen from '../screens/DetailScreen.jsx';
import MapScreen from '../screens/MapScreen.jsx';
import AIScreen from '../screens/AIScreen.jsx';
import AboutScreen from '../screens/AboutScreen.jsx';
import ConfigScreen from '../screens/ConfigScreen.jsx';
import EmergencyServicesScreen from '../screens/EmergencyServicesScreen.jsx';
import NosPlametScreen from '../screens/NosPlametScreen.jsx';

// Importar componente personalizado del drawer
import CustomDrawerContent from '../components/CustomDrawerContent.jsx';

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
// DRAWER NAVIGATOR (MENÚ PRINCIPAL)
// ============================================
const AppNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Inicio"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#FFFFFF',
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
        drawerActiveBackgroundColor: 'rgba(220, 38, 38, 0.1)',
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
      {/* PRINCIPAL */}
      <Drawer.Screen
        name="Inicio"
        component={HomeStack}
        options={{
          drawerIcon: ({ color, size }) => (
            <Home color={color} size={size} />
          ),
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="AsistenteIA"
        component={AIScreen}
        options={{
          title: 'Asistente IA',
          drawerIcon: ({ color, size }) => (
            <Bot color={color} size={size} />
          ),
        }}
      />

      {/* EMERGENCIAS */}
      <Drawer.Screen
        name="Emergencias"
        component={EmergencyServicesScreen}
        options={{
          title: 'Emergencias',
          drawerIcon: ({ color, size }) => (
            <AlertCircle color={color} size={size} />
          ),
        }}
      />

      {/* EXPLORAR */}
      <Drawer.Screen
        name="AcercaDe"
        component={AboutScreen}
        options={{
          title: 'Acerca de ContigoPE',
          drawerIcon: ({ color, size }) => (
            <Info color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="NosPlanet"
        component={NosPlametScreen}
        options={{
          title: 'Nos Planet S.A.C',
          drawerIcon: ({ color, size }) => (
            <Building2 color={color} size={size} />
          ),
        }}
      />

      {/* PERSONALIZACIÓN */}
      <Drawer.Screen
        name="Configuracion"
        component={ConfigScreen}
        options={{
          title: 'Configuración',
          drawerIcon: ({ color, size }) => (
            <Settings color={color} size={size} />
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
