import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoliPage } from './soli.page';

const routes: Routes = [
  {
    path: '',
    component: SoliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoliPageRoutingModule {}
