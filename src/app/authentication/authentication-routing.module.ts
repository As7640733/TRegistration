import { RegistrService } from './shared/registr.service';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { Routes, RouterModule } from '@angular/router';
import { DemoMaterialModule } from "./DemoMaterialModule";


const auroute: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'registration', component: RegistrationComponent
  },
  { path: 'authentication', component: AuthenticationComponent }


];
@NgModule({
  declarations: [

  ],
  imports: [

    RouterModule.forChild(auroute),
  ],
  exports: [RouterModule,]
})
export class AuthenticationRouteModule { }
