import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CollapseModule } from 'ng2-bootstrap';

import { Login } from './login.component';
import { routing } from './login.routing';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CollapseModule,
    routing
  ],
  declarations: [
    Login
  ]
})
export default class LoginModule {
}
