import { Routes, RouterModule }  from '@angular/router';

import { Activities } from './activities.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Activities,
    children: []
  }
];

export const routing = RouterModule.forChild(routes);
