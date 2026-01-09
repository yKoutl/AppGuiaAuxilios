// ============================================
// APLICACIÓN PRINCIPAL - GUÍA DE AUXILIOS
// ============================================

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importar las pantallas
import HomeScreen from './src/screens/HomeScreen.jsx';
import DetailScreen from './src/screens/DetailScreen.jsx';
import MapScreen from './src/screens/MapScreen.jsx';

// Crear el Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#DC2626', // Rojo
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: '700',
            fontSize: 18,
          },
        }}
      >
        {/* Pantalla Principal - Sin header */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false, // Ocultar header en Home
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
            // Determinar el título según el servicio
            const servicioKey = route.params?.servicioKey;
            let title = 'Mapa';
            
            if (servicioKey === 'policia') title = 'Policía Nacional';
            else if (servicioKey === 'bomberos') title = 'Bomberos';
            else if (servicioKey === 'hospital') title = 'Hospital / Urgencias';
            
            return { title };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
