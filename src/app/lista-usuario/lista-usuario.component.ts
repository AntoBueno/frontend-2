import { Component, OnInit } from '@angular/core';
import {ApiRestService} from '../shared/api-rest.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {
Usuario: any = [];

  constructor(
    public restApi: ApiRestService
  ) { }

  ngOnInit() {
    this.loadUsuarios()
  }

    // Get lista usuarios
    loadUsuarios() {
      return this.restApi.getUsuarios().subscribe((data: {}) => {
        this.Usuario = data;
      })
    }

    // Delete employee
  deleteUsuario(contrasena) {
    if (window.confirm('Seguro de eliminar??')){
      this.restApi.deleteUsuario(contrasena).subscribe(data => {
        this.loadUsuarios()
      })
    }
  }  

}
