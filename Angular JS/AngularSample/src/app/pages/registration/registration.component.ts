import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';

const passwordValidator: ValidatorFn = (formGroup: FormGroup) : ValidationErrors | null =>{
  const password = formGroup.get("password").value;
  const confirmpassword = formGroup.get("confirmPassword").value;
  return password === confirmpassword ? null : {'passwordMisMatch' : true}
}
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  // registration = new FormGroup({
  //   userName: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl('')
  //   })
  // });

  registration = this.fb.group({
    userName: ['', [Validators.minLength(3), this.validateUserName(/test/)]],
    password: [''],
    confirmPassword: [''],
    address: this.fb.group({
      city: [''],
      state: ['']
    })
  }, {
    validator :passwordValidator
  });

  get username() {
    return this.registration.get('userName');
  }
  get confirmPassword() {
    return this.registration.get('confirmPassword');
  }

  validateUserName(regularExp :RegExp) : {[key:string]: any} | null {
    return (control: FormControl) => {
      const validation = regularExp.test(control.value);
      return validation ? {'errorText' : true } : null;
    }
  }
  formSubmitHandler() {
    console.log("form Submitted");
  }
  loadFormData() {
    this.registration.setValue({
      userName: "Gladstone",
      password: "Gladstone",
      confirmPassword: "Gladstone",
      address: {
        city: "Chennai",
        state: "Tamil Nadu"
      }
    })
  }
}
