import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Service } from './services/service/service';
import { UserService } from './services/user/user.service';
import { RupeePipe } from './pipe/rupee.pipe';
import { CoreModule } from './core/core.module';
import { LeadService } from './services/lead/lead.service';

@NgModule({
  declarations: [AppComponent ],
  entryComponents: [],
  imports: [ 
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    CoreModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Service,
    UserService,
    LeadService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
