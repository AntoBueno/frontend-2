import { Component, OnInit } from '@angular/core';
import {ApiRestService} from '../shared/api-rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-usuario',
  templateUrl: './update-usuario.component.html',
  styleUrls: ['./update-usuario.component.css']
})
export class UpdateUsuarioComponent implements OnInit {
  contrasena = this.actRoute.snapshot.params['contrasena'];
  usuarioData: any = {};

  constructor(
    public restApi: ApiRestService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.restApi.getUsuario(this.contrasena).subscribe((data: {}) => {
      this.usuarioData = data;
    })
  }

  updateUsuario() {
    if(window.confirm('confirmar?')){
      this.restApi.updateUsuario(this.contrasena, this.usuarioData).subscribe(data => {
        this.router.navigate(['/lista-usuario'])
      })
    }
  }

}
