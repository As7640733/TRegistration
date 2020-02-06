import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { BusinessComponent } from './business/business.component';
import { ProfessionalComponent } from './professional/professional.component';
import { ErrorComponent } from './error/error.component';
import { PersonalComponent } from './personal/personal.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { LoginComponent } from '../authentication/login/login.component';
import { AuthenticationModule } from '../authentication/authentication.module';
import { HomeComponent } from './home/home.component';

export const onroutes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'onboarding', component: OnboardingComponent,

    children: [
      { path: '', redirectTo: 'personal', pathMatch: 'full' },
      { path: 'personal', component: PersonalComponent },
      { path: 'Home', component: LoginComponent },
      { path: 'address', component: AddressComponent },
      { path: 'business', component: BusinessComponent },
      { path: 'professional', component: ProfessionalComponent },
      //{path:'**',component:ErrorComponent}
    ]
  }];
@NgModule({
  imports:
    [RouterModule.forChild(onroutes),],
  exports: [RouterModule]
})
export class OnboardingRouterModule {
}


