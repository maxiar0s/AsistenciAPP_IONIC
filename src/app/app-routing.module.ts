import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { IngresadoGuard } from './ingresado.guard';
import { NoIngresadoGuard } from './no-ingresado.guard';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'inicio2',
    loadChildren: () => import('./inicio2/inicio2.module').then( m => m.Inicio2PageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'qrpage',
    loadChildren: () => import('./qrpage/qrpage.module').then( m => m.QrpagePageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'asist',
    loadChildren: () => import('./asist/asist.module').then( m => m.AsistPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'noticias',
    loadChildren: () => import('./noticias/noticias.module').then( m => m.NoticiasPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate:[IngresadoGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
