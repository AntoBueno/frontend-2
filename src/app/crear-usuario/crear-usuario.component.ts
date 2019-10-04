import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiRestService } from "../shared/api-rest.service";


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  @Input() usuarioDetalle = {nombre: '', email:'', contrasena: ''}

  constructor(
    public restApi: ApiRestService,
    public router: Router
  ) { }

  ngOnInit() {}

  addUsuario(dataUsuario){
    this.restApi.createUsuario(this.usuarioDetalle).subscribe((data: {}) => {
      this.router.navigate(['/lista-usuario'])
    })
  }

  
}
