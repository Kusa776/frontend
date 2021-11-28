import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgravPageRoutingModule } from './prograv-routing.module';

import { ProgravPage } from './prograv.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgravPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ProgravPage]
})
export class ProgravPageModule {}
