export interface Product {
  id: number;
  name: string;
  img: string;
  price: number;
  existencias: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Dark Souls',
    img: 'https://th.bing.com/th/id/OIP.8UFVnxCjld_aNUYKZ8WAdgHaDt?pid=ImgDet&rs=1',
    price: 290,
    existencias: 23,
    description:
      'Dark Souls es un videojuego de rol de acción, desarrollado por la empresa From Software para las plataformas PlayStation 3, PlayStation 4, Xbox 360 y Microsoft Windows, distribuido por Namco Bandai Games. Anteriormente conocido como Project Souls, es el segundo videojuego de la serie Souls.',
  },
  {
    id: 2,
    name: 'Dark Souls II',
    img: 'https://th.bing.com/th/id/OIP.UlfZivFlp0hjCYgAIUQfQAHaEo?pid=ImgDet&rs=1',
    price: 300,
    existencias: 0,
    description:
      'Dark Souls II es un videojuego de rol de acción que tiene lugar en un mundo abierto, desarrollado para Microsoft Windows, PlayStation 3 y Xbox 360 por From Software. From Software también distribuye el juego en Japón, mientras que Namco Bandai Games lo hace para otras regiones.',
  },
  {
    id: 3,
    name: 'Dark Souls III',
    img: 'https://cdn-ext.fanatical.com/production/product/original/4768f0e6-d9a0-4580-b361-efe3fa1696b2.jpg?w=1200',
    price: 280,
    existencias: 15,
    description:
      'Dark Souls III es un videojuego de rol de acción desarrollado por FromSoftware y publicado por Bandai Namco Entertainment para PlayStation 4, Xbox One y Microsoft Windows. Es la tercera entrega en la saga Souls, ​ Dark Souls III fue lanzado en Japón en marzo de 2016, y de manera mundial en abril del mismo año.',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
