import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ErrorComponent } from "./onboarding/error/error.component";
import { LoginComponent } from "./authentication/login/login.component";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  //{path: 'login', component: LoginComponent},

  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
