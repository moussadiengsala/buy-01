import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth-service.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})

export class SignUpComponent {
    signUpForm: FormGroup;

    constructor(private fb: FormBuilder, private authService: AuthService) {
        this.signUpForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
            role: ['client'] // Default role
        });
    }

    onSubmit(): void {
        console.log(this.signUpForm)
        // if (this.signUpForm.valid) {
        //     this.authService.register(this.signUpForm.value);
        //     alert('Registration successful!');
        //     this.signUpForm.reset();
        // }
    }
}
