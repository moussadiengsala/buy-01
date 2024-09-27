
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Nullable } from 'primeng/ts-helpers';
import { User } from '../../../models/types';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private users: User[] = [
    {
        id: 'u1',
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'password123',
        role: 'seller',
        avatar: '/images/avatars/john_doe.png',
        products: [
            {
                id: 'p1',
                name: 'Product A',
                description: 'This is product A',
                price: 29.99,
                quantity: 10,
                media: [
                    { id: 'm1', imagePath: '/images/products/productA_1.png', productId: 'p1' },
                    { id: 'm2', imagePath: '/images/products/productA_2.png', productId: 'p1' }
                ]
            },
            {
                id: 'p2',
                name: 'Product B',
                description: 'This is product B',
                price: 49.99,
                quantity: 5,
                media: [{ id: 'm3', imagePath: '/images/products/productB_1.png', productId: 'p2'}]
            }
        ]
    },
    {
        id: 'u2',
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        password: 'securepassword456',
        role: 'client',
        avatar: '/images/avatars/jane_smith.png',
        products: []
    }
  ];
  private currentUserSubject: BehaviorSubject<User | null> = new BehaviorSubject<User|null>(null);

  constructor(private http: HttpClient) { 
  }

  register(user: User): void {
    this.users.push(user);
  }

  login(email: string, password: string): boolean {
      const user = this.users.find(u => u.email === email && u.password === password);
      if (user) {
          this.currentUserSubject.next(user);
          return true;
      }
      return false;
  }

  // A simple method to check authentication
  isAuthenticated(): boolean {
    // This is where you would check for a valid token or session
    return this.currentUserSubject.asObservable() != null;
  }

  // A method to log the user out and remove token
  logout(): void {
    this.currentUserSubject.next(null);
  }

  get currentUser(): Observable<User | null> {
    return this.currentUserSubject.asObservable();
}

  getAllUsers(): User[] {
      return this.users;
  }

  getUserById(id: string): User | undefined {
      return this.users.find(user => user.id === id);
  }
}