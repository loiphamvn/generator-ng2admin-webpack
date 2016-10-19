import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { ApiService } from './../services/index';
import { BaThemeSpinner } from './../../app/theme/services';

@Injectable()
export class AuthResource extends ApiService {
  constructor(_http: Http, _spinner: BaThemeSpinner) {
    super(_http, _spinner);
  }

  // Check login
  auth() {
    return this.get('auth', {});
  }

  // Login by username or email and password
  login(params) {
    return this.post('auth/signin/admin', params);
  }

  logout() {
    return this.post('auth/signout');
  }

  resetPw(email) {
    return this.post('auth/requestResetPassword/admin', {email: email});
  }

  confirmResetPw(params) {
    return this.put('auth/resetPassword', params);
  }
}
