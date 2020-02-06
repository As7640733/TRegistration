import { Component, OnInit, NgModule, wtfStartTimeRange } from "@angular/core";
import { FormsModule, FormControlName } from "@angular/forms";
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators
} from "@angular/forms";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-professional",
  templateUrl: "./professional.component.html",
  styleUrls: ["./professional.component.css"]
})
export class ProfessionalComponent implements OnInit {
  FormGroups: FormGroup;
  TotalRow: number;


  constructor(private _fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.FormGroups = this._fb.group({
      Sname: [' ', Validators.required],
      Cname: [' ', Validators.required],
      Dname: [' ', Validators.required],
      Yname: [' ', Validators.required]
      ,
      itemRows: this._fb.array([this.initItemRow()])
    });
  }
  initItemRow() {
    return this._fb.group({
      Sname: [" "],
      Cname: [" "],
      Dname: [" "],
      Yname: [" "]
    });
  }
  addNewRow() {
    const control = <FormArray>this.FormGroups.controls["itemRows"];
    control.push(this.initItemRow());
  }
  deleteRow(index: number) {
    const control = <FormArray>this.FormGroups.controls["itemRows"];
    if (control != null) {
      this.TotalRow = control.value.length;
    }

    if (this.TotalRow > 1) {
      control.removeAt(index);
    } else {
      alert("one Record is mandatory.");
      return false;
    }
  }
}
