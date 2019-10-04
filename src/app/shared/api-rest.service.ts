import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Usuario} from '../shared/usuario';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {
//Defino la API
apiURL = 'http://localhost:3000';
 
constructor(private http: HttpClient) { }

/*CRUD para consumir api*/

//opciones Http
httpOptions = {
  headers: new HttpHeaders({
    
  })
}  


//API get() -> lista
getUsuarios(): Observable<Usuario> {
  return this.http.get<Usuario>(this.apiURL + '/usuariosses')
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}

//API get() 
getUsuario(contrasena): Observable<Usuario> {
  return this.http.get<Usuario>(this.apiURL + '/usuariosses' + contrasena)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}  

//API post()
createUsuario(usuario: any): Observable<Usuario> {
  return this.http.post<Usuario>(this.apiURL + '/usuariosses', JSON.stringify(usuario), this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
} 
 
//API update()
updateUsuario(usuario, contrasena): Observable<Usuario> {
  return this.http.put<Usuario>(this.apiURL + '/usuariosses' + contrasena, JSON.stringify(Usuario), this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}

//API borrar
deleteUsuario(contrasena){
  return this.http.delete<Usuario>(this.apiURL + '/usuariosses' + contrasena, this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )}

   // handleError
   handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client error
      errorMessage = error.error.message;
    } else {
      // Get servidor error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}
