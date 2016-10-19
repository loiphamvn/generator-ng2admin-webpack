import { Routes, RouterModule }  from '@angular/router';

import { Users } from './users.component';
import { Create } from './create';
import { Edit } from  './edit'

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {path: '', component: Users, children: []},
  {path: 'create', component: Create, children: []},
  {path: 'edit/:id', component: Edit, children: []},
];

export const routing = RouterModule.forChild(routes);
