import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgravPage } from './prograv.page';

const routes: Routes = [
  {
    path: '',
    component: ProgravPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgravPageRoutingModule {}
