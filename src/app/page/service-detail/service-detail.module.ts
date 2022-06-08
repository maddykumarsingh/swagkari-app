import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceDetailPageRoutingModule } from './service-detail-routing.module';

import { ServiceDetailPage } from './service-detail.page';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CoreModule,
    FormsModule,
    IonicModule,
    ServiceDetailPageRoutingModule
  ],
  declarations: [ServiceDetailPage]
})
export class ServiceDetailPageModule {}
