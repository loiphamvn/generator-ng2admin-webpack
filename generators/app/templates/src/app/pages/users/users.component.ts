import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { AppBase } from './../../app.base'
import { Security } from './../../../common/security';
import { UsersResource } from './../../../common/resources';

@Component({
  selector: 'users',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./users.scss')],
  template: require('./users.html'),
})
export class Users extends AppBase {
  metricsTableData: Array<any>;
  isLoading: boolean = false;

  constructor(public _router: Router, public _security: Security, private _users: UsersResource) {
    super(_router, _security);
  }

  protected getListData() {
    this.isLoading = true;
    this._users.getList(this.page, this.pageSize, this.sort, this.order, this.data).then(
      (res: any)=> {
        this.metricsTableData = res.data;
        this.totalItems = res.pagination.total;
        this.isLoading = false;
      },
      ()=> {
        this.isLoading = false;
      }
    );
  }

  ngOnInit() {
    this.getListData();
  }

  // pagination
  public setPage(pageNo: number): void {
    this.page = pageNo;
  };

  public pageChanged(event: any): void {
    this.page = event.page;
    this.pageSize = event.itemsPerPage;
    this.getListData();
  };

  public addItem() {
    this._router.navigateByUrl('pages/users/create');
  }

  public editItem(item) {
    this._router.navigateByUrl('pages/users/edit/' + item.id);
  }

  public deleteItem(item) {
    this._users.destroy(item.id).then(
      ()=> {
        this.getListData();
      },
      ()=> {

      }
    )
  }
}
