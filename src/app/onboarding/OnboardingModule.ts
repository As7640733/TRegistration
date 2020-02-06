import { DemoMaterialModule } from './../authentication/DemoMaterialModule';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PersonalComponent } from "./personal/personal.component";
import { AddressComponent } from "./address/address.component";
import { BusinessComponent } from "./business/business.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { ErrorComponent } from "./error/error.component";
import { ProfessionalComponent } from "./professional/professional.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { OnboardingComponent } from "./onboarding/onboarding.component";
import { OnboardingRouterModule } from "./onboarding-routing.module";
import { AuthenticationModule } from "../authentication/authentication.module";
import { AuthenticationRouteModule } from "../authentication/authentication-routing.module";
import { LoginComponent } from "../authentication/login/login.component";
import { HomeComponent } from "./home/home.component";
import { AppComponent } from "../app.component";
import { AppModule } from "../app.module";
import { AgmCoreModule } from "@agm/core";

@NgModule({
  declarations: [
    PersonalComponent,
    ProfessionalComponent,
    AddressComponent,
    BusinessComponent,
    NavBarComponent,
    ErrorComponent,
    OnboardingComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, DemoMaterialModule,
    AgmCoreModule.forRoot({
      apiKey: "API KEy",
      libraries: ["places"]
    }),
    AuthenticationModule,
    OnboardingRouterModule
  ],
  exports: [
    PersonalComponent,
    AddressComponent,
    BusinessComponent,
    ProfessionalComponent,
    NavBarComponent,
    HomeComponent
  ]
})
export class OnboardingModule { }
