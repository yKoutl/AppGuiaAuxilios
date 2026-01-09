// ============================================
// PANTALLA ACERCA DE - ESTILO NOSPLANET
// ============================================

import React from 'react';
import {
  View,
  Text,
  Image,
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
  Menu,
  Stethoscope,
} from 'lucide-react-native';

const ValueCard = ({ icon: Icon, title, description, color }) => (
  <View style={styles.valueCard}>
    <View style={[styles.valueIconContainer, { backgroundColor: `${color}15` }]}>
      <Icon color={color} size={28} />
    </View>
    <Text style={styles.valueTitle}>{title}</Text>
    <Text style={styles.valueDescription}>{description}</Text>
  </View>
);

const AboutScreen = ({ navigation }) => {
  const handleMenuPress = () => {
    navigation.openDrawer();
  };

  const openURL = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error('Error al abrir URL:', err)
    );
  };

  const valuesData = [
    {
      id: 1,
      icon: Heart,
      title: 'Compromiso',
      description: 'Dedicados a salvar vidas con información precisa',
      color: '#DC2626',
    },
    {
      id: 2,
      icon: Users,
      title: 'Accesibilidad',
      description: 'Información médica al alcance de todos',
      color: '#B91C1C',
    },
    {
      id: 3,
      icon: Target,
      title: 'Precisión',
      description: 'Guías verificadas por profesionales',
      color: '#991B1B',
    },
    {
      id: 4,
      icon: Sparkles,
      title: 'Innovación',
      description: 'IA para asistencia médica instantánea',
      color: '#7F1D1D',
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <StatusBar barStyle="light-content" backgroundColor="#DC2626" />
      
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Header con gradiente */}
        <LinearGradient
          colors={['#DC2626', '#B91C1C']}
          style={styles.header}
        >
          <View style={styles.headerContent}>
            <TouchableOpacity onPress={handleMenuPress} style={styles.menuButton}>
              <Menu color="#FFFFFF" size={28} />
            </TouchableOpacity>
            
            <View style={styles.headerTextContainer}>
              <Text style={styles.headerSubtitle}>Acerca de Nosotros</Text>
              <Text style={styles.headerTitle}>Conoce más sobre Guía de Auxilios</Text>
            </View>

            <Image 
              source={require('../../assets/LogoContigoPE.png')} 
              style={styles.headerAvatar}
            />
          </View>
        </LinearGradient>

        {/* Sección: Misión */}
        <View style={styles.section}>
          <View style={styles.missionCard}>
            <View style={styles.missionIconContainer}>
              <Stethoscope color="#DC2626" size={48} />
            </View>
            <Text style={styles.missionTitle}>Nuestra Misión</Text>
            <Text style={styles.missionText}>
              Proporcionar acceso rápido y confiable a información de primeros
              auxilios para todos los peruanos, utilizando tecnología de IA para
              ofrecer asistencia inmediata en situaciones de emergencia.
            </Text>
            <View style={styles.missionDivider} />
            <Text style={styles.missionSubtext}>
              Creemos que cada segundo cuenta, y juntos podemos salvar vidas.
            </Text>
          </View>
        </View>

        {/* Sección: Valores */}
        <View style={styles.section}>
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

        {/* Sección: Historia */}
        <View style={styles.historySection}>
          <View style={styles.historyContent}>
            <Award color="#FBBF24" size={40} />
            <Text style={styles.historyTitle}>Nuestra Historia</Text>
            <Text style={styles.historyText}>
              Creada en 2026, Guía de Auxilios nace con el objetivo de
              democratizar el acceso a información médica de emergencia en Perú.
              Combinamos tecnología de IA con conocimiento médico verificado para
              ofrecer asistencia cuando más se necesita.
            </Text>
          </View>
        </View>

        {/* Sección: Contacto */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contacto</Text>
          <View style={styles.contactContainer}>
            {/* Email */}
            <TouchableOpacity
              style={styles.contactItem}
              onPress={() => openURL('mailto:contacto@guiaauxilios.pe')}
              activeOpacity={0.7}
            >
              <View style={styles.contactIconContainer}>
                <Mail color="#DC2626" size={22} />
              </View>
              <View style={styles.contactTextContainer}>
                <Text style={styles.contactLabel}>Email</Text>
                <Text style={styles.contactValue}>contacto@guiaauxilios.pe</Text>
              </View>
              <ExternalLink color="#999" size={18} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer - Versión */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Guía de Auxilios</Text>
          <Text style={styles.footerVersion}>ContigoPE v1.0.0</Text>
          <Text style={styles.footerCopyright}>
            © 2026 Guía de Auxilios. Todos los derechos reservados.
          </Text>
        </View>

        {/* Espaciado inferior */}
        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DC2626',
  },
  scrollView: {
    flex: 1,
  },

  // Header
  header: {
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButton: {
    padding: 4,
    marginRight: 12,
  },
  headerTextContainer: {
    flex: 1,
  },
  headerSubtitle: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },

  // Secciones
  section: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
  },

  // Misión
  missionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    marginTop: -15,
  },
  missionIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FEE2E2',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  missionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 12,
    textAlign: 'center',
  },
  missionText: {
    fontSize: 15,
    color: '#666',
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 16,
  },
  missionDivider: {
    width: 60,
    height: 3,
    backgroundColor: '#DC2626',
    borderRadius: 2,
    marginVertical: 12,
  },
  missionSubtext: {
    fontSize: 14,
    color: '#999',
    lineHeight: 22,
    textAlign: 'center',
    fontStyle: 'italic',
  },

  // Valores
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
  valueIconContainer: {
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
    marginTop: 24,
    marginHorizontal: 20,
    backgroundColor: '#7F1D1D',
    borderRadius: 24,
    padding: 24,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  historyContent: {
    alignItems: 'center',
  },
  historyTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 16,
    marginBottom: 12,
    textAlign: 'center',
  },
  historyText: {
    fontSize: 15,
    color: '#FEE2E2',
    lineHeight: 24,
    textAlign: 'center',
  },

  // Contacto
  contactContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  contactIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FEE2E2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  contactTextContainer: {
    flex: 1,
  },
  contactLabel: {
    fontSize: 12,
    color: '#999',
    marginBottom: 2,
  },
  contactValue: {
    fontSize: 15,
    color: '#1F2937',
    fontWeight: '500',
  },

  // Footer
  footer: {
    alignItems: 'center',
    paddingTop: 32,
    paddingBottom: 16,
  },
  footerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  footerVersion: {
    fontSize: 13,
    color: '#FCA5A5',
    marginBottom: 8,
  },
  footerCopyright: {
    fontSize: 11,
    color: '#FEE2E2',
    textAlign: 'center',
  },
});

export default AboutScreen;
