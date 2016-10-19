import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { Security } from '../common/security/index';

@Injectable()
export class AppBase {
  skipUrls: any = [
    '/login',
  ];

  isAuthenticated: boolean = false;

  // Start pagination
  public page:number = 1;
  public pageSize: number = 20;
  public totalItems: number = 0;
  public maxSize: number = 10;
  public sort: string;
  public order: string;
  public data: any;
  public errors: Array<any>;

  // End pagination

  constructor(public _router: Router, public _security: Security) {
    this.isAuthenticated = _security.isAuthenticated();

    this._router.events.subscribe((event) => {
      this.isAuthenticated = _security.isAuthenticated();
      if (event instanceof NavigationStart) {
        if (this.isAuthenticated && this.skipUrls.indexOf(event.url) !== -1) {
          //this.goToDashboard();
        }
      }
    });
  }

  goToUrl(url) {
    this._router.navigateByUrl(url);
  }

  goToLogin() {
    this._router.navigateByUrl('/login');
  }

  goToDashboard() {
    this._router.navigateByUrl('pages/dashboard');
  }
}
