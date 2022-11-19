import { Component, OnInit } from '@angular/core';
import { TiendaService } from '../servicio/tienda.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  public productos : any=[];
  constructor( private tiendaApi: TiendaService) { }

  ngOnInit() {
    this.productos=this.tiendaApi.getProducts()
    console.log(this.productos);
    }

  }


