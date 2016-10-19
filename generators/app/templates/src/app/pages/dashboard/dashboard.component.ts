import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { AppBase } from './../../app.base'
import { Security } from './../../../common/security/index';

@Component({
  selector: 'dashboard',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./dashboard.scss')],
  template: require('./dashboard.html')
})
export class Dashboard extends AppBase {

  constructor(public _router: Router, public _security: Security) {
    super(_router, _security);

  }
}
