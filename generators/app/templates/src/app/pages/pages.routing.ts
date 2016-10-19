import { Routes, RouterModule }  from '@angular/router';

import { LoggedIn } from './../loggedIn'
import { Pages } from './pages.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => System.import('./securities/login/login.module')
  },
  {
    path: 'forgotpw',
    loadChildren: () => System.import('./securities/forgotpw/forgot/forgot.module')
  },
  {
    path: 'forgotpw/:email/:secretCode',
    loadChildren: () => System.import('./securities/forgotpw/reset/reset.module')
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', loadChildren: () => System.import('./dashboard/dashboard.module')},
      {path: 'users', loadChildren: () => System.import('./users/users.module')},
      {path: 'categories', loadChildren: () => System.import('./categories/categories.module')},
      {path: 'countries', loadChildren: () => System.import('./countries/countries.module')},
      {path: 'activities', loadChildren: () => System.import('./activities/activities.module')},
      {path: 'posts', loadChildren: () => System.import('./posts/posts.module')},
      {path: 'contacts', loadChildren: () => System.import('./contacts/contacts.module')},
    ],
    resolve: {
      init: LoggedIn
    }
  },
  {path: '404', loadChildren: () => System.import('./errors/404/404.module')},
];

export const routing = RouterModule.forChild(routes);
