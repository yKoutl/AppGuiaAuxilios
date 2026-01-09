// ============================================
// APLICACIÓN PRINCIPAL - GUÍA DE AUXILIOS PRO
// ============================================

import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Importar navegadores y pantallas
import AppNavigator from './src/navigation/AppNavigator.jsx';
import OnboardingScreen from './src/screens/OnboardingScreen.jsx';
import SplashScreen from './src/screens/SplashScreen.jsx';

const Stack = createStackNavigator();

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);

  // Verificar si el onboarding ya se completó
  useEffect(() => {
    checkOnboarding();
  }, []);

  const checkOnboarding = async () => {
    try {
      const onboardingCompleted = await AsyncStorage.getItem('onboardingCompleted');
      
      if (onboardingCompleted === 'true') {
        // Ya completó el onboarding, ir directo a la app
        setShowOnboarding(false);
      } else {
        // Primera vez, mostrar onboarding
        setShowOnboarding(true);
      }
    } catch (error) {
      console.error('Error verificando onboarding:', error);
      setShowOnboarding(true);
    } finally {
      setIsLoading(false);
    }
  };

  // Pantalla de splash inicial
  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  // Pantalla de carga de datos
  if (isLoading) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {showOnboarding ? (
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        ) : (
          <Stack.Screen name="Main" component={AppNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
