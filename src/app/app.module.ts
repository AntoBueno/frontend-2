import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// HttpClient module desde api
import  { HttpClientModule } from '@angular/common/http';
// Routing module for router service
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { UpdateUsuarioComponent } from './update-usuario/update-usuario.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { FormsModule } from '@angular/forms';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule, MatInputModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    CrearUsuarioComponent,
    UpdateUsuarioComponent,
    ListaUsuarioComponent,
    DetalleUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
