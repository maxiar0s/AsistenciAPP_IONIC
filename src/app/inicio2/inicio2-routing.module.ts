import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Inicio2Page } from './inicio2.page';

const routes: Routes = [
  {
    path: '',
    component: Inicio2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Inicio2PageRoutingModule {}
