import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarCarrosPageRoutingModule } from './listar-carros-routing.module';

import { ListarCarrosPage } from './listar-carros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarCarrosPageRoutingModule
  ],
  declarations: [ListarCarrosPage]
})
export class ListarCarrosPageModule {}
