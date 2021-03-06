import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationModule, CollapseModule } from 'ng2-bootstrap'

import { CommonModule } from './../../../common/common.module';

import { ComponentsModule } from './../../components/components.module';

import { Countries } from './countries.component';
import { Create } from './create';
import { Edit } from './edit';
import { routing } from './countries.routing';


@NgModule({
  imports: [
    AngularCommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    PaginationModule,
    CollapseModule,
    CommonModule,
    ComponentsModule,
  ],
  declarations: [
    Countries,
    Create,
    Edit,
  ],
  providers: []
})

export default class CountriesModule {
}
