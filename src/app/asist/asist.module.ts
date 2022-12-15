import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsistPageRoutingModule } from './asist-routing.module';

import { AsistPage } from './asist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsistPageRoutingModule
  ],
  declarations: [AsistPage]
})
export class AsistPageModule {}
