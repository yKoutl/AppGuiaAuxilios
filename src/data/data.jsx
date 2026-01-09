// ============================================
// BASE DE DATOS LOCAL - GUÍA DE AUXILIOS
// ============================================

// Array de Emergencias con 12 tipos diferentes
export const emergenciasData = [
  {
    id: '1',
    titulo: 'Quemadura',
    subtitulo: 'Primeros auxilios para quemaduras',
    imagen: require('../../assets/quemadura.png'),
    pasos: `1. Retira a la víctima de la fuente de calor inmediatamente.
    
2. Enfría la quemadura con agua fría (no helada) durante 10-20 minutos.

3. NO uses hielo, mantequilla ni remedios caseros.

4. Cubre la quemadura con una gasa estéril o paño limpio.

5. Si la quemadura es extensa o profunda, busca atención médica de inmediato.

6. No revientes las ampollas que se formen.

7. Mantén la zona elevada si es posible para reducir la hinchazón.`,
  },
  {
    id: '2',
    titulo: 'Corte Profundo',
    subtitulo: 'Cómo detener el sangrado',
    imagen: require('../../assets/corte.png'),
    pasos: `1. Lava tus manos antes de atender la herida.

2. Aplica presión directa sobre el corte con una gasa o tela limpia.

3. Mantén la presión durante 10-15 minutos sin soltar.

4. Eleva la parte herida por encima del nivel del corazón.

5. Si el sangrado no se detiene, agrega más gasas sin quitar las anteriores.

6. Una vez controlado el sangrado, limpia la herida con agua y jabón.

7. Aplica un vendaje estéril y busca atención médica si es profundo.`,
  },
  {
    id: '3',
    titulo: 'Atragantamiento',
    subtitulo: 'Maniobra de Heimlich',
    imagen: require('../../assets/atragantamiento.png'),
    pasos: `1. Pregunta a la persona si se está asfixiando (señal: no puede hablar).

2. Colócate detrás de la persona y rodéala con tus brazos.

3. Cierra un puño y colócalo justo encima del ombligo.

4. Cubre el puño con la otra mano y realiza compresiones rápidas hacia adentro y arriba.

5. Repite hasta que el objeto salga o la persona pueda respirar.

6. Si la persona pierde el conocimiento, inicia RCP.

7. Llama a emergencias inmediatamente.`,
  },
  {
    id: '4',
    titulo: 'Desmayo',
    subtitulo: 'Pérdida de consciencia',
    imagen: require('../../assets/desmayo.png'),
    pasos: `1. Verifica si la persona responde llamándola y tocándola suavemente.

2. Acuesta a la persona boca arriba en el suelo.

3. Eleva las piernas aproximadamente 30 cm para mejorar el flujo sanguíneo al cerebro.

4. Afloja ropa ajustada, especialmente en cuello, pecho y cintura.

5. Revisa respiración y pulso. Si no respira, inicia RCP.

6. NO le des agua ni comida hasta que recupere completamente la consciencia.

7. Si no recupera el conocimiento en 1-2 minutos, llama a emergencias.`,
  },
  {
    id: '5',
    titulo: 'Fractura',
    subtitulo: 'Inmovilización de huesos rotos',
    imagen: require('../../assets/fractura.png'),
    pasos: `1. NO muevas a la persona a menos que sea absolutamente necesario.

2. Inmoviliza la zona afectada en la posición en que se encuentra.

3. Usa férulas improvisadas (revistas, palos, periódicos enrollados).

4. Acolcha las férulas con tela antes de aplicarlas.

5. Ata las férulas por encima y por debajo de la fractura, nunca sobre ella.

6. Aplica hielo envuelto en tela para reducir la hinchazón.

7. Busca atención médica de inmediato. No intentes acomodar el hueso.`,
  },
  {
    id: '6',
    titulo: 'Sangrado Nasal',
    subtitulo: 'Control de hemorragia nasal',
    imagen: require('../../assets/sangrado.png'),
    pasos: `1. Sienta a la persona e inclina su cabeza ligeramente hacia adelante.

2. NO inclines la cabeza hacia atrás, esto puede causar que trague sangre.

3. Presiona firmemente la parte blanda de la nariz durante 10 minutos.

4. Respira por la boca mientras mantienes la presión.

5. Aplica una compresa fría en el puente de la nariz.

6. Después de 10 minutos, suelta suavemente. Si sigue sangrando, repite.

7. Si el sangrado no se detiene después de 20 minutos, busca ayuda médica.`,
  },
  {
    id: '7',
    titulo: 'Picadura de Insecto',
    subtitulo: 'Reacción a picaduras',
    imagen: require('../../assets/picadura.png'),
    pasos: `1. Retira el aguijón raspando suavemente con una tarjeta (no uses pinzas).

2. Lava la zona con agua y jabón.

3. Aplica hielo envuelto en tela durante 10 minutos para reducir hinchazón.

4. Eleva la zona afectada si es posible.

5. Aplica una crema de hidrocortisona o calamina para aliviar la picazón.

6. Vigila signos de reacción alérgica: dificultad para respirar, hinchazón de cara o lengua.

7. Si hay reacción alérgica grave, llama a emergencias inmediatamente.`,
  },
  {
    id: '8',
    titulo: 'Reacción Alérgica',
    subtitulo: 'Anafilaxia y alergias severas',
    imagen: require('../../assets/alergia.png'),
    pasos: `1. Identifica los síntomas: urticaria, hinchazón, dificultad para respirar.

2. Llama a emergencias inmediatamente si la reacción es severa.

3. Si la persona tiene un auto-inyector de epinefrina (EpiPen), ayúdala a usarlo.

4. Inyecta en la parte externa del muslo, presiona durante 10 segundos.

5. Acuesta a la persona con las piernas elevadas.

6. Afloja la ropa ajustada.

7. No le des nada de beber. Prepárate para realizar RCP si es necesario.`,
  },
  {
    id: '9',
    titulo: 'Golpe de Calor',
    subtitulo: 'Emergencia por calor extremo',
    imagen: require('../../assets/golpecalor.png'),
    pasos: `1. Traslada a la persona a un lugar fresco y con sombra inmediatamente.

2. Quita el exceso de ropa.

3. Enfría el cuerpo aplicando paños húmedos y fríos o rociando con agua.

4. Coloca compresas frías en cuello, axilas e ingles.

5. Si está consciente y puede tragar, dale pequeños sorbos de agua fría.

6. Abanica a la persona mientras está mojada para acelerar el enfriamiento.

7. Llama a emergencias si la temperatura no baja o hay confusión/pérdida de consciencia.`,
  },
  {
    id: '10',
    titulo: 'Convulsión',
    subtitulo: 'Manejo de crisis epiléptica',
    imagen: require('../../assets/convulsion.png'),
    pasos: `1. Mantén la calma y cronometra la duración de la convulsión.

2. Despeja el área de objetos peligrosos alrededor de la persona.

3. Coloca algo suave bajo la cabeza (almohada, chaqueta doblada).

4. Gira suavemente a la persona de lado para evitar asfixia.

5. NO introduzcas nada en la boca ni intentes detener los movimientos.

6. Afloja la ropa ajustada, especialmente alrededor del cuello.

7. Llama a emergencias si dura más de 5 minutos o si es la primera convulsión.`,
  },
  {
    id: '11',
    titulo: 'Intoxicación',
    subtitulo: 'Envenenamiento e intoxicación',
    imagen: require('../../assets/intoxicacion.png'),
    pasos: `1. Llama al centro de toxicología o emergencias inmediatamente.

2. Ten a mano el envase del producto o sustancia si es posible.

3. NO provoques el vómito a menos que te lo indiquen los profesionales.

4. Si la sustancia está en la piel, quita la ropa y lava con abundante agua.

5. Si hay salpicadura en los ojos, lava con agua corriente durante 15 minutos.

6. Si la persona está inconsciente, colócala de lado.

7. Mantén a la persona abrigada y tranquila mientras llega la ayuda.`,
  },
  {
    id: '12',
    titulo: 'Electrocución',
    subtitulo: 'Descarga eléctrica',
    imagen: require('../../assets/electro.png'),
    pasos: `1. NO toques a la persona si aún está en contacto con la fuente eléctrica.

2. Desconecta la fuente de energía si es posible (apaga el interruptor).

3. Si no puedes desconectar, usa un objeto seco no conductor para separar a la víctima.

4. Una vez seguro, verifica si respira y tiene pulso.

5. Si no respira, inicia RCP inmediatamente.

6. Trata las quemaduras enfriando con agua (sin tocar zonas carbonizadas).

7. Llama a emergencias aunque la persona parezca estar bien. Busca atención médica siempre.`,
  },
];

// ============================================
// SERVICIOS DE EMERGENCIA CON MAPAS
// ============================================

// Datos de servicios de emergencia - PERÚ
// Coordenadas simuladas en distritos clave de Lima
export const serviciosData = {
  policia: {
    nombre: 'Policía Nacional del Perú',
    numero: '105',
    color: '#1E40AF', // Azul oscuro
    marcadores: [
      {
        id: 'pol1',
        latitude: -12.0464,
        longitude: -77.0428,
        titulo: 'Comisaría Centro de Lima',
      },
      {
        id: 'pol2',
        latitude: -12.1200,
        longitude: -77.0300,
        titulo: 'Comisaría Miraflores',
      },
      {
        id: 'pol3',
        latitude: -11.9950,
        longitude: -77.0650,
        titulo: 'Comisaría Los Olivos',
      },
    ],
  },
  bomberos: {
    nombre: 'CGBVP - Bomberos Perú',
    numero: '116',
    color: '#DC2626', // Rojo
    marcadores: [
      {
        id: 'bomb1',
        latitude: -12.0550,
        longitude: -77.0350,
        titulo: 'Compañía B-1 Centro',
      },
      {
        id: 'bomb2',
        latitude: -12.1100,
        longitude: -77.0400,
        titulo: 'Compañía B-8 Miraflores',
      },
      {
        id: 'bomb3',
        latitude: -12.0050,
        longitude: -77.0700,
        titulo: 'Compañía B-32 Los Olivos',
      },
    ],
  },
  hospital: {
    nombre: 'SAMU - Minsa',
    numero: '106',
    color: '#059669', // Verde
    marcadores: [
      {
        id: 'hosp1',
        latitude: -12.0600,
        longitude: -77.0380,
        titulo: 'Hospital Arzobispo Loayza',
      },
      {
        id: 'hosp2',
        latitude: -12.1150,
        longitude: -77.0320,
        titulo: 'Clínica Internacional San Isidro',
      },
      {
        id: 'hosp3',
        latitude: -12.0000,
        longitude: -77.0600,
        titulo: 'Hospital Cayetano Heredia',
      },
    ],
  },
};
