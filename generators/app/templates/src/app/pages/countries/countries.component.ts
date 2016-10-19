import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { AppBase } from './../../app.base'
import { Security } from './../../../common/security';
import { CountriesResource } from './../../../common/resources';

@Component({
  selector: 'countries',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./countries.scss')],
  template: require('./countries.html'),
})
export class Countries extends AppBase {
  metricsTableData: Array<any>;
  isLoading: boolean = false;

  constructor(public _router: Router, public _security: Security, private _countries: CountriesResource) {
    super(_router, _security);
  }

  protected getListData() {
    this.isLoading = true;
    this._countries.getList(this.page, this.pageSize, this.sort, this.order, this.data).then(
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
    this._router.navigateByUrl('pages/countries/create');
  }

  public editItem(item) {
    this._router.navigateByUrl('pages/countries/edit/' + item.id);
  }

  public deleteItem(item) {
    this._countries.destroy(item.id).then(
      ()=> {
        this.getListData();
      },
      ()=> {

      }
    )
  }
}
