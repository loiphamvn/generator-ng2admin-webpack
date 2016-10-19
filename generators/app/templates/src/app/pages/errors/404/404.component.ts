import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { AppBase } from './../../../app.base'
import { Security } from './../../../../common/security/index';

@Component({
  selector: 'notfound',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./404.scss')],
  template: require('./404.html'),
})
export class NotFound extends AppBase {

  constructor(public _router: Router, public _security: Security) {
    super(_router, _security);
  }
}
