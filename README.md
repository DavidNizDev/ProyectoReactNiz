[![Netlify Status](https://api.netlify.com/api/v1/badges/a1f426df-8a5e-43e7-a81a-841db23f6864/deploy-status)](https://app.netlify.com/sites/davidniz-react-final-coder/deploys)
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
La aplicación se puede visualizar en el siguiente [Link](https://davidniz-react-final-coder.netlify.app/)

## Instalación

Despues de clonar el repositorio, ejecutar "npm install" para instalar las dependencias

## Ejecutar Proyecto

    1. Ejecute "npm start" en su proyecto para iniciar.
    2. No son necesarias credenciales para ejecutarlo.

## Detalles del proyecto

BUILD realizado y deployado en Netlify.

El ecommerce cuenta con 9 productos, divididos en 3 categorías, 3 productos por categoría.

El usuario puede agregar un producto al carrito desde la pantalla de detalle del producto.

La barra de navegación contiene el ícono del carrito que muestra la cantidad de items que el usuario ha agregado.

Una vez realizada la compra se le entrega al usuario un número de pedido.(Al cual se le podría dar la funcionalidad de seguimiento en el futuro)

Los datos en el formulario que se les requiere al cliente para finalizar la compra son subidos a la base de datos (Firestore) con el nombre de colección "order".

Las categorías del nav bar se cargan dinamicamente de la base de datos (Firestore)

La visualización de los productos en el home como así también los filtrados por categorías, son dinamicamente extraídos desde la base de datos (Firestore)

## Estructura archivos

[![1lqmSP.carpetas](https://i.im.ge/2022/09/15/1l7OeW.1lqmSP-carpetas.png)](https://im.ge/i/1l7OeW)


## Capturas

Home
[![1laOyK.home](https://i.im.ge/2022/09/15/1l7Ugy.1laOyK-home.jpg)](https://im.ge/i/1l7Ugy)

Detalle de producto
[![1lqRrJ.detalle-producto](https://i.im.ge/2022/09/15/1l79JF.1lqRrJ-detalle-producto.jpg)](https://im.ge/i/1l79JF)

Carrito
[![1lsPt9.cart](https://i.im.ge/2022/09/15/1l7wN9.1lsPt9-cart.jpg)](https://im.ge/i/1l7wN9)

Gracias
[![1lsRtp.gracias](https://i.im.ge/2022/09/15/1l76fX.1lsRtp-gracias.jpg)](https://im.ge/i/1l76fX)

Categoria "Mates"
[![1lqEIT.categoria-mates](https://i.im.ge/2022/09/15/1l7t5h.1lqEIT-categoria-mates.jpg)](https://im.ge/i/1l7t5h)

