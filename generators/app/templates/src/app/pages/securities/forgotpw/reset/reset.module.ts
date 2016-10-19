import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CollapseModule } from 'ng2-bootstrap';

import { Reset } from './reset.component';
import { routing } from './reset.routing';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CollapseModule,
    routing,
  ],
  declarations: [
    Reset,
  ],
})
export default class ResetModule {}
