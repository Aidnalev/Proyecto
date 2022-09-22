import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    phone: '',
    address: '',
  });
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}
  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn('Tu orden ha sido enviada.', this.checkoutForm.value);
    window.alert('Tu orden ha sido enviada.');
    this.checkoutForm.reset();
  }
}
