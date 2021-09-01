# Tarea del curso de Escalab - React

Este proyecto a sido creado con create-react-app (https://create-react-app.dev/docs/getting-started/)

## Lista de Mangas

Esta app consume la siguiente API: https://kitsu.docs.apiary.io/# para obtener una lista de mangas consumiendo distintos endpoints.

Esta api es publica y es posible consumirla sin la necesidad de utilizar un metodo de autenticación, de todas formas al registrar la app en el servicio las funcionalidades se extienden, para este caso, no fue necesario registrar la app, se implementaron metodos que no requieren registro.

Es posible visualizar 
  1. Una lista aleatoria de mangas
  2. Top mangas
  3. Ultimos mangas publicados
  4. Mangas seleccionados para leer

### Tecnologias

Esta app utiliza **React-Router-Dom** para el manejo de rutas entre los componentes.
El manejo de estilos, fue realizado con **Material-UI** y **Clases css** personalizadas.
Se implementó el manejo de errores, **Error Boundary**, para el componente Index de Mangas.
Para el manejo de Estados y el paso de datos entre componentes padre e hijos se implementó **ContextAPI**, con esto manejamos de forma global las props entre el arbol de componentes.

Se utilizó el patron de diseño **Provider** para manejar las props y sus estados entre el arbol de componentes
Ademas de **HOC** para el manejo de rutas y control de errores

#

### Proyecto realizado por Sebastian Cardoza - 2021-08
