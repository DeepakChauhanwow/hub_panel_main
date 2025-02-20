import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { environment } from 'src/environments/environment';
import { UserRole } from '../shared/auth.roles';

const adminRoot = environment.adminRoot.substring(1); // path cannot start with a slash

let routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/hub/login',    
  },  
  {
    path: adminRoot,
    loadChildren: () => import('./app/app.module').then((m) => m.AppModule),
    data: { roles: [UserRole.Admin, UserRole.Editor] },
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
  },
  {
    path: 'hub',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  // { path: 'error', component: ErrorComponent },
  // { path: 'unauthorized', component: UnauthorizedComponent },
  { path: '**', redirectTo: '/hub/login' },
];

if (!environment.isAuthGuardActive) {
  routes = [
    {
      path: 'app',
      loadChildren: () => import('./app/app.module').then((m) => m.AppModule),
    },
    {
      path: 'user',
      loadChildren: () =>
        import('./user/user.module').then((m) => m.UserModule),
    },
    { path: 'error', component: ErrorComponent },
    { path: '**', redirectTo: '/error' },
  ];
}
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewRoutingModule {}
