// src/app/models/models.ts

export interface Media {
    id: string;
    imagePath: string;
    productId: string;
  }
  
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    media: Media[];
}
  
export interface User {
    id: string;
    name: string;
    email: string;
    password: string; // Consider not exposing the password in client-side code
    role: 'client' | 'seller';
    avatar: string;
    products: Product[];
}
  