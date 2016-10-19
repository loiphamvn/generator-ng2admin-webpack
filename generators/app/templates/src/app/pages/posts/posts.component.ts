import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { AppBase } from './../../app.base'
import { Security } from './../../../common/security/index';

@Component({
  selector: 'posts',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./posts.scss')],
  template: require('./posts.html'),
})
export class Posts extends AppBase {
  metricsTableData: Array<any>;

  constructor(public _router: Router, public _security: Security) {
    super(_router, _security);
    this.metricsTableData = [
      {
        image: 'app/browsers/chrome.svg',
        browser: 'Google Chrome',
        visits: '10,392',
        isVisitsUp: true,
        purchases: '4,214',
        isPurchasesUp: true,
        percent: '45%',
        isPercentUp: true
      },
      {
        image: 'app/browsers/firefox.svg',
        browser: 'Mozilla Firefox',
        visits: '7,873',
        isVisitsUp: true,
        purchases: '3,031',
        isPurchasesUp: false,
        percent: '28%',
        isPercentUp: true
      },
    ];
  }

  // Start pagination
  public setPage(pageNo: number): void {
    this.page = pageNo;
  };

  public pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  };
  // End pagination

  public addUser() {
    console.log('addUser');
  }

  public editUser(user) {
    console.log(user);
  }

  public deleteUser(user) {
    console.log(user);
  }
}
