import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TiendaService } from 'src/app/servicio/tienda.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Usuario/modelo/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public loginForm:  FormGroup;
  constructor(
    private http: HttpClient,
    private Api: TiendaService,
    private builder: FormBuilder,
    private router: Router, ) {

      this.loginForm=this.builder.group({
        username: ['',Validators.required,Validators.minLength(5),Validators.maxLength(10)],
        password:['',Validators.required,Validators.minLength(8),Validators.maxLength(16)]
      })

    }
  ngOnInit() {

  }

  public campo(control: string) {
    return this.loginForm.get(control);
  }
  public fueTocado(control: string){
    return this.loginForm.get(control).touched;
  }
  public estaSucio(control: string){
    return this.loginForm.get(control).dirty;
  }
  public logeado(usuario: Usuario){
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({

        username: usuario.username,
        password: usuario.password,
        // expiresInMins: 60, // optional
      })
    })
    .then(res => res.json())
    .then(console.log);
    this.Api.verificar()

  }

}
