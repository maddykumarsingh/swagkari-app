import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    CoreModule
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
