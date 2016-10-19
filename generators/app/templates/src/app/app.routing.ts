import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: '404' }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
