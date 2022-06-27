import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { appConfig } from './app.config';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: appConfig.routes.tabs.root ,
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate:[AuthGuard]
  },
  {
    path:'auth',
    loadChildren:() => import('./auth/auth.module').then( m => m.AuthPageModule )
  },
  {
    path:'page',
    loadChildren:() => import('./page/page.module').then( m => m.PageModule)
  },
  {
    path:'' ,
    redirectTo:appConfig.routes.tabs.root,
    pathMatch:'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
