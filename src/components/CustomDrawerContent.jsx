// ============================================
// COMPONENTE PERSONALIZADO DE DRAWER
// ============================================

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {
  Home,
  Bot,
  Settings,
  Info,
} from 'lucide-react-native';

export default function CustomDrawerContent(props) {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      {/* Header del Drawer */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/LogoContigoPE.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.appName}>Guía de Auxilios</Text>
        <Text style={styles.subtitle}>Primeros auxilios • Perú</Text>
      </View>

      {/* Línea separadora */}
      <View style={styles.divider} />

      {/* Sección: Principal */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Principal</Text>
      </View>

      {/* Lista de opciones del drawer */}
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.drawerContent}
        showsVerticalScrollIndicator={false}
      >
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {/* Footer con números de emergencia */}
      <View style={styles.footer}>
        <View style={styles.divider} />
        <Text style={styles.footerTitle}>Emergencias Perú</Text>
        <View style={styles.emergencyRow}>
          <View style={styles.emergencyItem}>
            <Text style={styles.emergencyIcon}>👮</Text>
            <Text style={styles.emergencyNumber}>105</Text>
            <Text style={styles.emergencyLabel}>Policía</Text>
          </View>
          <View style={styles.emergencyItem}>
            <Text style={styles.emergencyIcon}>🚒</Text>
            <Text style={styles.emergencyNumber}>116</Text>
            <Text style={styles.emergencyLabel}>Bomberos</Text>
          </View>
          <View style={styles.emergencyItem}>
            <Text style={styles.emergencyIcon}>🏥</Text>
            <Text style={styles.emergencyNumber}>106</Text>
            <Text style={styles.emergencyLabel}>SAMU</Text>
          </View>
        </View>
        <Text style={styles.version}>ContigoPE v1.0.0</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#DC2626',
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 12,
  },
  appName: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 8,
  },
  sectionContainer: {
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#9CA3AF',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  drawerContent: {
    paddingTop: 0,
  },
  footer: {
    padding: 16,
    backgroundColor: '#F9FAFB',
  },
  footerTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#6B7280',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 12,
    textAlign: 'center',
  },
  emergencyRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  emergencyItem: {
    alignItems: 'center',
  },
  emergencyIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  emergencyNumber: {
    fontSize: 18,
    fontWeight: '800',
    color: '#DC2626',
  },
  emergencyLabel: {
    fontSize: 11,
    color: '#6B7280',
    marginTop: 2,
  },
  version: {
    fontSize: 11,
    color: '#9CA3AF',
    textAlign: 'center',
    marginTop: 8,
  },
});
