import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardPage} from './dashboard/dashboard.page';
import {MainLayout} from './main/main.layout';
import {AssetDetailPage} from './dashboard/asset-detail.page';
import {StudentHostPage} from './dashboard/student-host.page';
import {StudentDetailPage} from './dashboard/student-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardPage,
      },
      {
        path: 'detail/:assetNo',
        component: AssetDetailPage,
      },
      {
        path: 'student-host',
        component: StudentHostPage,
      },
      {
        path: 'student-detail/:matricNumber',
        component: StudentDetailPage,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: false}),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
