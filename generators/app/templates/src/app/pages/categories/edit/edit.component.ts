import { Component, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { AppBase } from './../../../app.base'
import { Security } from './../../../../common/security';
import { CategoriesResource } from './../../../../common/resources';

@Component({
  selector: 'category-edit',
  encapsulation: ViewEncapsulation.None,
  template: require('./edit.html'),
})
export class Edit extends AppBase {
  private id: number;
  private info: any;

  public statusList: Array<any> = [{value: 1, label: 'Enable'}, {value: 0, label: 'Disable'}];

  public form: FormGroup;
  public name: AbstractControl;
  public status: AbstractControl;

  public submitted: boolean = false;

  constructor(public _router: Router, public _security: Security, public _route: ActivatedRoute, fb: FormBuilder, private _categories: CategoriesResource) {
    super(_router, _security);

    this.form = fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'status': [, Validators.compose([Validators.required])],
    });

    this.name = this.form.controls['name'];
    this.status = this.form.controls['status'];
  }

  protected setInfo(info) {
    this.name.setValue(info.name);
    this.status.setValue(info.status);
  }

  protected getInfo(id) {
    this.id = id;
    this._categories.find(id).then(
      (res: any)=> {
        this.info = res;
        this.setInfo(this.info );
      },
      ()=> {
        this.goToUrl('pages/categories');
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
      this._categories.update({
        id: this.id,
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
