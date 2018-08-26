import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards';

// Import Containers
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full',
  },
  {
    path: '',
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'auth',
        loadChildren: './_auth/auth.module#AuthModule',
      },
      {
        path: 'admin',
        loadChildren: './_admin/admin.module#AdminModule',
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
