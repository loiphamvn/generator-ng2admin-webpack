import { Routes, RouterModule }  from '@angular/router';

import { Contacts } from './contacts.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Contacts,
    children: []
  }
];

export const routing = RouterModule.forChild(routes);
