import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RegistrService } from './shared/registr.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationComponent } from './authentication/authentication.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationRouteModule } from "./authentication-routing.module";
import { OnboardingComponent } from '../onboarding/onboarding/onboarding.component';
import { OnboardingModule } from '../onboarding/OnboardingModule';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent
    , AuthenticationComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, HttpClientModule, HttpModule,
    FormsModule, AuthenticationRouteModule],
  providers: [RegistrService],

})
export class AuthenticationModule { }
