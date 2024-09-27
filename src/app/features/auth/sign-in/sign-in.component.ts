import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth-service.service';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { PasswordModule } from 'primeng/password';
import { FormControl, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MessagesModule } from 'primeng/messages';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CardModule, MessagesModule, ButtonModule, InputGroupModule, InputGroupAddonModule, PasswordModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
    signInForm: FormGroup;
    loading = false;  
    errorMessage: string | null = null;  

    constructor(
      private fb: FormBuilder, 
      private authService: AuthService,
      private router: Router,
    ) {
        this.signInForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]]
        });
    }

    get email() {
      return this.signInForm.controls['email'];
    }

    get password() { return this.signInForm.controls['password']; }

    onSubmit(): void {
        const { email, password } = this.signInForm.value;
        console.log('onSubmit');
        this.errorMessage = null;
        
        if (this.signInForm.valid) {
          
          this.loading = true;  // Set loading state to true
    
          setTimeout(() => {  // Simulating an async request
            const success = this.authService.login(email, password);
    
            if (success) {
              this.router.navigate(['/']);
              this.signInForm.reset();
            } else {
              // this.msgService.add({ severity: 'error', summary: 'Error', detail: 'email or password is wrong' });
              this.errorMessage = 'email or password is wrong';
            }
    
            this.loading = false;  // Set loading state to false
          }, 1500);  // Simulate a delay for the login process
        } else {
          // this.msgService.add({ severity: 'error', summary: 'Error', detail: 'email or password is incorrect!' });
          this.errorMessage = 'email or password is incorrect!';
        }
    }
}
