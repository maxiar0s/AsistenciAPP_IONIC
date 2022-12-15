import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Inicio2PageRoutingModule } from './inicio2-routing.module';

import { Inicio2Page } from './inicio2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Inicio2PageRoutingModule
  ],
  declarations: [Inicio2Page]
})
export class Inicio2PageModule {}
