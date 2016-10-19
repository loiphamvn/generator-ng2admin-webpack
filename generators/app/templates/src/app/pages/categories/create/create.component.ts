import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { AppBase } from './../../../app.base'
import { Security } from './../../../../common/security';
import { CategoriesResource } from './../../../../common/resources';

@Component({
  selector: 'category-create',
  encapsulation: ViewEncapsulation.None,
  template: require('./create.html'),
})
export class Create extends AppBase {
  public statusList: Array<any> = [{value: 1, label: 'Enable'}, {value: 0, label: 'Disable'}];

  public form: FormGroup;
  public name: AbstractControl;
  public status: AbstractControl;

  public submitted: boolean = false;

  constructor(public _router: Router, public _security: Security, fb: FormBuilder, private _categories: CategoriesResource) {
    super(_router, _security);

    this.form = fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'status': [, Validators.compose([Validators.required])],
    });

    this.name = this.form.controls['name'];
    this.status = this.form.controls['status'];
  }

  ngOnInit() {

  }

  public onSubmit(params: any): void {
    this.submitted = true;
    this.errors = null;
    if (this.form.valid) {
      this._categories.create({
        name: params.name,
        status: params.status,
      }).then(
        ()=> {
          this.goToUrl('pages/categories');
        },
        (error: any)=> {
          this.errors = error;
        }
      );
    }
  }
}
