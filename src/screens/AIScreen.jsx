// ============================================
// PANTALLA DE ASISTENTE IA - GEMINI
// ============================================

import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Modal,
  Pressable,
  StatusBar,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Bot } from 'lucide-react-native';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Inicializar Gemini AI con variable de entorno
const GEMINI_API_KEY = process.env.EXPO_PUBLIC_GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.error('ERROR: EXPO_PUBLIC_GEMINI_API_KEY no está configurada');
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY || '');

// Modal de error mejorado
const ErrorModal = ({ visible, onClose, message }) => (
  <Modal
    animationType="fade"
    transparent={true}
    visible={visible}
    onRequestClose={onClose}
  >
    <Pressable style={styles.modalOverlay} onPress={onClose}>
      <Pressable style={styles.modalContent} onPress={(e) => e.stopPropagation()}>
        {/* Icono de error */}
        <View style={styles.errorIconContainer}>
          <Text style={styles.errorIcon}>⚠️</Text>
        </View>
        
        {/* Título */}
        <Text style={styles.modalTitle}>Error de Conexión</Text>
        
        {/* Mensaje */}
        <Text style={styles.modalMessage}>{message}</Text>
        
        {/* Detalles */}
        <View style={styles.modalDetails}>
          <Text style={styles.modalDetailTitle}>Por favor verifica:</Text>
          <Text style={styles.modalDetailItem}>• Tu conexión a internet</Text>
          <Text style={styles.modalDetailItem}>• Que la API key esté configurada</Text>
        </View>

        {/* Botón */}
        <TouchableOpacity
          style={styles.modalButton}
          onPress={onClose}
          activeOpacity={0.8}
        >
          <Text style={styles.modalButtonText}>Entendido</Text>
        </TouchableOpacity>
      </Pressable>
    </Pressable>
  </Modal>
);

const AIScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const flatListRef = useRef(null);

  const handleMenuPress = () => {
    navigation.openDrawer();
  };

  // Configurar el modelo con instrucciones
  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash',
    systemInstruction: `Eres un experto en primeros auxilios y medicina de emergencia especializado en el contexto de Perú. 

Tus responsabilidades:
1. Proporcionar información precisa sobre primeros auxilios
2. Usar términos médicos apropiados pero explicados de forma simple
3. Siempre mencionar los números de emergencia de Perú cuando sea relevante:
   - SAMU (Emergencias médicas): 106
   - Policía Nacional: 105
   - Bomberos: 116
4. Si la situación es grave o amenaza la vida, SIEMPRE recomendar llamar al SAMU (106) inmediatamente
5. Recordar que NO reemplazas atención médica profesional
6. Ser conciso pero completo en tus respuestas
7. Usar un tono profesional pero empático

Importante: Si no estás seguro de algo, admítelo y recomienda buscar atención médica profesional.`,
  });

  // Agregar mensaje de bienvenida al cargar
  useEffect(() => {
    setMessages([
      {
        id: '1',
        text: '¡Hola! Soy tu asistente de primeros auxilios con IA. ¿En qué puedo ayudarte hoy?\n\nRecuerda: En emergencias graves, llama al SAMU (106) inmediatamente.',
        isUser: false,
        timestamp: new Date(),
      },
    ]);
  }, []);

  // Enviar mensaje a la IA
  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      text: inputText.trim(),
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setLoading(true);

    try {
      // Crear historial solo con mensajes reales del chat (sin el mensaje de bienvenida inicial)
      const chatHistory = messages
        .filter(msg => msg.id !== '1') // Excluir mensaje de bienvenida
        .map((msg) => ({
          role: msg.isUser ? 'user' : 'model',
          parts: [{ text: msg.text }],
        }));

      // Generar respuesta
      const chat = model.startChat({
        history: chatHistory,
      });

      const result = await chat.sendMessage(inputText.trim());
      const response = await result.response;
      const aiText = response.text();

      const aiMessage = {
        id: (Date.now() + 1).toString(),
        text: aiText,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error con Gemini:', error);
      
      // Mostrar modal de error mejorado
      setErrorMessage('No pude conectar con el asistente inteligente.');
      setErrorModalVisible(true);
    } finally {
      setLoading(false);
    }
  };

  // Renderizar cada mensaje
  const renderMessage = ({ item }) => (
    <View
      style={[
        styles.messageBubble,
        item.isUser ? styles.userBubble : styles.aiBubble,
      ]}
    >
      {!item.isUser && <Text style={styles.aiLabel}>🤖 Asistente IA</Text>}
      <Text style={[styles.messageText, item.isUser && styles.userText]}>
        {item.text}
      </Text>
      <Text style={styles.timestamp}>
        {item.timestamp.toLocaleTimeString('es-PE', {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <StatusBar barStyle="light-content" backgroundColor="#DC2626" />
      
      {/* Header personalizado */}
      <LinearGradient
        colors={['#DC2626', '#B91C1C', '#991B1B']}
        style={styles.header}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {/* Elementos decorativos */}
        <View style={styles.decorativeIconLeft}>
          <Bot size={60} color="rgba(255, 255, 255, 0.08)" strokeWidth={1.5} />
        </View>
        <View style={styles.decorativeIconRight}>
          <Bot size={40} color="rgba(255, 255, 255, 0.08)" strokeWidth={1.5} />
        </View>

        {/* Top Bar */}
        <View style={styles.topBar}>
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

          <View style={styles.avatarContainer}>
            <Image
              source={require('../../assets/LogoContigoPE.png')}
              style={styles.avatar}
              resizeMode="contain"
            />
            <View style={styles.avatarBorder} />
          </View>
        </View>

        {/* Contenido */}
        <View style={styles.content}>
          <View style={styles.titleSection}>
            <View style={styles.iconCircle}>
              <Bot size={28} color="#FDE047" strokeWidth={2.5} />
            </View>
            <View style={styles.titleTextContainer}>
              <Text style={styles.greeting}>Powered by Gemini AI</Text>
              <Text style={styles.headerTitle}>Asistente IA</Text>
              <Text style={styles.headerSubtitle}>Consultas de primeros auxilios</Text>
            </View>
          </View>
        </View>
      </LinearGradient>

      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={100}
      >
      {/* LISTA DE MENSAJES */}
      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messagesList}
        onContentSizeChange={() =>
          flatListRef.current?.scrollToEnd({ animated: true })
        }
        showsVerticalScrollIndicator={false}
      />

      {/* INDICADOR DE CARGA */}
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color="#DC2626" />
          <Text style={styles.loadingText}>Pensando...</Text>
        </View>
      )}

      {/* AVISO IMPORTANTE */}
      <View style={styles.disclaimer}>
        <Text style={styles.disclaimerText}>
          ⚠️ Información general. En emergencias llama al SAMU: 106
        </Text>
      </View>

      {/* INPUT Y BOTÓN DE ENVIAR */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Escribe tu consulta médica..."
          placeholderTextColor="#9CA3AF"
          value={inputText}
          onChangeText={setInputText}
          multiline
          maxLength={500}
          editable={!loading}
        />
        <TouchableOpacity
          style={[styles.sendButton, loading && styles.sendButtonDisabled]}
          onPress={handleSend}
          disabled={loading || !inputText.trim()}
          activeOpacity={0.7}
        >
          <Text style={styles.sendButtonText}>➤</Text>
        </TouchableOpacity>
      </View>

      </KeyboardAvoidingView>

      {/* Modal de error */}
      <ErrorModal
        visible={errorModalVisible}
        onClose={() => setErrorModalVisible(false)}
        message={errorMessage}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingHorizontal: 20,
    position: 'relative',
    overflow: 'hidden',
  },
  decorativeIconLeft: {
    position: 'absolute',
    top: -10,
    left: -20,
    transform: [{ rotate: '-15deg' }],
  },
  decorativeIconRight: {
    position: 'absolute',
    top: 30,
    right: -10,
    transform: [{ rotate: '15deg' }],
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    zIndex: 1,
  },
  menuButton: {
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
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: '#FFF',
    backgroundColor: '#FFFFFF',
  },
  avatarBorder: {
    position: 'absolute',
    width: 58,
    height: 58,
    borderRadius: 29,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    top: -4,
    left: -4,
  },
  content: {
    zIndex: 1,
  },
  titleSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  titleTextContainer: {
    flex: 1,
  },
  greeting: {
    fontSize: 12,
    color: '#FEE2E2',
    marginBottom: 2,
    fontWeight: '500',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 2,
    letterSpacing: 0.3,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#FDE047',
    fontWeight: '600',
  },
  keyboardView: {
    flex: 1,
  },
  messagesList: {
    padding: 16,
    paddingBottom: 8,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 16,
    marginBottom: 12,
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#DC2626',
    borderBottomRightRadius: 4,
  },
  aiBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 4,
    // Sombra
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  aiLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#6B7280',
    marginBottom: 4,
  },
  messageText: {
    fontSize: 15,
    color: '#1F2937',
    lineHeight: 22,
  },
  userText: {
    color: '#FFFFFF',
  },
  timestamp: {
    fontSize: 10,
    color: '#9CA3AF',
    marginTop: 4,
    alignSelf: 'flex-end',
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  loadingText: {
    marginLeft: 8,
    fontSize: 13,
    color: '#6B7280',
    fontStyle: 'italic',
  },
  disclaimer: {
    backgroundColor: '#FEF3C7',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: '#FCD34D',
  },
  disclaimerText: {
    fontSize: 11,
    color: '#92400E',
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 15,
    color: '#1F2937',
    maxHeight: 100,
    marginRight: 8,
  },
  sendButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#DC2626',
    alignItems: 'center',
    justifyContent: 'center',
    // Sombra
    shadowColor: '#DC2626',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  sendButtonDisabled: {
    backgroundColor: '#D1D5DB',
  },
  sendButtonText: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },

  // Modal de error
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
    padding: 28,
    width: '100%',
    maxWidth: 360,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  errorIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FEE2E2',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  errorIcon: {
    fontSize: 48,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1F2937',
    marginBottom: 12,
    textAlign: 'center',
  },
  modalMessage: {
    fontSize: 16,
    color: '#4B5563',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 20,
  },
  modalDetails: {
    width: '100%',
    backgroundColor: '#F9FAFB',
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
  },
  modalDetailTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 12,
  },
  modalDetailItem: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 22,
    paddingLeft: 8,
  },
  modalButton: {
    backgroundColor: '#DC2626',
    paddingVertical: 14,
    paddingHorizontal: 48,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#DC2626',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});

export default AIScreen;
