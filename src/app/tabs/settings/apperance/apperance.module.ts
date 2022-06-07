import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApperancePageRoutingModule } from './apperance-routing.module';

import { ApperancePage } from './apperance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApperancePageRoutingModule
  ],
  declarations: [ApperancePage]
})
export class ApperancePageModule {}
