# 🍕 Mamma-Mia Pizzería

**Mamma-Mia Pizzería** es un proyecto frontend desarrollado en React como parte de la prueba final del **módulo React II** del programa **Desafío Latam**.

> Propiedad de **Raul Farias S.**

---

## 📑 Tabla de contenidos

- [🍕 Mamma-Mia Pizzería](#🍕-mamma-mia-pizzería)
  - [📑 Tabla de contenidos](#📑-tabla-de-contenidos)
  - [🚀 Requisitos](#🚀-requisitos)
    - [📁 Ejemplo de archivo `.env`](#📁-ejemplo-de-archivo-env)
  - [🔧 Instalación](#🔧-instalación)
  - [⚙️ Scripts disponibles](#⚙️-scripts-disponibles)
  - [📦 Dependencias](#📦-dependencias)
    - [🌍 Producción](#🌍-producción)
    - [💻 Desarrollo](#💻-desarrollo)
  - [📂 Estructura de Carpetas](#📂-estructura-de-carpetas)
  - [🛠️ Próximas mejoras](#🛠️-próximas-mejoras)
  - [📄 Licencia](#📄-licencia)

---

## 🚀 Requisitos

- ![node](https://img.shields.io/badge/node-18.16.0-339933?logo=node.js)
- Una variable de entorno llamada: **`VITE_URL_API`** debe estar definida para conectarse correctamente al proyecto backend. Esta variable define la URL base que utilizará Axios para hacer las solicitudes HTTP a la API.

### 📁 Ejemplo de archivo `.env`

```env
VITE_URL_API=https://mi-backend.com/api
```

> Asegúrate de que este archivo esté en la raíz del proyecto y que no se suba al repositorio (agregado en `.gitignore`).

---

## 🔧 Instalación

1. Clona el repositorio con el método que prefieras:

   **HTTPS:**
   ```bash
   git clone https://github.com/rafariass/cl.mamma-mia.git
   ```
   **SSH:**
   ```bash
   git clone git@github.com:rafariass/cl.mamma-mia.git
   ```

   **GitHub CLI:**
   ```bash
   gh repo clone rafariass/cl.mamma-mia
    ```

2. Instala las dependencias, con tu gestor de paquetes favorito:

   **NPM**
   ```bash
   npm i
   ```
   **PNPM**
   ```bash
   pnpm i
   ```
   **YARN**
   ```bash
   yarn
   ```

---

## ⚙️ Scripts disponibles

```bash
npm run dev         # Ejecuta el entorno de desarrollo con Vite
npm run build       # Compila el proyecto para producción
npm run lint        # Ejecuta linter JS y CSS
npm run lint:js     # Lint JS con StandardJS
npm run lint:css    # Lint CSS con Stylelint
```

---

## 📦 Dependencias

### 🌍 Producción

| Paquete              | Versión   | Badge                                                                 |
|----------------------|-----------|------------------------------------------------------------------------|
| Axios                | `1.8.4`   | ![axios](https://img.shields.io/badge/axios-1.8.4-5A29E4?logo=axios) |
| Bootstrap            | `5.3.3`   | ![bootstrap](https://img.shields.io/badge/bootstrap-5.3.3-7952B3?logo=bootstrap) |
| React                | `18.2.0`  | ![react](https://img.shields.io/badge/react-18.2.0-61DAFB?logo=react) |
| React-Bootstrap      | `2.10.9`  | ![react-bootstrap](https://img.shields.io/badge/react--bootstrap-2.10.9-7952B3?logo=react) |
| React Router DOM     | `6.30.0`  | ![react-router](https://img.shields.io/badge/react--router--dom-6.30.0-CA4245?logo=react-router) |
| SweetAlert2          | `11.17.2` | ![sweetalert2](https://img.shields.io/badge/sweetalert2-11.17.2-F27474?logo=sweetalert2) |

### 💻 Desarrollo

| Paquete                   | Versión   | Badge                                                                 |
|---------------------------|-----------|------------------------------------------------------------------------|
| StandardJS                | `17.1.2`  | ![standard](https://img.shields.io/badge/standard-17.1.2-F3DF49?logo=javascript) |
| Stylelint                 | `16.17.0` | ![stylelint](https://img.shields.io/badge/stylelint-16.17.0-263238?logo=stylelint) |
| Stylelint Config Standard| `37.0.0`  | ![stylelint-config](https://img.shields.io/badge/stylelint--config--standard-37.0.0-263238?logo=stylelint) |

---

## 📂 Estructura de Carpetas

```
|-------------------------------------------------------------------------------------------------------|
| Carpeta                  | Descripción                                                                |
|-------------------------------------------------------------------------------------------------------|
| cl.mamma-mia             | Carpeta raíz del proyecto                                                  |
| ├── public               | Contiene archivos estáticos como index.html, imágenes, etc.                |
| └── src                  |                                                                            |
|     ├── assets           | Recursos estáticos como imágenes, fuentes, etc.                            |
|     │   └── img          | Imágenes utilizadas en el proyecto.                                        |
|     ├── components       | Componentes reutilizables de la UI (botones, formularios, etc.)            |
|     ├── contexts         | Contextos de React para manejo de estado global.                           |
|     ├── layouts          | Plantillas de diseño para diferentes secciones.                            |
|     │   ├── private      | Diseño para páginas privadas (requiere autenticación).                     |
|     │   └── public       | Diseño para páginas públicas.                                              |
|     │       └── auth     | Vistas de autenticación (login, registro, etc.).                           |
|     ├── routes           | Definición de rutas para las diferentes páginas.                           |
|     └── utils            | Funciones y utilidades reutilizables (validaciones, formateadores, etc.)   |
|-------------------------------------------------------------------------------------------------------|
```

---

## 🛠️ Próximas mejoras

| Herramienta               | Badge                                                                                                     | Descripción                                                                                     |
|---------------------------|-----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| Husky                     | ![husky](https://img.shields.io/badge/husky-9.1.7-1D2F3C?logo=git)                                        | - ✅ Hooks de git automáticos.                                                                  |
| Lint-Staged               | ![Lint-Staged](https://img.shields.io/badge/lint--staged-15.5.0-1D2F3C?logo=git)                          | - ✅ **Linting** solo en los archivos modificados, optimizando la eficiencia de los commits.    |
| Conventional Commits      | ![conventional commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-96072b?logo=git)        | - ✅ **Commit Linting**.                                                                        |
| MSW (Mock Service Worker) | ![msw](https://img.shields.io/badge/Mock%20Service%20Worker-2.7.3-FF6A33?logo=mockserviceworker)          | - ✅ Simular respuestas del backend durante el desarrollo y pruebas.                            |
| Lazy Load                 | ![react](https://img.shields.io/badge/react-18.2.0-61DAFB?logo=react)                                     | - ✅ Optimizar el rendimiento y mejorar los tiempos de carga de las rutas del proyecto.         |
| Vitest                    | ![vitest](https://img.shields.io/badge/vitest-3.1.1-6E9F18?logo=vitest)                                   | - ✅ Tests unitarios.                                                                           |

---

## 📄 Licencia

MIT © Raul Farias S. | [Ver licencia completa](./LICENSE.md)
