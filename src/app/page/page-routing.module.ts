import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page } from './page';

const routes: Routes = [
  {
    path: '',
    component: Page
  },
  {
    path: 'service-detail/:service_id',
    loadChildren: () => import('./service-detail/service-detail.module').then( m => m.ServiceDetailPageModule)
  },
  {
    path: 'lead/:service_id',
    loadChildren: () => import('./lead/lead.module').then( m => m.LeadPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then( m => m.OrdersPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagePageRoutingModule {}
