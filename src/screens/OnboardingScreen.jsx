// ============================================
// PANTALLA DE ONBOARDING - PRIMERA VEZ
// ============================================

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OnboardingScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  // Función para solicitar permisos y completar onboarding
  const handleStart = async () => {
    setLoading(true);
    
    try {
      // Solicitar permiso de ubicación
      const { status } = await Location.requestForegroundPermissionsAsync();
      
      if (status !== 'granted') {
        Alert.alert(
          'Permiso Denegado',
          'La app necesita acceso a tu ubicación para mostrar servicios cercanos. Puedes cambiar esto en Configuración.',
          [{ text: 'OK' }]
        );
      }

      // Guardar que el onboarding se completó
      await AsyncStorage.setItem('onboardingCompleted', 'true');
      
      // Navegar a la app principal
      navigation.replace('Main');
      
    } catch (error) {
      console.error('Error en onboarding:', error);
      Alert.alert('Error', 'Hubo un problema al inicializar la app');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.emoji}>🚨</Text>
        <Text style={styles.title}>Guía de Auxilios</Text>
        <Text style={styles.subtitle}>Tu asistente de primeros auxilios</Text>
      </View>

      {/* CARACTERÍSTICAS */}
      <View style={styles.featuresContainer}>
        {/* Guías Offline */}
        <View style={styles.feature}>
          <View style={styles.iconContainer}>
            <Text style={styles.featureIcon}>📖</Text>
          </View>
          <Text style={styles.featureTitle}>Guías Offline</Text>
          <Text style={styles.featureText}>
            Accede a 12 guías completas de primeros auxilios sin necesidad de internet
          </Text>
        </View>

        {/* Mapa de Ayuda */}
        <View style={styles.feature}>
          <View style={styles.iconContainer}>
            <Text style={styles.featureIcon}>🗺️</Text>
          </View>
          <Text style={styles.featureTitle}>Mapa de Ayuda</Text>
          <Text style={styles.featureText}>
            Encuentra la Policía (105), Bomberos (116) y SAMU (106) más cercanos
          </Text>
        </View>

        {/* Asistente IA */}
        <View style={styles.feature}>
          <View style={styles.iconContainer}>
            <Text style={styles.featureIcon}>🤖</Text>
          </View>
          <Text style={styles.featureTitle}>Asistente IA</Text>
          <Text style={styles.featureText}>
            Consulta con inteligencia artificial sobre emergencias médicas
          </Text>
        </View>
      </View>

      {/* AVISO IMPORTANTE */}
      <View style={styles.warningBox}>
        <Text style={styles.warningIcon}>⚠️</Text>
        <Text style={styles.warningText}>
          Esta app proporciona información general. En emergencias reales, 
          siempre llama al SAMU (106) o servicios de emergencia.
        </Text>
      </View>

      {/* BOTÓN COMENZAR */}
      <TouchableOpacity
        style={styles.startButton}
        onPress={handleStart}
        disabled={loading}
        activeOpacity={0.8}
      >
        <Text style={styles.startButtonText}>
          {loading ? 'Iniciando...' : '✓ Comenzar'}
        </Text>
      </TouchableOpacity>

      {/* VERSIÓN */}
      <Text style={styles.version}>Versión 1.0.0 - Perú</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  content: {
    padding: 24,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  emoji: {
    fontSize: 80,
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#DC2626',
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
  },
  featuresContainer: {
    width: '100%',
    marginBottom: 32,
  },
  feature: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    alignItems: 'center',
    // Sombra
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FEE2E2',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  featureIcon: {
    fontSize: 40,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 8,
  },
  featureText: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 20,
  },
  warningBox: {
    flexDirection: 'row',
    backgroundColor: '#FEF3C7',
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#F59E0B',
    marginBottom: 32,
    width: '100%',
  },
  warningIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  warningText: {
    flex: 1,
    fontSize: 13,
    color: '#92400E',
    lineHeight: 18,
  },
  startButton: {
    backgroundColor: '#DC2626',
    paddingVertical: 18,
    paddingHorizontal: 48,
    borderRadius: 16,
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
    // Sombra
    shadowColor: '#DC2626',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  startButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  version: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 8,
    marginBottom: 20,
  },
});

export default OnboardingScreen;
