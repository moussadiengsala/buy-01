import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth-service.service';
import { inject } from '@angular/core';

export const AuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  if (authService.isAuthenticated()) {
    return true; // Allow access if the user is authenticated
  } else {
    router.navigate(['/auth/sign-in']); // Redirect to sign-in page if not authenticated
    return false;
  }
};