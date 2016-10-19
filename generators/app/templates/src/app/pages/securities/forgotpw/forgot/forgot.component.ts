import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { EmailValidator } from '../../../../theme/validators';
import { Security } from './../../../../../common/security/index';
import { CONSTANTS } from './../../../../../constants';

@Component({
  selector: 'forgot',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./forgot.scss')],
  template: require('./forgot.html'),
})
export class Forgot {
  public pattern: Object;
  public form: FormGroup;
  public email: AbstractControl;
  public submitted: boolean = false;
  public success: boolean = false;

  constructor(fb: FormBuilder, public _security: Security, public _router: Router) {
    this.pattern = CONSTANTS.PATTERN.email;
    this.form = fb.group({
      'email': ['bss.team.dev@gmail.com', Validators.compose([Validators.required, EmailValidator.validate])],
    });

    this.email = this.form.controls['email'];
  }

  public onSubmit(params: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      this._security.resetPw(params['email']).then(
        ()=> {
          this.success = true;
        },
        error=> {
          console.log(error);
        });
    }
  }
}
