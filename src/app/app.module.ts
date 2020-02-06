import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RegistrService } from './authentication/shared/registr.service';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { OnboardingModule } from "./onboarding/OnboardingModule";

import { AuthenticationModule } from "./authentication/authentication.module";
import { AgmCoreModule } from "@agm/core";
import { TestData } from './authentication/Testdata';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AuthenticationModule,
    OnboardingModule,

    AppRoutingModule, HttpClientModule, HttpModule,

    InMemoryWebApiModule.forRoot(TestData)


  ],
  providers: [RegistrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
