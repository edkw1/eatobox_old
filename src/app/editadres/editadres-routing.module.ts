import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditadresPage } from './editadres.page';

const routes: Routes = [
  {
    path: '',
    component: EditadresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditadresPageRoutingModule {}
