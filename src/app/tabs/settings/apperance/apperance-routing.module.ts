import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApperancePage } from './apperance.page';

const routes: Routes = [
  {
    path: '',
    component: ApperancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApperancePageRoutingModule {}
