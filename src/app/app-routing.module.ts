import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import {ListaUsuarioComponent} from './lista-usuario/lista-usuario.component';
import {UpdateUsuarioComponent} from './update-usuario/update-usuario.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';

const routes: Routes = [
{path: '', pathMatch: 'full', redirectTo:'crear-usuario'},
{path: 'crear-usuario', component: CrearUsuarioComponent},
{path: 'lista-usuario', component: ListaUsuarioComponent},
{path: 'detalle-usuario', component: DetalleUsuarioComponent},
{path: 'update-usuario', component: UpdateUsuarioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
