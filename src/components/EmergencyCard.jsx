// ============================================
// COMPONENTE: TARJETA DE EMERGENCIA
// ============================================

import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';

/**
 * Componente de tarjeta para mostrar cada tipo de emergencia
 * @param {Object} item - Objeto con los datos de la emergencia
 * @param {Function} onPress - Función a ejecutar al presionar la tarjeta
 */
const EmergencyCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      {/* Imagen circular a la izquierda */}
      <View style={styles.imageContainer}>
        <Image 
          source={item.imagen} 
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      {/* Contenido de texto */}
      <View style={styles.textContainer}>
        <Text style={styles.titulo}>{item.titulo}</Text>
        <Text style={styles.subtitulo} numberOfLines={2}>
          {item.subtitulo}
        </Text>
      </View>

      {/* Flecha indicadora a la derecha */}
      <View style={styles.arrowContainer}>
        <Text style={styles.arrow}>›</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F3F4F6',
    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    // Sombra para Android
    elevation: 5,
  },
  imageContainer: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    overflow: 'hidden',
    backgroundColor: '#FEE2E2',
    borderWidth: 2,
    borderColor: '#FCA5A5',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
    marginRight: 8,
  },
  titulo: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1F2937',
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  arrowContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FEE2E2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    fontSize: 24,
    color: '#DC2626',
    fontWeight: '600',
  },
});

export default EmergencyCard;
