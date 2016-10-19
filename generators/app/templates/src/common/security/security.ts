// Angular2 specified stuff
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// Component specified stuff
import { CONSTANTS } from './../../constants';
import { AuthResource } from './../resources/index';
import { ApiService } from './../services/index';

@Injectable()
export class Security {
  public static currentUser;
  public static authToken;

  constructor(private _authResource: AuthResource, private _router: Router, private _apiService: ApiService) {
  }

  login(params) {
    return new Promise((resolve, reject) =>
      this._authResource.login(params).then(
        response => {
          Security.currentUser = response;
          Security.authToken = response.access_token;

          localStorage.setItem(CONSTANTS.SECURITY.tokenName, Security.authToken);

          // Set the Request Header 'Authorization'
          this._apiService.setAuthTokenHeader(Security.authToken);

          resolve(Security.currentUser);
        },
        error=> {
          reject(error);
        })
    );
  }

  resetPw(email) {
    return new Promise((resolve, reject) =>
      this._authResource.resetPw(email).then(
        response => {
          resolve(response);
        },
        error=> {
          reject(error);
        })
    );
  }

  // Apply new password
  confirmResetPw(params) {
    return new Promise((resolve, reject) =>
      this._authResource.confirmResetPw(params).then(
        response => {
          resolve(response);
        },
        error=> {
          reject(error);
        })
    );
  }

  logout() {
    // Remove localStorage
    localStorage.clear();

    // Remove class
    Security.currentUser = null;
    Security.authToken = null;

    this._authResource.logout();

    this._router.navigateByUrl('/login');
  }

  // Is the current user authenticated?
  isAuthenticated() {
    return !!Security.currentUser;
  }

  // Ask the backend to see if a user is already authenticated - this may be from a previous session.
  requestCurrentUser() {
    return new Promise((resolve) => {
        let authToken = localStorage.getItem(CONSTANTS.SECURITY.tokenName);
        if (authToken) {
          // Set the Request Header 'Authorization'
          this._apiService.setAuthTokenHeader(authToken);

          if (!this.isAuthenticated()) {
            this._authResource.auth().then(
              response => {
                Security.currentUser = response;
                Security.authToken = response.access_token;

                localStorage.setItem(CONSTANTS.SECURITY.tokenName, Security.authToken);
                resolve(true);
              },
              error=> {
                localStorage.clear();
                resolve(false);
              })
          } else {
            resolve(Security.currentUser);
          }
        } else {
          localStorage.clear();
          resolve(false);
        }
      }
    );
  }

  // Get auth token
  getToken() {
    return !!(Security.authToken || localStorage.getItem(CONSTANTS.SECURITY.tokenName));
  }
}
