import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoliPageRoutingModule } from './soli-routing.module';

import { SoliPage } from './soli.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SoliPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SoliPage]
})
export class SoliPageModule {}
