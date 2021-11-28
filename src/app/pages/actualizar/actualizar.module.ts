import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarPageRoutingModule } from './actualizar-routing.module';

import { ActualizarPage } from './actualizar.page';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ActualizarPage]
})
export class ActualizarPageModule {}
