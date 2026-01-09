// ============================================
// PANTALLA PRINCIPAL - HOME CON DRAWER Y FAB
// ============================================

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import EmergencyCard from '../components/EmergencyCard.jsx';
import { emergenciasData } from '../data/data.jsx';

const HomeScreen = ({ navigation }) => {
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

      {/* HEADER CON MENÚ HAMBURGUESA */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.openDrawer()}
          activeOpacity={0.7}
        >
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
        
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>🚨 Guía de Auxilios</Text>
          <Text style={styles.headerSubtitle}>
            Información de primeros auxilios
          </Text>
        </View>
        
        <View style={styles.menuButton} />
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
          <Text style={styles.serviceNumber}>105</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.serviceButton, { backgroundColor: '#DC2626' }]}
          onPress={() => handleServicioPress('bomberos')}
          activeOpacity={0.8}
        >
          <Text style={styles.serviceEmoji}>🚒</Text>
          <Text style={styles.serviceText}>Bomberos</Text>
          <Text style={styles.serviceNumber}>116</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.serviceButton, { backgroundColor: '#059669' }]}
          onPress={() => handleServicioPress('hospital')}
          activeOpacity={0.8}
        >
          <Text style={styles.serviceEmoji}>🏥</Text>
          <Text style={styles.serviceText}>SAMU</Text>
          <Text style={styles.serviceNumber}>106</Text>
        </TouchableOpacity>
      </View>

      {/* FAB - BOTÓN FLOTANTE PARA IA */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('AsistenteIA')}
        activeOpacity={0.9}
      >
        <Text style={styles.fabIcon}>🤖</Text>
      </TouchableOpacity>
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
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  menuButton: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuIcon: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: '300',
  },
  headerContent: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#FEE2E2',
    textAlign: 'center',
    marginTop: 2,
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
  fab: {
    position: 'absolute',
    bottom: 180,
    right: 20,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#8B5CF6',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#8B5CF6',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 12,
  },
  fabIcon: {
    fontSize: 32,
  },
});

export default HomeScreen;
