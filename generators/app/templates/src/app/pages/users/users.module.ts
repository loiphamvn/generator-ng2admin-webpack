import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationModule, CollapseModule } from 'ng2-bootstrap'

import { ComponentsModule } from './../../components/components.module';

import { Users } from './users.component';
import { routing } from './users.routing';
import { Create } from './create';
import { Edit } from './edit';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    PaginationModule,
    CollapseModule,
    ComponentsModule,
  ],
  declarations: [
    Users,
    Create,
    Edit,
  ],
  providers: []
})

export default class UsersModule {
}
