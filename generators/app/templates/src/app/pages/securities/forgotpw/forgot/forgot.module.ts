import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CollapseModule } from 'ng2-bootstrap';

import { Forgot } from './forgot.component';
import { routing } from './forgot.routing';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CollapseModule,
    routing,
  ],
  declarations: [
    Forgot,
  ],
})
export default class ForgotModule {}
