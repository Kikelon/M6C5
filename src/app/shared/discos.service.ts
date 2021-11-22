import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Disco } from '../models/disco';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DiscosService {

  //Atributos
  private url = "http://localhost:3000/discos"
  
  public discos : Disco[];

  constructor(private http: HttpClient) {
  }

  // Metodo para recoger un dato de la tabla filtrado por id
  public obtenerDisco (id: number){
    return this.http.get(this.url + "/" + id);
  };
  
  // Metodo para recoger todos los datos de la tabla
  public obtenerDiscos (){
    return this.http.get(this.url);
  };

  // Método para añadir un nuevo dato a la tabla 
  public añadirDisco (newDisco : Disco){
    return this.http.post(this.url, newDisco);
  };

  // Metodo para actualizar un dato de la tabla filtrado por id
  public actualizarDisco (disco : Disco){
    return this.http.put(this.url, disco);
  };

  // Metodo para borrar un dato de la tabla filtrado por id
  public borrarDisco (id: number){
    const httpOptions = {headers: null, body: {id : 5}}
    return this.http.delete(this.url, httpOptions);    
  };
}