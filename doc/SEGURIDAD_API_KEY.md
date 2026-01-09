# SEGURIDAD - API KEY EXPUESTA - ACCION INMEDIATA REQUERIDA

## ALERTA DE SEGURIDAD

GitHub ha detectado que tu API Key de Google Gemini esta expuesta publicamente en el repositorio.

**API Key comprometida:** AIzaSyCfr5e2My5rljDqoynk2PhHDT-Uzfv857I

## ACCIONES REALIZADAS EN EL CODIGO

1. Creado archivo `.env.example` con plantilla
2. Creado archivo `.env` con tu API key actual (LOCAL, no se sube a Git)
3. Actualizado `.gitignore` para excluir `.env`
4. Refactorizado `AIScreen.jsx` para usar variable de entorno:
   ```javascript
   const GEMINI_API_KEY = process.env.EXPO_PUBLIC_GEMINI_API_KEY;
   const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
   ```
5. Limpiadas las referencias de la API key en la documentacion

## ACCIONES QUE DEBES TOMAR INMEDIATAMENTE

### 1. Revocar la API Key Expuesta
1. Ve a Google Cloud Console: https://console.cloud.google.com/apis/credentials
2. Busca la API Key: `AIzaSyCfr5e2My5rljDqoynk2PhHDT-Uzfv857I`
3. Haz clic en "DELETE" o "REVOKE"
4. Confirma la revocacion

### 2. Crear una Nueva API Key
1. En Google Cloud Console, haz clic en "CREATE CREDENTIALS"
2. Selecciona "API Key"
3. IMPORTANTE: Configura restricciones:
   - Application restrictions: HTTP referrers (websites)
   - API restrictions: Solo "Generative Language API"
4. Copia la nueva API key

### 3. Actualizar tu Archivo .env Local
1. Abre el archivo `.env` en la raiz del proyecto
2. Reemplaza la API key con la nueva:
   ```bash
   EXPO_PUBLIC_GEMINI_API_KEY=tu_nueva_api_key_aqui
   ```
3. Guarda el archivo

### 4. Limpiar el Historial de Git (CRITICO)

La API key esta en el historial de commits. Debes eliminarla:

**Opcion A: Usar BFG Repo-Cleaner (Recomendado)**
```bash
# Instalar BFG
# Windows: choco install bfg
# Mac: brew install bfg

# Clonar repo completo
git clone --mirror https://github.com/tu-usuario/AppGuiaAuxilios.git

# Limpiar la API key del historial
bfg --replace-text passwords.txt AppGuiaAuxilios.git

# Forzar push
cd AppGuiaAuxilios.git
git reflog expire --expire=now --all
git gc --prune=now --aggressive
git push --force
```

Archivo `passwords.txt`:
```
AIzaSyCfr5e2My5rljDqoynk2PhHDT-Uzfv857I
```

**Opcion B: Usar git filter-repo**
```bash
# Instalar git-filter-repo
pip install git-filter-repo

# Eliminar la API key del historial
git filter-repo --replace-text passwords.txt --force

# Forzar push
git push origin --force --all
```

**Opcion C: Si el repo es nuevo, eliminar y recrear**
```bash
# Hacer backup de archivos actuales
cp -r AppGuiaAuxilios AppGuiaAuxilios_backup

# Eliminar repositorio de GitHub
# (Ir a Settings -> Delete repository)

# Crear nuevo repositorio
# Copiar archivos limpios (sin .git)
cd AppGuiaAuxilios_backup
rm -rf .git

# Inicializar nuevo repo
git init
git add .
git commit -m "Initial commit - Proyecto Guia de Auxilios"
git branch -M main
git remote add origin https://github.com/tu-usuario/AppGuiaAuxilios.git
git push -u origin main
```

### 5. Cerrar la Alerta de GitHub
1. Ve a: https://github.com/tu-usuario/AppGuiaAuxilios/security
2. Abre la alerta "Google API Key"
3. Selecciona "Close as revoked"
4. Confirma que has revocado la key

### 6. Verificar que Todo Funciona
```bash
# Reiniciar servidor
npx expo start -c

# La app deberia cargar normalmente con la nueva API key
```

## ARCHIVOS ACTUALIZADOS

- `.env` - Creado (contiene API key, NO se sube a Git)
- `.env.example` - Creado (plantilla sin secretos)
- `.gitignore` - Actualizado (incluye .env)
- `src/screens/AIScreen.jsx` - Refactorizado para usar env vars
- `doc/DOCUMENTACION.md` - Limpiada API key
- `doc/VERSION_PRO_PERU.md` - Limpiada API key

## ARCHIVOS QUE CONTIENEN LA API KEY EXPUESTA (En historial Git)

Commits afectados:
- f0a3881 - "Segunda version con IA + Maps"
- 2d27473 - "Implementacion Corregida"

Archivos:
- `src/screens/AIScreen.jsx`
- `doc/VERSION_PRO_PERU.md`
- `doc/DOCUMENTACION.md`

## BUENAS PRACTICAS PARA EL FUTURO

1. NUNCA commitear API keys, tokens o passwords
2. SIEMPRE usar variables de entorno para secretos
3. Agregar `.env` a `.gitignore` ANTES del primer commit
4. Usar `.env.example` para documentar variables necesarias
5. Revisar cambios antes de hacer commit con `git diff`
6. Configurar pre-commit hooks para detectar secretos
7. Usar servicios como GitGuardian o TruffleHog

## CONFIGURACION RECOMENDADA DE LA API KEY EN GOOGLE CLOUD

Para mayor seguridad, configura estas restricciones en tu nueva API key:

1. Application restrictions:
   - Tipo: HTTP referrers
   - Sitios web permitidos: `exp://*` (para Expo Go)

2. API restrictions:
   - Restringir key a APIs especificas
   - Seleccionar solo: "Generative Language API"

3. Quotas:
   - Establecer limites de uso diario/mensual

## ESTADO ACTUAL DEL CODIGO

El codigo ya esta listo y seguro. Solo necesitas:
1. Revocar la API key vieja
2. Generar una nueva
3. Actualizar `.env` con la nueva key
4. Limpiar el historial de Git
5. Cerrar la alerta de GitHub

## DOCUMENTACION DE REFERENCIA

- Expo Environment Variables: https://docs.expo.dev/guides/environment-variables/
- Google Cloud API Keys Best Practices: https://cloud.google.com/docs/authentication/api-keys
- Git Secrets Removal: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository
