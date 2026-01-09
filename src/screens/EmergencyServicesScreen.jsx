// ============================================
// PANTALLA DE SERVICIOS DE EMERGENCIA
// ============================================

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  StatusBar,
  Modal,
  Pressable,
  ScrollView,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Phone,
  MapPin,
  Shield,
  Flame,
  Ambulance,
  X,
  ExternalLink,
  AlertCircle,
} from 'lucide-react-native';

const EmergencyServiceModal = ({ visible, onClose, service }) => {
  if (!service) return null;

  const handleCall = () => {
    Linking.openURL(`tel:${service.number}`);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <Pressable style={styles.modalOverlay} onPress={onClose}>
        <Pressable style={styles.modalContent} onPress={(e) => e.stopPropagation()}>
          {/* Header del modal */}
          <View style={[styles.modalHeader, { backgroundColor: service.color }]}>
            <service.icon color="#FFFFFF" size={32} />
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <X color="#FFFFFF" size={24} />
            </TouchableOpacity>
          </View>

          {/* Contenido */}
          <View style={styles.modalBody}>
            <Text style={styles.modalTitle}>{service.name}</Text>
            <Text style={styles.modalSubtitle}>{service.fullName}</Text>

            <View style={styles.modalDivider} />

            {/* Descripción */}
            <Text style={styles.modalDescription}>{service.description}</Text>

            {/* Número de emergencia */}
            <View style={styles.emergencyNumberBox}>
              <Phone color={service.color} size={24} />
              <Text style={styles.emergencyNumberText}>{service.number}</Text>
            </View>

            {/* Cuándo llamar */}
            <View style={styles.infoSection}>
              <Text style={styles.infoTitle}>¿Cuándo llamar?</Text>
              {service.whenToCall.map((item, index) => (
                <Text key={index} style={styles.infoItem}>• {item}</Text>
              ))}
            </View>

            {/* Botón de llamada */}
            <TouchableOpacity
              style={[styles.callButton, { backgroundColor: service.color }]}
              onPress={handleCall}
              activeOpacity={0.8}
            >
              <Phone color="#FFFFFF" size={20} />
              <Text style={styles.callButtonText}>Llamar al {service.number}</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default function EmergencyServicesScreen({ navigation }) {
  const [selectedService, setSelectedService] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleMenuPress = () => {
    navigation.openDrawer();
  };

  const services = [
    {
      id: 1,
      name: 'Policía Nacional',
      fullName: 'Policía Nacional del Perú',
      number: '105',
      icon: Shield,
      color: '#2563EB',
      description: 'Servicio de seguridad ciudadana y orden público. Disponible 24/7 para atender emergencias de seguridad.',
      whenToCall: [
        'Robos o asaltos en curso',
        'Violencia doméstica',
        'Accidentes de tránsito',
        'Disturbios o alteración del orden público',
        'Personas sospechosas o en peligro',
      ],
    },
    {
      id: 2,
      name: 'Bomberos',
      fullName: 'Cuerpo General de Bomberos Voluntarios del Perú',
      number: '116',
      icon: Flame,
      color: '#DC2626',
      description: 'Servicio de emergencias contra incendios, rescates y atención de desastres. Personal altamente capacitado disponible 24/7.',
      whenToCall: [
        'Incendios en viviendas o edificios',
        'Incendios forestales',
        'Rescate de personas atrapadas',
        'Fugas de gas o materiales peligrosos',
        'Inundaciones o desastres naturales',
      ],
    },
    {
      id: 3,
      name: 'SAMU',
      fullName: 'Sistema de Atención Móvil de Urgencia',
      number: '106',
      icon: Ambulance,
      color: '#059669',
      description: 'Servicio de atención médica prehospitalaria de emergencia del Ministerio de Salud. Ambulancias equipadas y personal especializado.',
      whenToCall: [
        'Emergencias médicas graves',
        'Accidentes con lesionados',
        'Dificultad respiratoria severa',
        'Dolor de pecho o síntomas cardíacos',
        'Pérdida de consciencia',
        'Hemorragias graves',
      ],
    },
  ];

  const handleServicePress = (service) => {
    setSelectedService(service);
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <StatusBar barStyle="light-content" backgroundColor="#DC2626" />
      
      {/* Header personalizado */}
      <LinearGradient
        colors={['#DC2626', '#B91C1C']}
        style={styles.header}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={handleMenuPress}
            activeOpacity={0.7}
          >
            <View style={styles.menuIcon}>
              <View style={styles.menuLine} />
              <View style={styles.menuLine} />
              <View style={styles.menuLine} />
            </View>
          </TouchableOpacity>

          <View style={styles.headerTextContainer}>
            <View style={styles.headerTitleRow}>
              <AlertCircle color="#FBBF24" size={28} strokeWidth={2.5} />
              <Text style={styles.headerTitle}>Emergencias</Text>
            </View>
            <Text style={styles.headerSubtitle}>Números de emergencia - Perú</Text>
          </View>

          <Image
            source={require('../../assets/LogoContigoPE.png')}
            style={styles.headerLogo}
            resizeMode="contain"
          />
        </View>
      </LinearGradient>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Servicios */}
        <View style={styles.servicesContainer}>
        {services.map((service) => (
          <TouchableOpacity
            key={service.id}
            style={[styles.serviceCard, { borderLeftColor: service.color }]}
            onPress={() => handleServicePress(service)}
            activeOpacity={0.7}
          >
            <View style={[styles.serviceIconContainer, { backgroundColor: `${service.color}15` }]}>
              <service.icon color={service.color} size={32} />
            </View>
            <View style={styles.serviceContent}>
              <Text style={styles.serviceName}>{service.name}</Text>
              <Text style={styles.serviceNumber}>{service.number}</Text>
              <Text style={styles.serviceHint}>Toca para más información</Text>
            </View>
            <ExternalLink color="#9CA3AF" size={20} />
          </TouchableOpacity>
        ))}
      </View>

        {/* Info adicional */}
        <View style={styles.infoBox}>
          <Text style={styles.infoBoxTitle}>ℹ️ Información Importante</Text>
          <Text style={styles.infoBoxText}>
            Estos números están disponibles 24 horas, los 7 días de la semana.
            En caso de emergencia real, no dudes en llamar.
          </Text>
          <Text style={styles.infoBoxText}>
            Las llamadas a estos números son gratuitas desde cualquier operador.
          </Text>
        </View>
      </ScrollView>

      {/* Modal de servicio */}
      <EmergencyServiceModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        service={selectedService}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuButton: {
    padding: 8,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    width: 24,
    height: 18,
    justifyContent: 'space-between',
  },
  menuLine: {
    width: '100%',
    height: 3,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
  },
  headerTextContainer: {
    flex: 1,
    marginLeft: 16,
  },
  headerTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 0.3,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#FEE2E2',
    fontWeight: '500',
    marginTop: 2,
  },
  headerLogo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    padding: 8,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  servicesContainer: {
    padding: 20,
    gap: 16,
  },
  serviceCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 4,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  serviceIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  serviceContent: {
    flex: 1,
  },
  serviceName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },
  serviceNumber: {
    fontSize: 24,
    fontWeight: '800',
    color: '#DC2626',
    marginBottom: 4,
  },
  serviceHint: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  infoBox: {
    margin: 20,
    backgroundColor: '#EFF6FF',
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#3B82F6',
  },
  infoBoxTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 8,
  },
  infoBoxText: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
    marginBottom: 6,
  },

  // Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    width: '100%',
    maxWidth: 400,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  modalHeader: {
    padding: 20,
    alignItems: 'center',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    padding: 8,
  },
  modalBody: {
    padding: 24,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1F2937',
    marginBottom: 4,
    textAlign: 'center',
  },
  modalSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 16,
  },
  modalDivider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 16,
  },
  modalDescription: {
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 22,
    marginBottom: 20,
    textAlign: 'center',
  },
  emergencyNumberBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9FAFB',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    gap: 12,
  },
  emergencyNumberText: {
    fontSize: 32,
    fontWeight: '900',
    color: '#1F2937',
  },
  infoSection: {
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 12,
  },
  infoItem: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 24,
    paddingLeft: 8,
  },
  callButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  callButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
