import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { appConfig } from '../app.config';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path:appConfig.routes.tabs.services,
        children:[
          {
            path:'',
            loadChildren:() => import('./services/services.module').then( m => m.ServicesPageModule )
          }
        ]
      },
      {
        path:appConfig.routes.tabs.profile,
        children:[
          {
            path:'',
            loadChildren:() => import('./profile/profile.module').then( m => m.ProfilePageModule )
          }
        ]
      },
      {
        path:appConfig.routes.tabs.settings,
        children:[
          {
            path:'',
            loadChildren:() =>  import('./settings/settings.module').then( m => m.SettingsPageModule )
          }
        ]
      }
      
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/services',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
