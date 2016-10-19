// Angular2 specified stuff
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { CONSTANTS } from './../../constants';

import { BaThemeSpinner } from './../../app/theme/services';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {
  public static authToken;
  public static spinner;

  public _baseUrl;

  constructor(protected _http: Http, _spinner: BaThemeSpinner) {
    ApiService.spinner = _spinner;
    this._baseUrl = process.env.API_URL + '/';
  }

  public setAuthTokenHeader(authToken) {
    ApiService.authToken = authToken;
  }

  // TODO: move to common service
  private getHeaders(): Headers {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    if (ApiService.authToken) {
      headers.append(CONSTANTS.SECURITY.tokenName, ApiService.authToken);
    }

    return headers;
  }

  private getOptions(): RequestOptions {
    let headers = this.getHeaders();
    let options = new RequestOptions({headers: headers, withCredentials: false});

    return options;
  }

  public getPagingParams(page?: number, pageSize?: number, sort?: string, order?: string, data?: any) {
    let params = {};

    if (!_.isUndefined(page)) {
      params['page'] = page;
    }
    if (!_.isUndefined(pageSize)) {
      params['pageSize'] = pageSize;
    }
    if (!_.isUndefined(sort)) {
      params['sort'] = sort;
    }
    if (!_.isUndefined(order)) {
      params['order'] = order;
    }
    if (!_.isEmpty(data)) {
      params['data'] = encodeURIComponent(JSON.stringify(data));
    }

    return params;
  }

  // TODO: move to common service
  public static parseParameters(parameters: Object): string {
    if (Object.keys(parameters).length === 0) {
      return '';
    } else {
      return '?' + ApiService.serialize(parameters);
    }
  }

  // TODO: move to common service
  public static serialize(obj, prefix?) {
    let str = [];

    for (let p in obj) {

      if (obj.hasOwnProperty(p)) {
        let k = prefix ? prefix + '[' + p + ']' : p, v = obj[p];

        str.push(typeof v === 'object' ? ApiService.serialize(v, k) : encodeURIComponent(k) + '=' + encodeURIComponent(v));
      }
    }

    return str.join('&');
  }

  public static parseBody(parameters: Object) {
    if (!_.isEmpty(parameters)) {
      return JSON.stringify(parameters);
    }

    return undefined;
  }

  private extractData(response: Response) {
    ApiService.spinner.hide();
    let body = response.json();
    if (body.pagination) {
      return {data: body.data, pagination: body.pagination};
    }
    return body.data || {};
  }

  private handleError(response: any) {
    ApiService.spinner.hide();
    let body = response.json();
    return Promise.reject(body.errors || {});
  }

  public get(resource, params?: Object) {
    ApiService.spinner.show();
    return this._http
      .get(this._baseUrl + resource + (params ? ApiService.parseParameters(params) : ''), this.getOptions())
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  public post(resource: string, params?: Object) {
    ApiService.spinner.show();

    return this._http
      .post(this._baseUrl + resource, ApiService.parseBody(params), this.getOptions())
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  public put(resource: string, params?: Object) {
    ApiService.spinner.show();

    return this._http
      .put(this._baseUrl + resource, ApiService.parseBody(params), this.getOptions())
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  public patch(resource: string, params?: Object) {
    ApiService.spinner.show();

    return this._http
      .patch(this._baseUrl + resource, ApiService.parseBody(params), this.getOptions())
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  public delete(resource: string, params?: any) {
    ApiService.spinner.show();

    return this._http
      .delete(this._baseUrl + resource, this.getOptions())
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }
}
