import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { BaThemeSpinner } from './../../app/theme/services';
import { ApiService } from './../services';
import { Country } from './../objects';

@Injectable()
export class CountriesResource extends ApiService {
  resource: string = 'country';

  constructor(_http: Http, _spinner: BaThemeSpinner) {
    super(_http, _spinner);
  }

  find(id) {
    return new Promise((resolve, reject) =>
      this.get(this.resource + '/' + id).then(
        response => {
          resolve(new Country(response));
        },
        error=> {
          reject(error);
        })
    );
  }

  getList(page?: number, pageSize?: number, sort?: string, order?: string, data?: any) {
    return new Promise((resolve, reject) =>
      this.get(this.resource, this.getPagingParams(page, pageSize, sort, order, data)).then(
        response => {
          response.data = response.data.map(item=>new Country(item));
          resolve(response);
        },
        error=> {
          reject(error);
        })
    );
  }

  create(params) {
    return new Promise((resolve, reject) =>
      this.post(this.resource + '/create', params).then(
        response => {
          resolve(new Country(response));
        },
        error=> {
          reject(error);
        })
    );
  }

  update(params) {
    return new Promise((resolve, reject) =>
      this.put(this.resource, params).then(
        response => {
          resolve(new Country(response));
        },
        error=> {
          reject(error);
        })
    );
  }

  destroy(id) {
    return new Promise((resolve, reject) =>
      this.delete(this.resource + '/' + id).then(
        () => {
          resolve(true);
        },
        error=> {
          reject(error);
        })
    );
  }
}
