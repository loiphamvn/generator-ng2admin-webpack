import { Routes, RouterModule }  from '@angular/router';

import { Posts } from './posts.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Posts,
    children: []
  }
];

export const routing = RouterModule.forChild(routes);
