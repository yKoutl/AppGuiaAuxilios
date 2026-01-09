// ============================================
// PANTALLA NOS PLANET S.A.C
// ============================================

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Heart,
  Users,
  Target,
  Sparkles,
  Globe,
  Mail,
  Award,
  ExternalLink,
  Stethoscope,
  Building2,
  Calendar,
} from 'lucide-react-native';

const ValueCard = ({ icon: Icon, title, description, color }) => (
  <View style={styles.valueCard}>
    <View style={[styles.valueIconCircle, { backgroundColor: `${color}20` }]}>
      <Icon color={color} size={28} />
    </View>
    <Text style={styles.valueTitle}>{title}</Text>
    <Text style={styles.valueDescription}>{description}</Text>
  </View>
);

export default function NosPlametScreen({ navigation }) {
  const handleMenuPress = () => {
    navigation.openDrawer();
  };

  const openEmail = () => {
    Linking.openURL('mailto:contacto@nosplanet.com').catch((err) =>
      console.error('Error al abrir email:', err)
    );
  };

  const valuesData = [
    {
      id: 1,
      icon: Heart,
      title: 'Compromiso',
      description: 'Dedicados a crear soluciones tecnológicas que impacten positivamente',
      color: '#EF4444',
    },
    {
      id: 2,
      icon: Users,
      title: 'Accesibilidad',
      description: 'Tecnología al alcance de todos los peruanos',
      color: '#DC2626',
    },
    {
      id: 3,
      icon: Target,
      title: 'Precisión',
      description: 'Desarrollo de software con los más altos estándares',
      color: '#B91C1C',
    },
    {
      id: 4,
      icon: Sparkles,
      title: 'Innovación',
      description: 'Incorporando IA y tecnologías emergentes',
      color: '#DC2626',
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <StatusBar barStyle="light-content" backgroundColor="#DC2626" />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <LinearGradient
          colors={['#DC2626', '#B91C1C']}
          style={styles.header}
        >
          <TouchableOpacity onPress={handleMenuPress} style={styles.menuButton}>
            <Text style={styles.menuIcon}>☰</Text>
          </TouchableOpacity>

          <View style={styles.headerLogoContainer}>
            <Building2 color="#FFFFFF" size={48} />
            <Text style={styles.headerTitle}>NOS PLANET S.A.C</Text>
            <Text style={styles.headerSubtitle}>Soluciones tecnológicas • Perú</Text>
          </View>
        </LinearGradient>

        {/* Misión */}
        <View style={styles.missionSection}>
          <View style={styles.missionCard}>
            <View style={styles.missionIconContainer}>
              <Stethoscope color="#DC2626" size={40} />
            </View>
            <Text style={styles.missionTitle}>Nuestra Misión</Text>
            <Text style={styles.missionText}>
              Desarrollar soluciones tecnológicas innovadoras que mejoren la calidad de vida
              de los peruanos, facilitando el acceso a información vital en momentos críticos.
            </Text>
            <Text style={styles.missionQuote}>
              "Creemos que cada segundo cuenta, y juntos podemos salvar vidas."
            </Text>
          </View>
        </View>

        {/* Valores */}
        <View style={styles.valuesSection}>
          <Text style={styles.sectionTitle}>Nuestros Valores</Text>
          <View style={styles.valuesGrid}>
            {valuesData.map((value) => (
              <ValueCard
                key={value.id}
                icon={value.icon}
                title={value.title}
                description={value.description}
                color={value.color}
              />
            ))}
          </View>
        </View>

        {/* Historia */}
        <View style={styles.historySection}>
          <View style={styles.historyContent}>
            <Calendar color="#FFFFFF" size={32} />
            <Text style={styles.historyTitle}>Nuestra Historia</Text>
            <Text style={styles.historyText}>
              Fundada en 2024, NOS PLANET S.A.C nace de la visión de crear tecnología 
              que salve vidas. ContigoPE es nuestro primer producto, diseñado específicamente 
              para brindar asistencia médica de emergencia a todos los peruanos.
            </Text>
          </View>
        </View>

        {/* Proyectos */}
        <View style={styles.projectsSection}>
          <Text style={styles.sectionTitle}>Nuestros Proyectos</Text>
          <View style={styles.projectCard}>
            <View style={styles.projectHeader}>
              <Heart color="#DC2626" size={24} />
              <Text style={styles.projectName}>ContigoPE</Text>
            </View>
            <Text style={styles.projectDescription}>
              Aplicación de primeros auxilios con IA, GPS y guías médicas verificadas
              para emergencias en Perú.
            </Text>
            <View style={styles.projectBadge}>
              <Award color="#059669" size={16} />
              <Text style={styles.projectBadgeText}>Proyecto Activo</Text>
            </View>
          </View>
        </View>

        {/* Contacto */}
        <View style={styles.contactSection}>
          <Text style={styles.sectionTitle}>Contáctanos</Text>
          <TouchableOpacity
            style={styles.contactButton}
            onPress={openEmail}
            activeOpacity={0.8}
          >
            <Mail color="#DC2626" size={20} />
            <Text style={styles.contactText}>contacto@nosplanet.com</Text>
            <ExternalLink color="#DC2626" size={16} />
          </TouchableOpacity>

          <View style={styles.locationBox}>
            <Globe color="#6B7280" size={20} />
            <Text style={styles.locationText}>Lima, Perú 🇵🇪</Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2024-2026 NOS PLANET S.A.C</Text>
          <Text style={styles.footerSubtext}>Innovando para salvar vidas</Text>
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
  scrollContent: {
    paddingBottom: 20,
  },
  header: {
    paddingTop: 20,
    paddingBottom: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  menuButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 4,
  },
  menuIcon: {
    fontSize: 28,
    color: '#FFFFFF',
  },
  headerLogoContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: '#FFFFFF',
    marginTop: 16,
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    marginTop: 4,
  },

  // Misión
  missionSection: {
    padding: 20,
  },
  missionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 28,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  missionIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FEE2E2',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  missionTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1F2937',
    marginBottom: 16,
  },
  missionText: {
    fontSize: 16,
    color: '#4B5563',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 20,
  },
  missionQuote: {
    fontSize: 15,
    color: '#DC2626',
    fontStyle: 'italic',
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 20,
  },

  // Valores
  valuesSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1F2937',
    marginBottom: 16,
  },
  valuesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  valueCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  valueIconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  valueTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 6,
    textAlign: 'center',
  },
  valueDescription: {
    fontSize: 13,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 18,
  },

  // Historia
  historySection: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  historyContent: {
    backgroundColor: '#7F1D1D',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
  },
  historyTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    marginTop: 12,
    marginBottom: 12,
  },
  historyText: {
    fontSize: 15,
    color: 'rgba(255, 255, 255, 0.95)',
    textAlign: 'center',
    lineHeight: 22,
  },

  // Proyectos
  projectsSection: {
    padding: 20,
  },
  projectCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#DC2626',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  projectHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 8,
  },
  projectName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
  },
  projectDescription: {
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 22,
    marginBottom: 12,
  },
  projectBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#D1FAE5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 6,
  },
  projectBadgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#059669',
  },

  // Contacto
  contactSection: {
    padding: 20,
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    gap: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  contactText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  locationBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: 12,
  },
  locationText: {
    fontSize: 15,
    color: '#6B7280',
    fontWeight: '500',
  },

  // Footer
  footer: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  footerText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
    marginBottom: 4,
  },
  footerSubtext: {
    fontSize: 12,
    color: '#9CA3AF',
  },
});
