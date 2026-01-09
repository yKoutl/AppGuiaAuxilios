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
  Alert,
} from 'react-native';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Inicializar Gemini AI
const genAI = new GoogleGenerativeAI('AIzaSyCfr5e2My5rljDqoynk2PhHDT-Uzfv857I');

const AIScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const flatListRef = useRef(null);

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
      // Generar respuesta
      const chat = model.startChat({
        history: messages.map((msg) => ({
          role: msg.isUser ? 'user' : 'model',
          parts: [{ text: msg.text }],
        })),
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
      Alert.alert(
        'Error',
        'No pude conectar con el asistente. Verifica tu conexión a internet.'
      );
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
    <KeyboardAvoidingView
      style={styles.container}
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
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
});

export default AIScreen;
