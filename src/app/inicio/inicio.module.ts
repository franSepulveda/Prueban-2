import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';
import { HttpClientJsonpModule } from '@angular/common/http';
import { TiendaService } from '../servicio/tienda.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
    HttpClientJsonpModule
  ],
  declarations: [InicioPage],
  providers:[TiendaService]
})
export class InicioPageModule {}
