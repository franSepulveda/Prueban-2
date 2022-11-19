import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Usuario/modelo/usuario';
import { Tokens } from '../Usuario/modelo/tokens';
import { Observable } from 'rxjs';
import { Producto } from '../producto/modelo/producto';
@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  private JWT_TOKEN = 'JWT_TOKEN';
  public URL_USER = "https://dummyjson.com/users/add";
  public urlLogin = " https://dummyjson.com/auth/login ";
  public urlProducts = " 'https://dummyjson.com/products?limit=10&skip=10&select=title,price'";

  public lista: Observable<Producto>
  constructor(private http: HttpClient) {

  }
  public login() {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({

        username: 'kminchelle',
        password: '0lelplR',

      })
    })
      .then(res => res.json())
      .then(console.log);
  }

  public registro(usuario) {
    return this.http.post(`${this.URL_USER}`, usuario, {
      headers: { 'Content-Type': 'application/json' }
    })
  }

  public verificar() {
    fetch('https://dummyjson.com/auth/login', {
      method: 'GET', /* or POST/PUT/PATCH/DELETE */
      headers: {
        'Authorization': 'Bearer ',
        'Content-Type': 'application/json'
      },
    })
      .then(res => res.json())
      .then(console.log);
  }


  public obtenerLogin() {
    this.http.get(`${this.urlLogin}`)
  }


  public getProducts() {
    fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price')
      .then(res => res.json())
      .then(console.log);
  }

  public guardarToken(token: string) {
    localStorage.setItem(this.JWT_TOKEN, token);
    console.log(token)


  }




}




