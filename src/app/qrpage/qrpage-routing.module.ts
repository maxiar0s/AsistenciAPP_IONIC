import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QrpagePage } from './qrpage.page';

const routes: Routes = [
  {
    path: '',
    component: QrpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrpagePageRoutingModule {}
