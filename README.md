[![Netlify Status](https://api.netlify.com/api/v1/badges/16e3ab32-0955-4c60-ba45-9cfca05564f0/deploy-status)](https://app.netlify.com/sites/tiendalaptops/deploys)

# Tienda virtual creada durante la cursada de React JS en CoderHouse

Este es un Ecommerce, en el cual se simula una tienda de articulos basados en el animal capibara o carpincho.

La navegación incluye: 
+ Home con productos
+ Pantalla de producto con detalle
+ Pantalla de categorías
+ Pantalla de carrito con formulario de cliente.
+ Pantalla de gracias

Tecnologías y librerías:
+ Interfaz realizada con ReactJS - Create React App
+ Estilos con Bootstrap
+ Ruteo con React Router Dom
+ Base de datos con Firebase
+ Loaders de react-spinners

## Link

La aplicación se puede visualizar en el siguiente [Link]()

## Instalación

Despues de clonar el repositorio, ejecutar "npm install" para instalar las dependencias

## Ejecutar Proyecto

    1. Ejecute "npm start" en su proyecto para iniciar.
    2. No son necesarias credenciales para ejecutarlo.

## Detalles del proyecto

El usuario puede agregar un producto al carrito desde la pantalla de detalle del producto.

La barra de navegación contiene el ícono del carrito que muestra la cantidad de items que el usuario ha agregado.

Una vez realizada la compra se le entrega al usuario un número de pedido.(Al cual se le podría dar la funcionalidad de seguimiento en el futuro)

Los datos en el formulario que se les requiere al cliente para finalizar la compra son subidos a la base de datos (Firestore) con el nombre de colección "order".

Las categorías del nav bar se cargan dinamicamente de la base de datos (Firestore)

La visualización de los productos en el home como así también los filtrados por categorías, son dinamicamente extraídos desde la base de datos (Firestore)

## Estructura

![image00]()

## Capturas

Home
![image00](http://alejomann.com/coder/img/home.png)

Detalle de producto
![image00](http://alejomann.com/coder/img/detalle.png)

Carrito
![image00](http://alejomann.com/coder/img/carrito.png)

Gracias
![image00](http://alejomann.com/coder/img/gracias.png)

Seguimiento
![image00](http://alejomann.com/coder/img/seguimiento1.png)
![image00](http://alejomann.com/coder/img/seguimiento2.png)