import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth-service.service';
import { AvatarModule } from 'primeng/avatar';
import { ProductManagementComponent } from '../../sheared/components/product-management/product-management.component';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/types';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AvatarModule, CommonModule, FormsModule,
    ProductManagementComponent, TableModule, ButtonModule, TagModule, InputIconModule, InputTextModule, MultiSelectModule, 
    IconFieldModule,
    DropdownModule,
    MenuModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
    seller: any;

    products: Product[] = [
      {
        id: '1',
        name: 'Product 1',
        description: 'This is a great product.',
        price: 99.99,
        quantity: 10,
        media: [
          { id: '1', imagePath: 'https://framerusercontent.com/images/H2lD1wbQgNQJOFWzv6bKAY6ng.png', productId: '1' }
        ]
      },
      {
        id: '2',
        name: 'Product 2',
        description: 'This is another awesome product.',
        price: 149.99,
        quantity: 5,
        media: [   
          { id: '2', imagePath: 'https://framerusercontent.com/images/H2lD1wbQgNQJOFWzv6bKAY6ng.png', productId: '2' }
        ]
      }
    ];

    loading: boolean = true;

    isDisplayMenu: { [key: string]: boolean } = {};
    selectedEditProduct: Product | null = null;
    selectedDeleteProduct: Product | null = null;
    isConfirmDeleteVisible: boolean = false; 

    constructor(private authService: AuthService) { }

    trackByProductId(index: number, product: Product): string {
      return product.id;
    }

    toggleMenu(event: MouseEvent, productId: string) {
      event.preventDefault();
      this.isDisplayMenu[productId] = !this.isDisplayMenu[productId];
    }

    handleEdit(product: Product) {
      this.selectedEditProduct = { ...product }; // Clone the product object to avoid immediate changes
      this.isDisplayMenu = {};
    }

    closeEditPopup() {
      this.selectedEditProduct = null; // Close the edit popup
    }

    saveProduct() {
      // save the product
    }

    handleDelete(productId: string) {
      this.selectedDeleteProduct = this.products.find(product => product.id === productId) || null;
      this.isConfirmDeleteVisible = true;
      this.isDisplayMenu[productId] = false;
    }

    closeDeletePopup() {
      this.isConfirmDeleteVisible = false; // Hide confirmation popup
      this.selectedDeleteProduct = null; // Reset selected product
    }

    confirmDelete() {
      // Hide confirmation popup
    }
}
