// ============================================
// PANTALLA DE CONFIGURACIÓN
// ============================================

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
  StatusBar,
  Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Globe,
  Bell,
  Moon,
  ChevronRight,
  FileText,
  Shield,
  HelpCircle,
  Mail,
  ExternalLink,
} from 'lucide-react-native';

export default function ConfigScreen({ navigation }) {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);

  const handleMenuPress = () => {
    navigation.openDrawer();
  };

  const openEmail = () => {
    Linking.openURL('mailto:soporte@contigope.pe').catch((err) =>
      console.error('Error al abrir email:', err)
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <StatusBar barStyle="light-content" backgroundColor="#DC2626" />

      {/* Header con gradiente */}
      <LinearGradient
        colors={['#DC2626', '#B91C1C']}
        style={styles.header}
      >
        <TouchableOpacity onPress={handleMenuPress} style={styles.menuButton}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
        
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Configuración</Text>
          <Text style={styles.headerSubtitle}>Personaliza tu experiencia</Text>
        </View>
      </LinearGradient>

      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Sección: PREFERENCIAS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PREFERENCIAS</Text>
          
          <View style={styles.card}>
            {/* Idioma */}
            <View style={styles.settingItem}>
              <View style={styles.settingLeft}>
                <View style={[styles.iconContainer, { backgroundColor: '#DBEAFE' }]}>
                  <Globe color="#3B82F6" size={22} />
                </View>
                <View style={styles.settingTextContainer}>
                  <Text style={styles.settingTitle}>Idioma</Text>
                  <Text style={styles.settingSubtitle}>Español</Text>
                </View>
              </View>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>Próximamente</Text>
              </View>
            </View>

            <View style={styles.separator} />

            {/* Notificaciones */}
            <View style={styles.settingItem}>
              <View style={styles.settingLeft}>
                <View style={[styles.iconContainer, { backgroundColor: '#DCFCE7' }]}>
                  <Bell color="#16A34A" size={22} />
                </View>
                <View style={styles.settingTextContainer}>
                  <Text style={styles.settingTitle}>Notificaciones</Text>
                  <Text style={styles.settingSubtitle}>
                    {notificationsEnabled ? 'Activadas' : 'Desactivadas'}
                  </Text>
                </View>
              </View>
              <Switch
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
                trackColor={{ false: '#D1D5DB', true: '#16A34A' }}
                thumbColor="#FFFFFF"
              />
            </View>

            <View style={styles.separator} />

            {/* Modo Oscuro */}
            <View style={styles.settingItem}>
              <View style={styles.settingLeft}>
                <View style={[styles.iconContainer, { backgroundColor: '#FEF3C7' }]}>
                  <Moon color="#F59E0B" size={22} />
                </View>
                <View style={styles.settingTextContainer}>
                  <Text style={styles.settingTitle}>Modo Oscuro</Text>
                  <Text style={styles.settingSubtitle}>En desarrollo</Text>
                </View>
              </View>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>En desarrollo</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Sección: LEGAL Y SOPORTE */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>LEGAL Y SOPORTE</Text>
          
          <View style={styles.card}>
            {/* Términos y Condiciones */}
            <TouchableOpacity style={styles.settingItem} activeOpacity={0.7}>
              <View style={styles.settingLeft}>
                <View style={[styles.iconContainer, { backgroundColor: '#E0E7FF' }]}>
                  <FileText color="#6366F1" size={22} />
                </View>
                <View style={styles.settingTextContainer}>
                  <Text style={styles.settingTitle}>Términos y Condiciones</Text>
                  <Text style={styles.settingSubtitle}>Nuestros términos de uso</Text>
                </View>
              </View>
              <ChevronRight color="#9CA3AF" size={20} />
            </TouchableOpacity>

            <View style={styles.separator} />

            {/* Política de Privacidad */}
            <TouchableOpacity style={styles.settingItem} activeOpacity={0.7}>
              <View style={styles.settingLeft}>
                <View style={[styles.iconContainer, { backgroundColor: '#FCE7F3' }]}>
                  <Shield color="#EC4899" size={22} />
                </View>
                <View style={styles.settingTextContainer}>
                  <Text style={styles.settingTitle}>Política de Privacidad</Text>
                  <Text style={styles.settingSubtitle}>Cómo protegemos tus datos</Text>
                </View>
              </View>
              <ChevronRight color="#9CA3AF" size={20} />
            </TouchableOpacity>

            <View style={styles.separator} />

            {/* Centro de Ayuda */}
            <TouchableOpacity style={styles.settingItem} activeOpacity={0.7}>
              <View style={styles.settingLeft}>
                <View style={[styles.iconContainer, { backgroundColor: '#FEE2E2' }]}>
                  <HelpCircle color="#DC2626" size={22} />
                </View>
                <View style={styles.settingTextContainer}>
                  <Text style={styles.settingTitle}>Centro de Ayuda</Text>
                  <Text style={styles.settingSubtitle}>Preguntas frecuentes</Text>
                </View>
              </View>
              <ChevronRight color="#9CA3AF" size={20} />
            </TouchableOpacity>

            <View style={styles.separator} />

            {/* Soporte por Email */}
            <TouchableOpacity 
              style={styles.settingItem} 
              activeOpacity={0.7}
              onPress={openEmail}
            >
              <View style={styles.settingLeft}>
                <View style={[styles.iconContainer, { backgroundColor: '#DBEAFE' }]}>
                  <Mail color="#3B82F6" size={22} />
                </View>
                <View style={styles.settingTextContainer}>
                  <Text style={styles.settingTitle}>Soporte</Text>
                  <Text style={styles.settingSubtitle}>soporte@contigope.pe</Text>
                </View>
              </View>
              <ExternalLink color="#9CA3AF" size={18} />
            </TouchableOpacity>
          </View>
        </View>

        {/* App Info */}
        <View style={styles.appInfo}>
          <Text style={styles.appInfoText}>ContigoPE v1.0.0</Text>
          <Text style={styles.appInfoSubtext}>© 2026 ContigoPE. Todos los derechos reservados.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  menuButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 4,
    zIndex: 10,
  },
  menuIcon: {
    fontSize: 28,
    color: '#FFFFFF',
  },
  headerTextContainer: {
    alignItems: 'center',
    width: '100%',
    paddingTop: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },

  // Secciones
  section: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#6B7280',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 12,
  },

  // Cards
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },

  // Setting Items
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  settingTextContainer: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 2,
  },
  settingSubtitle: {
    fontSize: 13,
    color: '#9CA3AF',
  },

  // Badge
  badge: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#D97706',
  },

  // Separator
  separator: {
    height: 1,
    backgroundColor: '#F3F4F6',
    marginLeft: 76,
  },

  // App Info
  appInfo: {
    alignItems: 'center',
    paddingVertical: 32,
  },
  appInfoText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
    marginBottom: 4,
  },
  appInfoSubtext: {
    fontSize: 12,
    color: '#9CA3AF',
  },
});
