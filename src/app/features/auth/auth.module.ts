import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SignInComponent,
    SignUpComponent,
    AuthRoutingModule,
  ],
  exports: [
    SignInComponent,
    SignUpComponent
  ]
})
export class AuthModule { }
