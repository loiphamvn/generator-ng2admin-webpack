import { NgModule } from '@angular/core';
import {
  AuthResource,
  UsersResource,
  CategoriesResource,
  CountriesResource,
} from '.';


@NgModule({
  providers: [
    AuthResource,
    UsersResource,
    CategoriesResource,
    CountriesResource,
  ],
})
export class ResourceModule {
}