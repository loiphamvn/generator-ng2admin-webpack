import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CollapseModule } from 'ng2-bootstrap';

import { ErrorNotifications } from '.'

const APP_COMPONENTS = [
  ErrorNotifications,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CollapseModule,
  ],
  declarations: [
    ...APP_COMPONENTS,
  ],
  providers: [],
  exports: [
    ...APP_COMPONENTS,
  ]
})

export class ComponentsModule {
}
