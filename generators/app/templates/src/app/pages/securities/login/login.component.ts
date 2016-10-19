import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { AppBase } from './../../../app.base'
import { Security } from './../../../../common/security/index';

@Component({
  selector: 'login',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./login.scss')],
  template: require('./login.html'),
})
export class Login extends AppBase {

  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;

  constructor(public _router: Router, public _security: Security, fb: FormBuilder) {
    super(_router, _security);

    this.form = fb.group({
      'email': ['bss.team.dev@gmail.com', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['12345678', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(params: Object): void {
    this.submitted = true;
    this.errors = null;
    if (this.form.valid) {
      this._security.login(params).then(
        ()=> {
          this._router.navigateByUrl('pages/dashboard');
        },
        error=> {
          this.errors = error;
        });
    }
  }
}
