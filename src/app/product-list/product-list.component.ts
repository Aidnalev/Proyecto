import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { DeseadoService } from '../deseado.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products = products;
  product: Product | undefined;
  constructor(
    private route: ActivatedRoute,
    private deseadoService: DeseadoService
  ) {}
  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }
  addToDeseados(product: Product) {
    this.deseadoService.addToDeseado(product);
    window.alert('El juego ha sido añadido a la lista de deseados');
  }

  onExistencias() {
    window.alert('Se notificara cuando hayan nuevas existencias');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
