import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditadresPageRoutingModule } from './editadres-routing.module';

import { EditadresPage } from './editadres.page';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    EditadresPageRoutingModule
  ],
  declarations: [EditadresPage]
})
export class EditadresPageModule {}
