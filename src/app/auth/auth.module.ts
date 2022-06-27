import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';
import { HttpClientModule } from '@angular/common/http';
import { TokenService } from './services/token.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthPageRoutingModule,
    HttpClientModule
  ],
  declarations: [AuthPage],
})
export class AuthPageModule {}
