# Fashion E-commerce de Ropa Femenina

Aplicación móvil de e-commerce enfocada en ropa femenina.  
Desarrollada con **React Native** 

---

## Características principales
-  Catálogo de productos con imágenes, talles y precios.  
-  Registro e inicio de sesión de usuarios.  
-  Carrito de compras con cálculo automático del total.  
 

---

## Tecnologías utilizadas
-  React Native (Expo).  
-  Redux Toolkit.  
-  Firebase (Autenticación).  
-  React Navigation.  
-  Styled Components.  

---

## Librerías utilizadas y por qué
| Librería | Uso en el proyecto |
|----------|-----------------|
| `@react-navigation/native` y `@react-navigation/native-stack` | Para manejar la navegación entre pantallas. |
| `@react-navigation/bottom-tabs` | Para la navegación por pestañas en la interfaz principal de la app. |
| `@reduxjs/toolkit` + `react-redux` | Para manejar el estado global de la app, como carrito de compras y datos del usuario. |
| `expo-image-picker` | Permite a los usuarios seleccionar imágenes para perfil. |
| `expo-location` | Posible integración de geolocalización. |
| `react-native-maps` | Permite mostrar mapas, útil si se integra ubicación de tiendas. |
| `react-native-vector-icons` | Para usar iconos en la interfaz  |


## Instalación 
1. **Clonar el repositorio**
```bash
git clone
```
2. **Instalar dependencias**
```bash
npm install
```
3. **Iniciar la app**
```bash
npx expo start
```

## Credenciales de prueba

Para probar la funcionalidad de inicio de sesión, podes usar la siguiente cuenta:

| Email | Contraseña |
|-------|------------|
| ivanagbarreto@gmail.com | 123456 |

> Estas credenciales ya están registradas en Firebase Auth para que puedas iniciar sesión sin crear una nueva cuenta.  
> Si no deseas usar esta cuenta, la app también permite **crear una nueva cuenta** con email y contraseña directamente desde la pantalla de registro.