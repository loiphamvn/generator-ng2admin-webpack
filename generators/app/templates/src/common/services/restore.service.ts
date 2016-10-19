export class RestoreService<T> {
  originalItem:T;
  currentItem:T;

  setItem(item:T) {
    this.originalItem = item;
    this.currentItem = this.clone(item);
  }

  getItem():T {
    return this.currentItem;
  }

  restoreItem():T {
    this.currentItem = this.originalItem;
    return this.getItem();
  }

  clone(item:T):T {
    // super poor clone implementation
    return JSON.parse(JSON.stringify(item));
  }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */