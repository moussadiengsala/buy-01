import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth-service.service';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { MessagesModule } from 'primeng/messages';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { PasswordModule } from 'primeng/password';
import { MessageService } from 'primeng/api';
import { DividerModule } from 'primeng/divider';
import { FileUploadModule } from 'primeng/fileupload';
import { RadioButtonModule } from 'primeng/radiobutton';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FileUploadModule, RadioButtonModule, CardModule, MessagesModule, DividerModule, ButtonModule, InputGroupModule, InputGroupAddonModule, PasswordModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
  providers: [MessageService]
})

export class SignUpComponent {
    signUpForm: FormGroup;
    loading: boolean = false;
    isSeller: boolean = false; // Flag to track if seller is selected
    avatar: File | null = null;
    messageAction: {
        severity: 'success' | 'info' | 'warn' | 'error',
        summary: string,
        detail: string
    } | null = null;

    constructor(private fb: FormBuilder, private authService: AuthService, private messageService: MessageService) {
        this.signUpForm = this.fb.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
            role: ['client'] // Default role
        });
    }

    get name() {
        return this.signUpForm.controls['name'];
    }

    get email() {
        return this.signUpForm.controls['email'];
    }

    get password() {
        return this.signUpForm.controls['password'];
    }

    onRoleChange(event: Event): void {
        const selectElement = event.target as HTMLSelectElement;
        this.isSeller = selectElement.value === 'seller';
    }

    onAvatarSelected(event: Event): void {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            const file = input.files[0];
            if (file.size > 2 * 1024 * 1024) {
                this.messageAction = {
                    severity: 'error',
                    summary: 'File too large',
                    detail: 'File size should not exceed 2MB.'
                };
                this.avatar = null;
            } else if (!file.type.startsWith('image/')) {
                this.messageAction = {
                    severity: 'error',
                    summary: 'Invalid file type',
                    detail: 'Only image files are allowed.'
                };
                this.avatar = null;
            } else {
                this.messageAction = {
                    severity: 'success',
                    summary: 'File uploaded',
                    detail: 'File uploaded successfully.'
                }
                this.avatar = file;
            }
        }
        
    }

    onSubmit(): void {
        // if (this.signUpForm.valid) {
        //     const formData = new FormData();
        //     formData.append('name', this.signUpForm.value.name);
        //     formData.append('email', this.signUpForm.value.email);
        //     formData.append('password', this.signUpForm.value.password);
        //     formData.append('role', this.signUpForm.value.role);
        //     if (this.isSeller && this.avatar) {
        //         formData.append('avatar', this.avatar); // Add avatar if it's a seller
        //     }

        //     this.loading = true;

        //     this.authService.register(formData).subscribe({
        //         next: (response) => {
        //             this.loading = false;
        //             this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Registration successful!', life: 3000 });
        //             this.signUpForm.reset();
        //         },
        //         error: (error) => {
        //             this.loading = false;
        //             this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Registration failed.', life: 3000 });
        //             console.error('Registration error:', error);
        //         }
        //     });
        // }
    }
}
