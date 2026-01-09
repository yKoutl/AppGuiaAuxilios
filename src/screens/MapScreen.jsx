// ============================================
// PANTALLA DE MAPA - SERVICIOS DE EMERGENCIA CON GPS REAL
// ============================================

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
  ActivityIndicator,
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import { serviciosData } from '../data/data.jsx';

const MapScreen = ({ route }) => {
  const { servicioKey } = route.params;
  const servicio = serviciosData[servicioKey];
  
  const [userLocation, setUserLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  // Obtener ubicación del usuario al cargar
  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      
      if (status !== 'granted') {
        Alert.alert(
          'Permiso Denegado',
          'No se puede acceder a tu ubicación. Se mostrará Lima por defecto.'
        );
        setLoading(false);
        return;
      }

      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });

      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    } catch (error) {
      console.error('Error obteniendo ubicación:', error);
      Alert.alert('Error', 'No se pudo obtener tu ubicación');
    } finally {
      setLoading(false);
    }
  };

  // Configuración inicial del mapa
  const initialRegion = userLocation
    ? {
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        latitudeDelta: 0.15,
        longitudeDelta: 0.15,
      }
    : {
        // Ubicación por defecto (Centro de Lima)
        latitude: -12.0464,
        longitude: -77.0428,
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

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#DC2626" />
        <Text style={styles.loadingText}>Obteniendo tu ubicación...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* MAPA */}
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={initialRegion}
        showsUserLocation
        showsMyLocationButton
        showsCompass
      >
        {/* MARCADOR DEL USUARIO */}
        {userLocation && (
          <Marker
            coordinate={userLocation}
            title="Tu ubicación"
            description="Estás aquí"
            pinColor="#4B5563"
          >
            <View style={styles.userMarker}>
              <Text style={styles.userMarkerText}>📍</Text>
            </View>
          </Marker>
        )}

        {/* MARCADORES DEL SERVICIO */}
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
        
        {userLocation ? (
          <Text style={styles.locationText}>
            📍 Mostrando tu ubicación actual
          </Text>
        ) : (
          <Text style={styles.locationText}>
            ℹ️ Ubicación por defecto: Lima Centro
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#6B7280',
  },
  userMarker: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#DC2626',
  },
  userMarkerText: {
    fontSize: 20,
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
    marginBottom: 4,
  },
  locationText: {
    fontSize: 12,
    color: '#9CA3AF',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default MapScreen;
