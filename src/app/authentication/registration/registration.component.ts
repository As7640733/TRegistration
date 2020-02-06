import { RegistrService } from './../shared/registr.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/observable';
import { Register } from '../register';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  signupForm: FormGroup;
  allregister: Observable<Register[]>;


  constructor(private frmbuilder: FormBuilder, private registerservice: RegistrService) { }
  ngOnInit() {
    this.signupForm = this.frmbuilder.group(
      {
        fullName: ['', Validators.required],
        Emailid: ['', [Validators.required, Validators.email]],
        userpassword: ['', [Validators.required, Validators.minLength(6)]],
        mobileno: ['', [Validators.required, Validators.minLength(10)]]
      });

    this.getRegisterDetails();
  }
  onFormSubmit() {
    let register = this.signupForm.value;
    this.createForms(register);
    this.signupForm.reset();
  }
  createForms(register: Register) {
    this.registerservice.createRegister(register).subscribe(
      register => {
        this.getRegisterDetails();
      }
    )
  }
  getRegisterDetails() {
    this.allregister = this.registerservice.getRegisterDetails();
  }

}





