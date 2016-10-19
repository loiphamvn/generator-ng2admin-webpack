import './app.loader.ts';
import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalState } from './global.state';
import { BaImageLoaderService, BaThemePreloader, BaThemeSpinner } from './theme/services';
import { layoutPaths } from './theme/theme.constants';
import { BaThemeConfig } from './theme/theme.config';

import { AppBase } from './app.base';
import { Security } from './../common/security/index';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styles: [require('normalize.css'), require('./app.scss')],
  template: `
    <main [ngClass]="{'menu-collapsed': isMenuCollapsed}" baThemeRun>
      <div class="additional-bg"></div>
      <router-outlet></router-outlet>
    </main>
  `
})
export class App extends AppBase {
  isMenuCollapsed: boolean = false;

  skipUrls: any = [
    '/login',
    '/register'
  ];

  constructor(public _router: Router,
              public _security: Security,
              public _state: GlobalState,
              public _imageLoader: BaImageLoaderService,
              public _spinner: BaThemeSpinner,
              public _config:BaThemeConfig) {
    super(_router, _security);

    this._loadImages();

    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public ngAfterViewInit(): void {
    // hide spinner once all loaders are completed
    BaThemePreloader.load().then((values) => {
      this._spinner.hide();
    });
  }

  private _loadImages(): void {
    // register some loaders
    BaThemePreloader.registerLoader(this._imageLoader.load(layoutPaths.images.root + 'sky-bg.jpg'));
  }
}
