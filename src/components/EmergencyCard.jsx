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
    borderRadius: 15,
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 12,
    alignItems: 'center',
    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    // Sombra para Android
    elevation: 4,
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#F3F4F6',
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
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 18,
  },
  arrowContainer: {
    width: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    fontSize: 32,
    color: '#D1D5DB',
    fontWeight: '300',
  },
});

export default EmergencyCard;
