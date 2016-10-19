import { NgModule } from '@angular/core';

import { SecurityModule } from './security/security.module';
import { ResourceModule } from './resources/resource.module';
import { ServiceModule } from './services/service.module';

import { StatusPipe } from './pipes'

import {
  EmailValidator,
  EqualPasswordsValidator
} from './validators';

const APP_VALIDATORS = [
  EmailValidator,
  EqualPasswordsValidator
];

const APP_PIPES = [
  StatusPipe,
];

@NgModule({
  declarations: [
    ...APP_PIPES,
  ],
  imports: [
    SecurityModule,
    ResourceModule,
    ServiceModule,
  ],
  providers: [
    ...APP_VALIDATORS
  ],
  exports: [
    ...APP_PIPES,
  ]
})

export class CommonModule {
}
