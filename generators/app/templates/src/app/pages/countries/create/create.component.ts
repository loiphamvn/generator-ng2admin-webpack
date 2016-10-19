import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { AppBase } from './../../../app.base'
import { Security } from './../../../../common/security';
import { CountriesResource } from './../../../../common/resources';

@Component({
  selector: 'country-create',
  encapsulation: ViewEncapsulation.None,
  template: require('./create.html'),
})
export class Create extends AppBase {
  public form: FormGroup;
  public english_name: AbstractControl;
  public local_name: AbstractControl;
  public region: AbstractControl;
  public alpha2_code: AbstractControl;
  public country_calling_code: AbstractControl;

  public submitted: boolean = false;

  constructor(public _router: Router, public _security: Security, fb: FormBuilder, private _countries: CountriesResource) {
    super(_router, _security);

    this.form = fb.group({
      'english_name': ['', Validators.compose([Validators.required])],
      'local_name': [, Validators.compose([Validators.required])],
      'region': [, Validators.compose([Validators.required])],
      'alpha2_code': [, Validators.compose([Validators.required])],
      'country_calling_code': [, Validators.compose([Validators.required])],
    });

    this.english_name = this.form.controls['english_name'];
    this.local_name = this.form.controls['local_name'];
    this.region = this.form.controls['region'];
    this.alpha2_code = this.form.controls['alpha2_code'];
    this.country_calling_code = this.form.controls['country_calling_code'];
  }

  ngOnInit() {

  }

  public onSubmit(params: any): void {
    this.submitted = true;
    this.errors = null;
    if (this.form.valid) {
      this._countries.create({
        english_name: params.english_name,
        local_name: params.local_name,
        region: params.region,
        alpha2_code: params.alpha2_code,
        country_calling_code: params.country_calling_code,
      }).then(
        ()=> {
          this.goToUrl('pages/countries');
        },
        (error: any)=> {
          this.errors = error;
        }
      );
    }
  }
}
