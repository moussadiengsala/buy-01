import { Component, Input } from '@angular/core';
import { Product } from '../../../models/types';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../core/services/utils/cart.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required: true}) product!: Product;
  isInCart = false;
  constructor(private cartService: CartService) {}

  // Initialize the isInCart state when the component is loaded
  ngOnInit(): void {
    this.isInCart = this.cartService.isInCart(this.product.id);
  }

  // Toggle add/remove product from the cart
  toggleCart(): void {
    if (this.isInCart) {
      this.cartService.removeFromCart(this.product.id);
    } else {
      this.cartService.addToCart(this.product);
    }
    
    // Update the isInCart state after the action
    this.isInCart = this.cartService.isInCart(this.product.id);
  }
}
