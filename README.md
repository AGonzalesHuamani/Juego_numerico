# Juego del Número Secreto 🎲

Un juego interactivo donde el usuario debe adivinar un número secreto generado aleatoriamente dentro de un rango. El objetivo es acertar el número en el menor número de intentos posibles o antes de que se alcance el límite de intentos.

---

## 📋 Características

- **Número secreto aleatorio:** El juego genera automáticamente un número dentro de un rango predeterminado (1 a 100).
- **Mensajes interactivos:** Ayudan al jugador indicando si el número ingresado es mayor o menor al número secreto.
- **Contador de intentos:** Se muestra cuántos intentos has realizado, con un límite máximo de 5.
- **Estilo personalizado:** Una interfaz básica pero funcional con HTML, CSS y JavaScript.

---

## 🛠️ Tecnologías utilizadas

- **HTML**: Estructura del proyecto.
- **CSS**: Estilización de la página.
- **JavaScript**: Lógica del juego.
- **Google Fonts**: Fuentes utilizadas para los estilos.

---
## Instrucciones de instalación y uso 🚀
1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/tu-usuario/numero-secreto.git
   ```
2. Navega a la carpeta del proyecto:
   ```bash
   cd numero-secreto
   ```
3. Abre el archivo `index.html` en tu navegador para jugar (si es una aplicación web) o ejecuta el archivo principal desde tu entorno de desarrollo si es un proyecto de consola.

---
## 🚀 Cómo jugar

1. Abre el archivo index.html en tu navegador.
2. El juego te pedirá un número a través de un cuadro de diálogo (prompt).
3. Sigue las pistas que te dirán si el número secreto es mayor o menor al que ingresaste.
4. Tienes un máximo de 5 intentos para adivinar. Si fallas, ¡se acabó el juego!
5. Si aciertas, aparecerá un mensaje indicando el número secreto y los intentos realizados.

---

## 📂 Estructura del proyecto

El proyecto contiene los siguientes archivos y carpetas:
```plaintext
📁 Juego_numerico
├── 📄 index.html         (Archivo principal con la estructura del juego)
├── 📄 app.js             (Archivo de JavaScript con la lógica del juego)
├── 📄 style.css          (Estilización de la página)
├── 📁 img                (Carpeta con imágenes usadas en el juego)
│   ├── robot.png         (Imagen del robot)
│   └── trophy.png        (Imagen del trofeo)
└── 📄 README.md          (Documentación del proyecto)
```
---

##  Mejoras implementadas
- Contador de intentos: Ahora puedes saber cuántos intentos has realizado durante el juego.
- Pistas para el jugador: Mensajes claros que indican si el número secreto es mayor o menor al ingresado.

---

## 🔧 Próximas mejoras

1. Crear una interfaz gráfica más atractiva, con formularios y mensajes visibles en la página.
2. Permitir al jugador establecer el rango del número secreto antes de comenzar la partida.