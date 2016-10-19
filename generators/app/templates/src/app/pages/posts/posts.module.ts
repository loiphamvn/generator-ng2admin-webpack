import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import  { PaginationModule } from 'ng2-bootstrap'

import { Posts } from './posts.component';
import { routing } from './posts.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    PaginationModule
  ],
  declarations: [
    Posts,
  ],
  providers: [
  ]
})
export default class PostsModule {
}
