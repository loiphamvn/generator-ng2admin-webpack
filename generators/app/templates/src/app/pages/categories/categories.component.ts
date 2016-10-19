import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { AppBase } from './../../app.base'
import { Security } from './../../../common/security';
import { CategoriesResource } from './../../../common/resources';

@Component({
  selector: 'categories',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./categories.scss')],
  template: require('./categories.html'),
})
export class Categories extends AppBase {
  metricsTableData: Array<any>;
  isLoading: boolean = false;

  constructor(public _router: Router, public _security: Security, private _categories: CategoriesResource) {
    super(_router, _security);
  }

  protected getListData() {
    this.isLoading = true;
    this._categories.getList(this.page, this.pageSize, this.sort, this.order, this.data).then(
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
    this._router.navigateByUrl('pages/categories/create');
  }

  public editItem(item) {
    this._router.navigateByUrl('pages/categories/edit/' + item.id);
  }

  public deleteItem(item) {
    this._categories.destroy(item.id).then(
      ()=> {
        this.getListData();
      },
      ()=> {

      }
    )
  }
}
