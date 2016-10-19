import { Component, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { AppBase } from './../../../app.base'
import { Security } from './../../../../common/security';
import { CountriesResource } from './../../../../common/resources';

@Component({
  selector: 'country-edit',
  encapsulation: ViewEncapsulation.None,
  template: require('./edit.html'),
})
export class Edit extends AppBase {
  private id: number;
  private info: any;

  public form: FormGroup;
  public english_name: AbstractControl;
  public local_name: AbstractControl;
  public region: AbstractControl;
  public alpha2_code: AbstractControl;
  public country_calling_code: AbstractControl;

  public submitted: boolean = false;

  constructor(public _router: Router, public _security: Security, public _route: ActivatedRoute, fb: FormBuilder, private _countries: CountriesResource) {
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

  protected setInfo(info) {
    this.english_name.setValue(info.english_name);
    this.local_name.setValue(info.local_name);
    this.region.setValue(info.region);
    this.alpha2_code.setValue(info.alpha2_code);
    this.country_calling_code.setValue(info.country_calling_code);
  }

  protected getInfo(id) {
    this.id = id;
    this._countries.find(id).then(
      (res: any)=> {
        this.info = res;
        this.setInfo(this.info );
      },
      ()=> {
        this.goToUrl('pages/countries');
      }
    );
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.getInfo(params['id']);
    });
  }

  public onSubmit(params: any): void {
    this.submitted = true;
    this.errors = null;
    if (this.form.valid) {
      this._countries.update({
        id: this.id,
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
