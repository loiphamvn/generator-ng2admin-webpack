import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routing';
import { NgaModule } from '../theme/nga.module';

import { ComponentsModule } from '../components/components.module';

import { Pages } from './pages.component';

@NgModule({
  imports: [CommonModule, ComponentsModule, NgaModule, routing],
  declarations: [Pages]
})
export class PagesModule {
}
