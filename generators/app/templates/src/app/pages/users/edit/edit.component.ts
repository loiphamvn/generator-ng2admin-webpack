import { Component, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { AppBase } from './../../../app.base'
import { Security } from './../../../../common/security';
import { UsersResource, CountriesResource } from './../../../../common/resources';
import { EmailValidator, EqualPasswordsValidator } from '../../../../common/validators';
import { log } from "util";

@Component({
  selector: 'user-edit',
  encapsulation: ViewEncapsulation.None,
  template: require('./edit.html'),
})
export class Edit extends AppBase {
  private id: number;
  private info: any;

  public countryList: Array<any>;

  public form: FormGroup;
  public username: AbstractControl;
  public first_name: AbstractControl;
  public last_name: AbstractControl;
  public email: AbstractControl;
  public password: AbstractControl;
  public repeatPassword: AbstractControl;
  public passwords: FormGroup;
  public phone_number: AbstractControl;
  public occupation: AbstractControl;
  public gender: AbstractControl;
  public country_id: AbstractControl;
  public company: AbstractControl;
  public about: AbstractControl;

  public submitted: boolean = false;

  constructor(public _router: Router, public _security: Security, public _route: ActivatedRoute, fb: FormBuilder, private _users: UsersResource, private _countries: CountriesResource) {
    super(_router, _security);

    this.form = fb.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'first_name': [''],
      'last_name': [''],
      'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
      'passwords': fb.group({
        'password': ['', Validators.compose([Validators.minLength(4)])],
        'repeatPassword': ['']
      }, {validator: EqualPasswordsValidator.validate('password', 'repeatPassword')}),
      'phone_number': [''],
      'occupation': [''],
      'gender': ['1'],
      'country_id': [, Validators.compose([Validators.required])],
      'company': [''],
      'about': [''],
    });

    this.username = this.form.controls['username'];
    this.first_name = this.form.controls['first_name'];
    this.last_name = this.form.controls['last_name'];
    this.email = this.form.controls['email'];
    this.passwords = <FormGroup> this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.repeatPassword = this.passwords.controls['repeatPassword'];
    this.phone_number = this.form.controls['phone_number'];
    this.occupation = this.form.controls['occupation'];
    this.gender = this.form.controls['gender'];
    this.country_id = this.form.controls['country_id'];
    this.company = this.form.controls['company'];
    this.about = this.form.controls['about'];
  }

  protected getCountries() {
    this._countries.getList(1, 500).then(
      (res: any)=> {
        this.countryList = res.data;
      }
    );
  }

  protected setInfo(info) {
    this.username.setValue(info.username);
    this.first_name.setValue(info.first_name);
    this.last_name.setValue(info.last_name);
    this.email.setValue(info.email);
    this.phone_number.setValue(info.phone_number);
    this.occupation.setValue(info.occupation);
    this.gender.setValue(info.gender);
    this.country_id.setValue(info.country_id);
    this.company.setValue(info.company);
    this.about.setValue(info.about);
  }

  protected getInfo(id) {
    this.id = id;
    this._users.find(id).then(
      (res: any)=> {
        this.info = res;
        this.setInfo(this.info );
      },
      ()=> {
        this.goToUrl('pages/users');
      }
    );
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.getInfo(params['id']);
    });

    this.getCountries();
  }

  public onSubmit(params: any): void {
    this.submitted = true;
    this.errors = null;
    if (this.form.valid) {
      this._users.update({
        id: this.id,
        username: params.username,
        first_name: params.first_name,
        last_name: params.last_name,
        country_id: params.country_id,
        phone_number: params.phone_number,
        email: params.email,
        password: params.passwords.password,
        occupation: params.occupation,
        gender: params.gender,
        //dob: "2016-10-10",
        company: params.company,
        about: params.about,
      }).then(
        ()=> {
          this.goToUrl('pages/users');
        },
        (error: any)=> {
          this.errors = error;
        }
      );
    }
  }
}
