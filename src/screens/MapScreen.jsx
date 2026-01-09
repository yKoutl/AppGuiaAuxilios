// ============================================
// PANTALLA DE MAPA - SERVICIOS DE EMERGENCIA
// ============================================

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { serviciosData } from '../data/data.jsx';

const MapScreen = ({ route }) => {
  // Obtener la clave del servicio desde los parámetros de navegación
  const { servicioKey } = route.params;
  
  // Obtener los datos del servicio correspondiente
  const servicio = serviciosData[servicioKey];

  // Configuración inicial del mapa (centrado en el primer marcador)
  const initialRegion = {
    latitude: servicio.marcadores[0].latitude,
    longitude: servicio.marcadores[0].longitude,
    latitudeDelta: 0.15,
    longitudeDelta: 0.15,
  };

  // Función para realizar llamada telefónica
  const handleLlamar = () => {
    const phoneNumber = servicio.numero;
    
    Alert.alert(
      'Llamar a Emergencias',
      `¿Deseas llamar al ${servicio.nombre} (${phoneNumber})?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Llamar',
          onPress: () => {
            Linking.openURL(`tel:${phoneNumber}`).catch((err) =>
              Alert.alert('Error', 'No se pudo realizar la llamada')
            );
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      {/* MAPA */}
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={initialRegion}
        showsUserLocation
        showsMyLocationButton
      >
        {/* MARCADORES */}
        {servicio.marcadores.map((marcador) => (
          <Marker
            key={marcador.id}
            coordinate={{
              latitude: marcador.latitude,
              longitude: marcador.longitude,
            }}
            title={marcador.titulo}
            description={servicio.nombre}
            pinColor={servicio.color}
          />
        ))}
      </MapView>

      {/* TARJETA FLOTANTE CON INFORMACIÓN DEL SERVICIO */}
      <View style={styles.infoCard}>
        {/* Nombre del servicio */}
        <Text style={styles.serviceName}>{servicio.nombre}</Text>
        
        {/* Número de emergencia gigante */}
        <Text style={[styles.serviceNumber, { color: servicio.color }]}>
          {servicio.numero}
        </Text>

        {/* Botón de llamar */}
        <TouchableOpacity
          style={[styles.callButton, { backgroundColor: servicio.color }]}
          onPress={handleLlamar}
          activeOpacity={0.8}
        >
          <Text style={styles.callButtonIcon}>📞</Text>
          <Text style={styles.callButtonText}>LLAMAR AHORA</Text>
        </TouchableOpacity>

        {/* Información adicional */}
        <Text style={styles.infoText}>
          {servicio.marcadores.length} ubicaciones cercanas en el mapa
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1, // El mapa ocupa toda la pantalla
  },
  infoCard: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    // Sombra pronunciada
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 15,
  },
  serviceName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 8,
    textAlign: 'center',
  },
  serviceNumber: {
    fontSize: 64,
    fontWeight: '900',
    marginBottom: 16,
    letterSpacing: 2,
  },
  callButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 15,
    width: '100%',
    marginBottom: 12,
    // Sombra
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 8,
  },
  callButtonIcon: {
    fontSize: 24,
    marginRight: 8,
  },
  callButtonText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
  infoText: {
    fontSize: 13,
    color: '#6B7280',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default MapScreen;
