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
  - [📋 Changelog](#📋-changelog)
    - [🧩 v1.0.1](#🧩-v1-0-1)
    - [🧩 v1.0.2](#🧩-v1.0.2)
    - [🧩 v1.0.3](#🧩-v1.0.3)
    - [🧩 v1.0.4](#🧩-v1.0.4)
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
npm run prepare     # Inicializa Husky (Git Hooks)
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

| Paquete                         | Versión   | Badge                                                                  |
|---------------------------------|-----------|------------------------------------------------------------------------|
| StandardJS                      | `17.1.2`  | ![standard](https://img.shields.io/badge/standard-17.1.2-F3DF49?logo=javascript) |
| Stylelint                       | `16.17.0` | ![stylelint](https://img.shields.io/badge/stylelint-16.17.0-263238?logo=stylelint) |
| Stylelint Config Standard       | `37.0.0`  | ![stylelint-config](https://img.shields.io/badge/stylelint--config--standard-37.0.0-263238?logo=stylelint) |
| Husky                           | `9.1.7`   | ![husky](https://img.shields.io/badge/husky-9.1.7-263238?style=flat) |
| Lint-Staged                     | `15.5.0`  | ![lint-staged](https://img.shields.io/badge/lint--staged-15.5.0-263238?style=flat) |
| @commitlint/cli                 | `19.8.0`  | ![commitlint-cli](https://img.shields.io/badge/@commitlint/cli-19.8.0-000000?logo=commitlint)     |
| @commitlint/config-conventional | `19.8.0`  | ![commitlint-config](https://img.shields.io/badge/@commitlint/config--conventional-19.8.0-FE5196?logo=conventionalcommits) |
| MSW                             | `2.7.3`   | ![msw](https://img.shields.io/badge/Mock%20Service%20Worker-2.7.3-FF6A33?logo=mockserviceworker) |

---

## 📂 Estructura de Carpetas

```
|--------------------------------------------------------------------------------------------------------|
| Carpeta                     | Descripción                                                              |
|--------------------------------------------------------------------------------------------------------|
| cl.mamma-mia                | Carpeta raíz del proyecto                                                |
| ├── __mocks__               | Mocks para pruebas y desarrollo local.                                   |
| │   ├── api                 | Mocks que simulan las respuestas de la API.                              |
| │   │   ├── data            | Datos de ejemplo utilizados por los handlers mock.                       |
| │   │   └── mamma-mia       | Handlers organizados según dominios funcionales del proyecto.            |
| │   │       ├── auth        | Handlers relacionados con autenticación del proyecto.                    |
| │   │       ├── checkouts   | Handlers relacionados con procesos de pago.                              |
| │   │       └── products    | Handlers para productos (listado, detalle, etc.)                         |
| │   └── assets              | Archivos estáticos de soporte para los mocks (imágenes, logos, etc.)     |
| ├── public                  | Contiene archivos estáticos como index.html, imágenes, etc.              |
| └── src                     |                                                                          |
|     ├── assets              | Recursos estáticos como imágenes, fuentes, etc.                          |
|     │   └── img             | Imágenes utilizadas en el proyecto.                                      |
|     ├── components          | Componentes reutilizables de la UI (botones, formularios, etc.)          |
|     ├── config              | Archivos de configuración del proyecto.                                  |
|     ├── contexts            | Contextos de React para manejo de estado global.                         |
|     ├── layouts             | Plantillas de diseño para diferentes secciones.                          |
|     │   ├── private         | Diseño para páginas privadas (requiere autenticación).                   |
|     │   └── public          | Diseño para páginas públicas.                                            |
|     │       └── auth        | Vistas de autenticación (login, registro, etc.).                         |
|     ├── routes              | Definición de rutas para las diferentes páginas.                         |
|     └── utils               | Funciones y utilidades reutilizables (validaciones, formateadores, etc.) |
|--------------------------------------------------------------------------------------------------------|
```

---

## 📋 Changelog

### 🧩 v1.0.1

Este proyecto cuenta con la integración de **Husky** y **Lint-staged** para mejorar la calidad del código al momento de realizar commits.

#### ⭐️ ¿Qué significa esto?

Cada vez que ejecutás `git commit`, se activan automáticamente una serie de validaciones sobre los archivos modificados (staged):

- ✅ Se ejecuta el comando `npm run lint` solo sobre los archivos modificados (`*.js`, `*.jsx`, `*.ts`, `*.tsx`, `*.css`).
- ❌ Si hay errores de linting, el commit se cancela para que puedan ser corregidos antes de integrarlos.

Esto asegura que el código que entra al repositorio cumple con los estándares definidos.

---

### 🧩 v1.0.2

Este proyecto ahora utiliza **Conventional Commits** para estandarizar los mensajes de commit y facilitar el seguimiento de cambios.

#### ⭐️ ¿Qué significa esto?

Cada vez que se realiza un commit, se valida automáticamente que el mensaje siga el formato **Conventional Commits** mediante el uso de **Commitlint**.

- ✅ **Formato de mensaje de commit**: Debe seguir una estructura específica, como:
   ```bash
   git commit -m 'feat: add new functionality'
   git commit -m 'fix: fix an error in the application'
   git commit -m 'docs: update documentation'
   ```

- ❌ Si el mensaje de commit no sigue este formato, el commit será rechazado y se pedirá que se corrija antes de continuar, como:
   ```bash
   git commit -m 'Keep calm and commit'
   ```

> Esto ayuda a mantener un historial de commits claro y estructurado, facilitando la colaboración y el mantenimiento del proyecto.

Para conocer más sobre el uso y configuración de Commitlint, puedes visitar:

- 🌐 Sitio oficial: [commitlint.js.org](https://commitlint.js.org/)
- 📦 Paquete `@commitlint/cli` en npm: [@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli)
- 📦 Paquete `@commitlint/config-conventional` en npm: [@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional)

---

### 🧩 v1.0.3

Se implementó **Lazy Load** (carga diferida) en las rutas del proyecto usando `React.lazy` y `Suspense`.

#### ⭐️ ¿Qué significa esto?

Esta técnica permite que los componentes se carguen solo cuando son requeridos (por ejemplo, al navegar a una ruta específica), lo cual mejora significativamente el tiempo de carga inicial de la aplicación.

- ✅ Reducción del tamaño del bundle inicial.
- ✅ Mejor experiencia de usuario en dispositivos con conexiones lentas.
- ✅ Carga progresiva de recursos, priorizando lo esencial.

> Puedes ver el ejemplo de uso en la carpeta `routes`.

---

### 🧩 v1.0.4

Se agregó **MSW (Mock Service Worker)** para simular APIs en el navegador durante el desarrollo.

#### ⭐️ ¿Qué significa esto?

Ahora el proyecto puede interceptar y simular llamadas HTTP en el navegador sin necesidad de tener un backend en funcionamiento. Esto permite:

- ✅ Probar funcionalidades frontend de forma aislada.
- ✅ Evitar dependencias externas durante el desarrollo.
- ✅ Crear escenarios personalizados (respuestas exitosas, errores, etc.).

#### 🧪 ¿Cómo se usa?

Los mocks se activan automáticamente en modo desarrollo (`process.env.NODE_ENV` en `development`), y los handlers están definidos en la carpeta `__mocks__`, para mas detalles consultar [📂 Estructura de Carpetas](#📂-estructura-de-carpetas)

---

## 🛠️ Próximas mejoras

| Herramienta               | Badge                                                                                              | Descripción                                                                                  | Status                                                            |
|---------------------------|----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| Husky                     | ![husky](https://img.shields.io/badge/husky-9.1.7-1D2F3C?logo=git)                                 | - ✅ Hooks de git automáticos.                                                               | ![ok](https://img.shields.io/badge/OK-success-4CAF50)             |
| Lint-Staged               | ![Lint-Staged](https://img.shields.io/badge/lint--staged-15.5.0-1D2F3C?logo=git)                   | - ✅ **Linting** solo en los archivos modificados, optimizando la eficiencia de los commits. | ![ok](https://img.shields.io/badge/OK-success-4CAF50)             |
| Conventional Commits      | ![conventional commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-96072b?logo=git) | - ✅ **Commit Linting**.                                                                     | ![ok](https://img.shields.io/badge/OK-success-4CAF50)             |
| Lazy Load                 | ![react](https://img.shields.io/badge/react-18.2.0-61DAFB?logo=react)                              | - ✅ Optimizar el rendimiento y mejorar los tiempos de carga de las rutas del proyecto.      | ![ok](https://img.shields.io/badge/OK-success-4CAF50)             |
| MSW (Mock Service Worker) | ![msw](https://img.shields.io/badge/Mock%20Service%20Worker-2.7.3-FF6A33?logo=mockserviceworker)   | - ✅ Simular respuestas del backend durante el desarrollo y pruebas.                         | ![ok](https://img.shields.io/badge/OK-success-4CAF50)             |
| Vitest                    | ![vitest](https://img.shields.io/badge/vitest-3.1.1-6E9F18?logo=vitest)                            | - ✅ Tests unitarios.                                                                        | ![pending](https://img.shields.io/badge/Pendiente-pending-F9A825) |
| Typescript                | ![typescript](https://img.shields.io/badge/TypeScript-5.2.2-3178C6?logo=typescript)                | - ✅ Lenguaje estático basado en JavaScript para un desarrollo más seguro y mantenible.      | ![pending](https://img.shields.io/badge/Pendiente-pending-F9A825) |

---

## 📄 Licencia

MIT © Raul Farias S. | [Ver licencia completa](./LICENSE.md)
