import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Security } from '../common/security/index';

@Injectable()
export class LoggedIn implements Resolve<any> {
  constructor(private _router: Router, private _security: Security) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any>|Promise<any>|any {
    return this._security.requestCurrentUser().then(
      ()=> {
        if (!this._security.isAuthenticated()) {
          this._router.navigateByUrl('/login');
        }
      }
    );
  }
}
