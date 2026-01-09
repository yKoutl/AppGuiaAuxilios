// ============================================
// PANTALLA DE CARGA INICIAL (SPLASH SCREEN)
// ============================================

import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Animated, Easing } from 'react-native';

export default function SplashScreen({ onFinish }) {
  // Valor animado para el spinner
  const spinValue = new Animated.Value(0);

  useEffect(() => {
    // Iniciar animación de rotación
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 750, // 0.75s como el SVG original
        easing: Easing.linear,
        useNativeDriver: true
      })
    ).start();

    // Simular carga de 2.5 segundos
    const timer = setTimeout(() => {
      if (onFinish) {
        onFinish();
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Interpolación para convertir 0-1 en 0-360 grados
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../../assets/LogoContigoPE.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Spinner animado */}
      <Animated.View
        style={[
          styles.spinner,
          { transform: [{ rotate: spin }] }
        ]}
      >
        <View style={styles.spinnerOuter} />
        <View style={styles.spinnerInner} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 40,
  },
  spinner: {
    width: 60,
    height: 60,
    position: 'relative',
  },
  spinnerOuter: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 4,
    borderColor: 'rgba(30, 78, 216, 0.25)', // hsl(228, 97%, 42%) con opacity
  },
  spinnerInner: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 4,
    borderColor: 'transparent',
    borderTopColor: '#1E4ED8', // hsl(228, 97%, 42%)
  },
});
