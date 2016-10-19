import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import  { PaginationModule } from 'ng2-bootstrap'

import { Contacts } from './contacts.component';
import { routing } from './contacts.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    PaginationModule
  ],
  declarations: [
    Contacts,
  ],
  providers: [

  ]
})
export default class ContactsModule {
}
