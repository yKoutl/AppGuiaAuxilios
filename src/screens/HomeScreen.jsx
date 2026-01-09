// ============================================
// PANTALLA PRINCIPAL - HOME
// ============================================

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import EmergencyCard from '../components/EmergencyCard.jsx';
import { emergenciasData } from '../data/data.jsx';

const HomeScreen = ({ navigation }) => {
  // Estado para el texto de búsqueda
  const [searchText, setSearchText] = useState('');

  // Filtrar emergencias según el texto de búsqueda
  const emergenciasFiltradas = emergenciasData.filter((item) =>
    item.titulo.toLowerCase().includes(searchText.toLowerCase())
  );

  // Navegar a la pantalla de detalle
  const handlePress = (item) => {
    navigation.navigate('Detalle', { item });
  };

  // Navegar a la pantalla de mapa con el servicio seleccionado
  const handleServicioPress = (servicioKey) => {
    navigation.navigate('Mapa', { servicioKey });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#DC2626" />
      
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🚨 Guía de Auxilios</Text>
        <Text style={styles.headerSubtitle}>
          Información de primeros auxilios
        </Text>
      </View>

      {/* BARRA DE BÚSQUEDA */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar emergencia..."
          placeholderTextColor="#9CA3AF"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* LISTA DE EMERGENCIAS */}
      <FlatList
        data={emergenciasFiltradas}
        renderItem={({ item }) => (
          <EmergencyCard item={item} onPress={() => handlePress(item)} />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              No se encontraron resultados
            </Text>
          </View>
        }
      />

      {/* FOOTER FIJO - BOTONES DE SERVICIOS DE EMERGENCIA */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.serviceButton, { backgroundColor: '#1E40AF' }]}
          onPress={() => handleServicioPress('policia')}
          activeOpacity={0.8}
        >
          <Text style={styles.serviceEmoji}>👮</Text>
          <Text style={styles.serviceText}>Policía</Text>
          <Text style={styles.serviceNumber}>123</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.serviceButton, { backgroundColor: '#DC2626' }]}
          onPress={() => handleServicioPress('bomberos')}
          activeOpacity={0.8}
        >
          <Text style={styles.serviceEmoji}>🚒</Text>
          <Text style={styles.serviceText}>Bomberos</Text>
          <Text style={styles.serviceNumber}>119</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.serviceButton, { backgroundColor: '#059669' }]}
          onPress={() => handleServicioPress('hospital')}
          activeOpacity={0.8}
        >
          <Text style={styles.serviceEmoji}>🏥</Text>
          <Text style={styles.serviceText}>Hospital</Text>
          <Text style={styles.serviceNumber}>132</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    backgroundColor: '#DC2626',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    // Sombra
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#FEE2E2',
    textAlign: 'center',
    marginTop: 4,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#1F2937',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    // Sombra sutil
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  listContent: {
    paddingBottom: 16,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  emptyText: {
    fontSize: 16,
    color: '#9CA3AF',
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    // Sombra superior
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 10,
  },
  serviceButton: {
    flex: 1,
    marginHorizontal: 6,
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    // Sombra
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  serviceEmoji: {
    fontSize: 32,
    marginBottom: 4,
  },
  serviceText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  serviceNumber: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
  },
});

export default HomeScreen;
