import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsistPage } from './asist.page';

const routes: Routes = [
  {
    path: '',
    component: AsistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsistPageRoutingModule {}
