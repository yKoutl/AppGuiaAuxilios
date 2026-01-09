// ============================================
// PANTALLA DE DETALLE
// ============================================

import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const DetailScreen = ({ route }) => {
  // Obtener los datos del item desde los parámetros de navegación
  const { item } = route.params;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* IMAGEN GRANDE */}
      <View style={styles.imageContainer}>
        <Image 
          source={item.imagen} 
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      {/* CONTENIDO */}
      <View style={styles.content}>
        {/* TÍTULO */}
        <Text style={styles.titulo}>{item.titulo}</Text>
        
        {/* SUBTÍTULO */}
        <Text style={styles.subtitulo}>{item.subtitulo}</Text>

        {/* LÍNEA SEPARADORA */}
        <View style={styles.divider} />

        {/* SECCIÓN DE PASOS */}
        <View style={styles.pasosContainer}>
          <Text style={styles.pasosHeader}>📋 Pasos a Seguir:</Text>
          <Text style={styles.pasosText}>{item.pasos}</Text>
        </View>

        {/* NOTA DE ADVERTENCIA */}
        <View style={styles.warningContainer}>
          <Text style={styles.warningEmoji}>⚠️</Text>
          <Text style={styles.warningText}>
            Esta es información general. En caso de emergencia grave, 
            llama a los servicios de emergencia inmediatamente.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  imageContainer: {
    width: width,
    height: width * 0.7, // Proporción 10:7
    backgroundColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  content: {
    padding: 20,
  },
  titulo: {
    fontSize: 32,
    fontWeight: '800',
    color: '#DC2626', // Rojo
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  subtitulo: {
    fontSize: 18,
    color: '#6B7280',
    lineHeight: 26,
    marginBottom: 20,
  },
  divider: {
    height: 2,
    backgroundColor: '#E5E7EB',
    marginVertical: 20,
  },
  pasosContainer: {
    marginBottom: 20,
  },
  pasosHeader: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 16,
  },
  pasosText: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 28,
    letterSpacing: 0.2,
  },
  warningContainer: {
    flexDirection: 'row',
    backgroundColor: '#FEF3C7',
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#F59E0B',
    marginTop: 20,
    marginBottom: 40,
  },
  warningEmoji: {
    fontSize: 24,
    marginRight: 12,
  },
  warningText: {
    flex: 1,
    fontSize: 14,
    color: '#92400E',
    lineHeight: 20,
    fontWeight: '500',
  },
});

export default DetailScreen;
