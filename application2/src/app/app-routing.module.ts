import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { SubRouteComponent } from './sub-route/sub-route.component';
 
const routes: Routes = [
  {
    path: '**',
    component: EmptyRouteComponent
  },
  {
    path: 'subroute',
    component: SubRouteComponent
  },
//   {
//     path: 'angularapp/nestedroute/',
//     component: AngularAppComponent
//   },
//   { path: 'angularapp/lazy/', loadChildren: './lazy/lazy.module#LazyModule'},
];
 
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }