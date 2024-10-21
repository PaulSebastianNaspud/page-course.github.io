# Universidad Politécnica Salesiana 
![ups-icc](https://github.com/PaulSebastianNaspud/estructura-u2-pratica3/assets/131235143/d8801de9-eea7-49f5-9594-fe27f5d55528)

# Estructura de Datos Proyectos de Fin de Ciclo

### Integrantes: 
- [PaulSebastianNaspud](https://github.com/PaulSebastianNaspud) 
- pnaspudv@est.ups.edu.ec


## Gestor de Cursos

# 1. Descripción del Proyecto

Este proyecto tiene como objetivo desarrollar una página web que permita crear nuevos cursos y listar los cursos existentes. Todos los elementos son plantillas, no cursos reales. La interfaz se ha implementado utilizando Angular, aprovechando componentes y secciones para gestionar la estructura de la página. Además, se utiliza `localStorage` para guardar la información de los cursos creados, permitiendo que los datos persistan incluso después de recargar la página.

## 1.1 Clases Principales
- **card-course**: Clase que encapsula y mustra todos los datos esenciales de un curso, como el nombre, la descripción y la fecha de inicio.
- **list-course**: Clase que mustra todos los cursos.
- **CursoService**: Servicio encargado de gestionar la creación y recuperación de cursos almacenados en el `localStorage`.
- **PictureService**: Servicio encargado de gestionar la conexion con la Api.

## 1.2 Funcionalidades
- **Crear Curso**: Permite al usuario ingresar la información del curso y almacenarlo en el `localStorage`.
- **Listar Cursos**: Muestra todos los cursos almacenados en el `localStorage`, permitiendo al usuario ver la lista de cursos disponibles.

## 1.3 Uso
La aplicación permite al usuario interactuar a través de un formulario para crear cursos y una sección donde se lista todos los cursos creados. Se hace uso de servicios y componentes de Angular para facilitar la gestión de los datos.

# 2. Desarrollo

## 2.1 Estructura de Componentes
La aplicación sigue una estructura modular utilizando componentes de Angular, donde cada sección de la página (como la creación de cursos y la lista de cursos) está encapsulada en un componente distinto. Esto facilita la mantenibilidad y escalabilidad del proyecto.

## 2.2 Almacenamiento Local
La información de los cursos se almacena en el `localStorage`, lo que permite que los datos persistan incluso después de que el usuario cierre o recargue la página. Esto se logra utilizando métodos simples para agregar, recuperar y eliminar cursos del almacenamiento.

# 3. Resultados

La implementación de esta página web para la gestión de cursos ha demostrado ser efectiva, permitiendo a los usuarios crear y listar cursos de manera intuitiva. La utilización de Angular y el `localStorage` ha facilitado una experiencia de usuario fluida y un manejo eficiente de los datos.

# 4. Conclusiones

El desarrollo de este sistema ha proporcionado una valiosa experiencia en la creación de aplicaciones web utilizando Angular. Se han adquirido habilidades en la gestión de componentes, servicios y almacenamiento local, lo que mejora la comprensión de las mejores prácticas en el desarrollo web moderno.

## 5. Recomendaciones

Para futuras mejoras:

- **Validación de Datos**: Implementar validaciones más robustas en el formulario de creación de cursos para asegurar que la información ingresada sea correcta.
- **Interfaz de Usuario**: Mejorar la interfaz de usuario con estilos más atractivos y una mejor experiencia de usuario.

## 6. Herramientas
- Angular
- Visual Studio Code
- Navegador web

## Otros
- [Documentación de Angular](https://angular.io/docs)
- [Guía de almacenamiento local en JavaScript](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)
- [Unplash](https://unsplash.com/es)
