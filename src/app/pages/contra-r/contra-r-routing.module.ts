import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContraRPage } from './contra-r.page';

const routes: Routes = [
  {
    path: '',
    component: ContraRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContraRPageRoutingModule {}
