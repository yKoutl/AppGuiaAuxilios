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
  Modal,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Globe,
  Bell,
  Moon,
  ChevronRight,
  FileText,
  HelpCircle,
  Mail,
  ExternalLink,
  X,
} from 'lucide-react-native';

// Modal para Términos y Condiciones
const TermsModal = ({ visible, onClose }) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={visible}
    onRequestClose={onClose}
  >
    <SafeAreaView style={styles.modalContainer}>
      <View style={styles.modalHeader}>
        <Text style={styles.modalHeaderTitle}>Términos de Uso</Text>
        <TouchableOpacity onPress={onClose} style={styles.modalCloseButton}>
          <X color="#1F2937" size={24} />
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.modalContent} showsVerticalScrollIndicator={false}>
        <View style={styles.modalSection}>
          <Text style={styles.modalSectionTitle}>Términos y Condiciones de Uso</Text>
          <Text style={styles.modalUpdateDate}>Última actualización: 9 de enero de 2026</Text>
        </View>

        <View style={styles.modalSection}>
          <Text style={styles.modalSubtitle}>1. Aceptación de los Términos</Text>
          <Text style={styles.modalText}>
            Al descargar, instalar o utilizar ContigoPE [Guía de Auxilios] ("la App"), usted acepta estar sujeto a estos 
            Términos y Condiciones. Si no está de acuerdo con estos términos, por favor no utilice la App.
          </Text>
        </View>

        <View style={styles.modalSection}>
          <Text style={styles.modalSubtitle}>2. Uso de la Aplicación</Text>
          <Text style={styles.modalText}>
            La App proporciona una plataforma para promover el reciclaje y recompensar por actividades de reciclaje y 
            acumulación de EcoPuntos por sus actividades de reciclaje y otras acciones sostenibles.
          </Text>
        </View>

        <View style={styles.modalSection}>
          <Text style={styles.modalSubtitle}>3. Responsabilidad Médica</Text>
          <Text style={styles.modalText}>
            <Text style={styles.modalBold}>IMPORTANTE:</Text> Esta aplicación proporciona información general sobre primeros auxilios. 
            NO reemplaza la atención médica profesional. En caso de emergencia grave o que amenace la vida, 
            siempre llame inmediatamente al SAMU (106) o acuda al servicio de emergencias más cercano.
          </Text>
        </View>

        <View style={styles.modalSection}>
          <Text style={styles.modalSubtitle}>4. Limitación de Responsabilidad</Text>
          <Text style={styles.modalText}>
            ContigoPE y Nos Planet S.A.C no se hacen responsables por cualquier daño directo, indirecto, incidental 
            o consecuente que resulte del uso o la imposibilidad de usar esta aplicación. El usuario asume toda 
            la responsabilidad por el uso de la información proporcionada.
          </Text>
        </View>

        <View style={styles.modalSection}>
          <Text style={styles.modalSubtitle}>5. Asistente IA</Text>
          <Text style={styles.modalText}>
            El asistente de IA utiliza tecnología de Google Gemini para proporcionar respuestas. Aunque nos esforzamos 
            por ofrecer información precisa, la IA puede cometer errores. Siempre verifique la información crítica con 
            profesionales de la salud.
          </Text>
        </View>

        <View style={styles.modalSection}>
          <Text style={styles.modalSubtitle}>6. Modificaciones</Text>
          <Text style={styles.modalText}>
            Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán 
            en vigor inmediatamente después de su publicación en la App. Su uso continuo de la App después de 
            cualquier cambio constituye su aceptación de los nuevos términos.
          </Text>
        </View>

        <View style={styles.modalSection}>
          <Text style={styles.modalSubtitle}>7. Contacto</Text>
          <Text style={styles.modalText}>
            Para preguntas sobre estos términos, contáctanos:
          </Text>
          <TouchableOpacity 
            style={styles.modalContactButton}
            onPress={() => Linking.openURL('mailto:soporte@contigope.pe')}
          >
            <Mail color="#DC2626" size={16} />
            <Text style={styles.modalContactText}>soporte@contigope.pe</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  </Modal>
);

// Modal para Centro de Ayuda
const HelpCenterModal = ({ visible, onClose }) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={visible}
    onRequestClose={onClose}
  >
    <SafeAreaView style={styles.modalContainer}>
      <View style={styles.modalHeader}>
        <Text style={styles.modalHeaderTitle}>Centro de Ayuda</Text>
        <TouchableOpacity onPress={onClose} style={styles.modalCloseButton}>
          <X color="#1F2937" size={24} />
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.modalContent} showsVerticalScrollIndicator={false}>
        <View style={styles.modalSection}>
          <Text style={styles.modalSectionTitle}>Temas de Ayuda</Text>
        </View>

        <View style={styles.helpCard}>
          <View style={styles.helpIconContainer}>
            <Text style={styles.helpIcon}>♻️</Text>
          </View>
          <View style={styles.helpTextContainer}>
            <Text style={styles.helpTitle}>¿Cómo usar la app?</Text>
            <Text style={styles.helpDescription}>
              1. Explora las 12 guías de primeros auxilios desde la pantalla principal{'\n'}
              2. Usa el Asistente IA para consultas específicas{'\n'}
              3. Accede a números de emergencia desde el menú{'\n'}
              4. Encuentra servicios cercanos en el mapa
            </Text>
          </View>
        </View>

        <View style={styles.helpCard}>
          <View style={styles.helpIconContainer}>
            <Text style={styles.helpIcon}>🤖</Text>
          </View>
          <View style={styles.helpTextContainer}>
            <Text style={styles.helpTitle}>¿Cómo funciona el Asistente IA?</Text>
            <Text style={styles.helpDescription}>
              El asistente utiliza inteligencia artificial de Google Gemini para responder preguntas sobre 
              primeros auxilios. Solo escribe tu consulta y obtendrás una respuesta inmediata. Recuerda que 
              en emergencias graves debes llamar al SAMU (106).
            </Text>
          </View>
        </View>

        <View style={styles.helpCard}>
          <View style={styles.helpIconContainer}>
            <Text style={styles.helpIcon}>🚨</Text>
          </View>
          <View style={styles.helpTextContainer}>
            <Text style={styles.helpTitle}>Números de Emergencia Perú</Text>
            <Text style={styles.helpDescription}>
              • SAMU (Emergencias médicas): 106{'\n'}
              • Policía Nacional: 105{'\n'}
              • Bomberos: 116{'\n\n'}
              Todas las llamadas son gratuitas y disponibles 24/7.
            </Text>
          </View>
        </View>

        <View style={styles.modalSection}>
          <Text style={styles.modalSectionTitle}>Preguntas Frecuentes</Text>
        </View>

        <View style={styles.faqItem}>
          <Text style={styles.faqQuestion}>¿La app funciona sin internet?</Text>
          <Text style={styles.faqAnswer}>
            Las guías de primeros auxilios funcionan sin conexión. El Asistente IA y el mapa requieren internet.
          </Text>
        </View>

        <View style={styles.faqItem}>
          <Text style={styles.faqQuestion}>¿Es confiable la información?</Text>
          <Text style={styles.faqAnswer}>
            Sí, toda la información ha sido verificada por profesionales de la salud. Sin embargo, no reemplaza 
            la atención médica profesional.
          </Text>
        </View>

        <View style={styles.faqItem}>
          <Text style={styles.faqQuestion}>¿Cómo reporto un problema?</Text>
          <Text style={styles.faqAnswer}>
            Contáctanos por email: soporte@contigope.pe
          </Text>
        </View>

        <View style={styles.modalSection}>
          <Text style={styles.modalSubtitle}>¿Necesitas más ayuda?</Text>
          <TouchableOpacity 
            style={styles.modalContactButton}
            onPress={() => Linking.openURL('mailto:soporte@contigope.pe')}
          >
            <Mail color="#DC2626" size={16} />
            <Text style={styles.modalContactText}>Envíanos un mensaje directamente</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  </Modal>
);

export default function ConfigScreen({ navigation }) {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);
  const [termsModalVisible, setTermsModalVisible] = React.useState(false);
  const [helpModalVisible, setHelpModalVisible] = React.useState(false);

  const openEmail = () => {
    Linking.openURL('mailto:soporte@contigope.pe').catch((err) =>
      console.error('Error al abrir email:', err)
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <StatusBar barStyle="light-content" backgroundColor="#DC2626" />

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
            <TouchableOpacity 
              style={styles.settingItem} 
              activeOpacity={0.7}
              onPress={() => setTermsModalVisible(true)}
            >
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

            {/* Centro de Ayuda */}
            <TouchableOpacity 
              style={styles.settingItem} 
              activeOpacity={0.7}
              onPress={() => setHelpModalVisible(true)}
            >
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

      {/* Modales */}
      <TermsModal visible={termsModalVisible} onClose={() => setTermsModalVisible(false)} />
      <HelpCenterModal visible={helpModalVisible} onClose={() => setHelpModalVisible(false)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
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

  // Estilos de Modales
  modalContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
  },
  modalHeaderTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
  },
  modalCloseButton: {
    padding: 4,
  },
  modalContent: {
    flex: 1,
    paddingHorizontal: 20,
  },
  modalSection: {
    marginTop: 24,
  },
  modalSectionTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1F2937',
    marginBottom: 8,
  },
  modalUpdateDate: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 16,
  },
  modalSubtitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 12,
  },
  modalText: {
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 24,
  },
  modalBold: {
    fontWeight: '700',
    color: '#DC2626',
  },
  modalContactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    padding: 12,
    borderRadius: 8,
    marginTop: 12,
    gap: 8,
  },
  modalContactText: {
    fontSize: 14,
    color: '#DC2626',
    fontWeight: '600',
  },

  // Centro de Ayuda
  helpCard: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
  },
  helpIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  helpIcon: {
    fontSize: 24,
  },
  helpTextContainer: {
    flex: 1,
  },
  helpTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 8,
  },
  helpDescription: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
  },
  faqItem: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  faqQuestion: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 8,
  },
  faqAnswer: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
  },
});
