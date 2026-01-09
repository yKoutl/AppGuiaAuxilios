// ============================================
// PANTALLA ACERCA DE CONTIGOPE
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
  Mail,
  ExternalLink,
  Stethoscope,
  Shield,
  Activity,
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
  const openEmail = () => {
    Linking.openURL('mailto:soporte@contigope.pe').catch((err) =>
      console.error('Error al abrir email:', err)
    );
  };

  const valuesData = [
    {
      id: 1,
      icon: Heart,
      title: 'Compromiso',
      description: 'Salvar vidas con información precisa y confiable',
      color: '#DC2626',
    },
    {
      id: 2,
      icon: Users,
      title: 'Accesibilidad',
      description: 'Primeros auxilios al alcance de todos',
      color: '#B91C1C',
    },
    {
      id: 3,
      icon: Shield,
      title: 'Confiabilidad',
      description: 'Guías verificadas por profesionales médicos',
      color: '#991B1B',
    },
    {
      id: 4,
      icon: Sparkles,
      title: 'Innovación',
      description: 'IA y tecnología para ayudar en emergencias',
      color: '#7F1D1D',
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <StatusBar barStyle="light-content" backgroundColor="#DC2626" />
      
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Sección: Misión */}
        <View style={styles.missionSection}>
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
            <Text style={styles.missionQuote}>
              "Creemos que cada segundo cuenta, y juntos podemos salvar vidas."
            </Text>
          </View>
        </View>

        {/* Sección: Valores */}
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

        {/* Características */}
        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>Características</Text>
          <View style={styles.featuresList}>
            <View style={styles.featureItem}>
              <Text style={styles.featureBullet}>✓</Text>
              <Text style={styles.featureText}>12 guías de primeros auxilios verificadas</Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureBullet}>✓</Text>
              <Text style={styles.featureText}>Asistente IA con Gemini</Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureBullet}>✓</Text>
              <Text style={styles.featureText}>Mapa de servicios de emergencia</Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureBullet}>✓</Text>
              <Text style={styles.featureText}>Localización GPS en tiempo real</Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureBullet}>✓</Text>
              <Text style={styles.featureText}>Acceso a números de emergencia</Text>
            </View>
          </View>
        </View>

        {/* Sección: Contacto */}
        <View style={styles.contactSection}>
          <Text style={styles.sectionTitle}>Contacto</Text>
          <TouchableOpacity
            style={styles.contactButton}
            onPress={openEmail}
            activeOpacity={0.8}
          >
            <Mail color="#DC2626" size={20} />
            <Text style={styles.contactText}>soporte@contigope.pe</Text>
            <ExternalLink color="#DC2626" size={16} />
          </TouchableOpacity>
        </View>

        {/* Footer - Versión */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>ContigoPE v1.0.0</Text>
          <Text style={styles.footerCopyright}>
            © 2026 ContigoPE. Todos los derechos reservados.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  scrollContent: {
    paddingBottom: 20,
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
    marginBottom: 16,
  },
  missionQuote: {
    fontSize: 15,
    color: '#DC2626',
    fontStyle: 'italic',
    textAlign: 'center',
    lineHeight: 22,
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

  // Características
  featuresSection: {
    padding: 20,
  },
  featuresList: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  featureBullet: {
    fontSize: 18,
    color: '#10B981',
    fontWeight: '700',
    marginRight: 12,
  },
  featureText: {
    flex: 1,
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 22,
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

  // Footer
  footer: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  footerText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#6B7280',
    marginBottom: 4,
  },
  footerCopyright: {
    fontSize: 12,
    color: '#9CA3AF',
  },
});

export default AboutScreen;
