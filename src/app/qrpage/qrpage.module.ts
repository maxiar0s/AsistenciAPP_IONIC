import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { QrpagePageRoutingModule } from './qrpage-routing.module';
import { QrpagePage } from './qrpage.page';
import { QRCodeModule } from 'angularx-qrcode';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRCodeModule,
    QrpagePageRoutingModule
  ],
  declarations: [QrpagePage]
})
export class QrpagePageModule {}
