import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
@Component({
  selector: "app-personal",
  templateUrl: "./personal.component.html",
  styleUrls: ["./personal.component.css"]
})
export class PersonalComponent implements OnInit {
  usernames: any;
  password: any;
  repass: any;
  mobiles: any;
  emailid: any;
  constructor() { }

  ngOnInit() { }
}
