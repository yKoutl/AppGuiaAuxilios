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
  DrawerItem,
} from '@react-navigation/drawer';
import {
  Home,
  Bot,
  Settings,
  Info,
  AlertCircle,
  Building2,
} from 'lucide-react-native';

export default function CustomDrawerContent(props) {
  const { state, navigation } = props;
  
  // Secciones del drawer
  const sections = {
    principal: ['Inicio', 'AsistenteIA'],
    emergencias: ['Emergencias'],
    explorar: ['AcercaDe', 'NosPlanet'],
    personalizacion: ['Configuracion'],
  };

  // Íconos para cada pantalla
  const icons = {
    Inicio: Home,
    AsistenteIA: Bot,
    Emergencias: AlertCircle,
    AcercaDe: Info,
    NosPlanet: Building2,
    Configuracion: Settings,
  };

  // Títulos personalizados
  const titles = {
    Inicio: 'Inicio',
    AsistenteIA: 'Asistente IA',
    Emergencias: 'Emergencias',
    AcercaDe: 'Acerca de ContigoPE',
    NosPlanet: 'Nos Planet S.A.C',
    Configuracion: 'Configuración',
  };

  const renderDrawerItem = (routeName) => {
    const route = state.routes.find(r => r.name === routeName);
    if (!route) return null;

    const isFocused = state.routes[state.index].name === routeName;
    const Icon = icons[routeName];

    return (
      <DrawerItem
        key={routeName}
        label={titles[routeName]}
        focused={isFocused}
        onPress={() => navigation.navigate(routeName)}
        icon={({ color, size }) => Icon ? <Icon color={color} size={size} /> : null}
        activeTintColor="#DC2626"
        inactiveTintColor="#6B7280"
        labelStyle={styles.drawerLabel}
        style={styles.drawerItem}
        activeBackgroundColor="rgba(220, 38, 38, 0.1)"
      />
    );
  };

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

      {/* Lista de opciones del drawer con secciones */}
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.drawerContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Sección: PRINCIPAL */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>PRINCIPAL</Text>
        </View>
        {sections.principal.map(renderDrawerItem)}

        {/* Sección: EMERGENCIAS */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>EMERGENCIAS</Text>
        </View>
        {sections.emergencias.map(renderDrawerItem)}

        {/* Sección: EXPLORAR */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>EXPLORAR</Text>
        </View>
        {sections.explorar.map(renderDrawerItem)}

        {/* Sección: PERSONALIZACIÓN */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>PERSONALIZACIÓN</Text>
        </View>
        {sections.personalizacion.map(renderDrawerItem)}
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
  },
  sectionContainer: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 8,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: '700',
    color: '#9CA3AF',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  drawerContent: {
    paddingTop: 0,
  },
  drawerLabel: {
    fontSize: 15,
    fontWeight: '600',
    marginLeft: -16,
  },
  drawerItem: {
    borderRadius: 12,
    marginVertical: 2,
    marginHorizontal: 12,
    paddingVertical: 4,
  },
  footer: {
    padding: 16,
    backgroundColor: '#F9FAFB',
  },
  footerTitle: {
    fontSize: 11,
    fontWeight: '700',
    color: '#6B7280',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 12,
    marginTop: 8,
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
    marginBottom: 2,
  },
  emergencyLabel: {
    fontSize: 11,
    color: '#6B7280',
    fontWeight: '500',
  },
  version: {
    fontSize: 11,
    color: '#9CA3AF',
    textAlign: 'center',
    marginTop: 8,
    fontWeight: '600',
  },
});
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
