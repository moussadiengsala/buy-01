
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // A simple method to check authentication
  isAuthenticated(): boolean {
    // This is where you would check for a valid token or session
    const token = localStorage.getItem('auth_token');
    return !!token;
  }

  // A method to log the user in and store token
  login(token: string) {
    localStorage.setItem('auth_token', token);
  }

  // A method to log the user out and remove token
  logout() {
    localStorage.removeItem('auth_token');
  }
}
