import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import  { PaginationModule } from 'ng2-bootstrap'

import { Activities } from './activities.component';
import { routing } from './activities.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    PaginationModule
  ],
  declarations: [
    Activities,
  ],
  providers: [
  ]
})
export default class ActivitiesModule {
}
