import { Component, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { AppBase } from './../../../../app.base'
import { EqualPasswordsValidator } from '../../../../theme/validators';
import { Security } from './../../../../../common/security/index';

@Component({
  selector: 'reset',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./reset.scss')],
  template: require('./reset.html'),
})
export class Reset extends AppBase {
  public form: FormGroup;
  public password: AbstractControl;
  public repeatPassword: AbstractControl;
  public passwords: FormGroup;
  public submitted: boolean = false;
  public success: boolean = false;
  public email: string;
  public secretCode: string;

  constructor(public _router: Router, public _security: Security, fb: FormBuilder, public _route: ActivatedRoute) {
    super(_router, _security);
    this.form = fb.group({
      'passwords': fb.group({
        'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
      }, {validator: EqualPasswordsValidator.validate('password', 'repeatPassword')})
    });

    this.passwords = <FormGroup> this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.repeatPassword = this.passwords.controls['repeatPassword'];
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.secretCode = params['secretCode'];
      this.email = params['email'];
    });
  }

  public onSubmit(params: Object): void {
    this.submitted = true;
    this.errors = null;
    if (this.form.valid) {
      this._security.confirmResetPw({
        user_id_or_email: this.email,
        code: this.secretCode,
        newPassword: params['passwords']['password'],
        newPassword_confirmation: params['passwords']['password']
      }).then(
        ()=> {
          this.success = true;
        },
        error=> {
          this.success = false;
          this.errors = error;
        });
    }
  }
}
