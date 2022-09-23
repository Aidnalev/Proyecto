import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class DeseadoService {
  items: Product[] = [];
  constructor() {}
  addToDeseado(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearDeseados() {
    this.items = [];
    return this.items;
  }
}
