import { Component, OnInit } from '@angular/core';
import { Disco } from 'src/app/models/disco';
import { DiscosService } from 'src/app/shared/discos.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-formulario-disco',
  templateUrl: './formulario-disco.component.html',
  styleUrls: ['./formulario-disco.component.css']
})

export class FormularioDiscoComponent implements OnInit {

  // Atributos

  public disco : Disco;
  public discos : Disco[];

  // Constructor

  constructor(private apiService: DiscosService, private _snackBar: MatSnackBar) { }
  
  // Métodos

  public addDisco (titulo: string, artista: string, anyoPublicacion : string){
    const newDisco = new Disco (0, titulo, artista, parseInt(anyoPublicacion));
    this.apiService.añadirDisco(newDisco).subscribe((data: any) =>
    {
      this.discos = data;
    })
    // this.discos = this.apiService.añadirDisco(newDisco);
    const error = false;

    // Informamos del resultado de la operación
    (!error) ? this.error(true, "añadir") : this.error(false, "añadir");

  };

  public delDisco (id: string){
    this.apiService.borrarDisco(parseInt(id)).subscribe((data: any) =>
    {
      this.discos = data;
    })
    // this.discos = this.apiService.borrarDisco(parseInt(id));
    const error = false;

    // Informamos del resultado de la operación
    (!error) ? this.error(true, "borrar") : this.error(false, "borrar");
  };

  public modDisco (id: string, titulo: string, artista: string, anyoPublicacion : string){
    const newDisco = new Disco (parseInt(id), titulo, artista, parseInt(anyoPublicacion));
    this.apiService.actualizarDisco(newDisco).subscribe((data: any) =>
    {
      this.discos = data;
    })
    // this.discos = this.apiService.actualizarDisco(newDisco);
    const error = false;

    // Informamos del resultado de la operación
    (!error) ? this.error(true, "modificar") : this.error(false, "modificar");

  };

  private error(message: boolean, operacion : string) {
    if (message){
      this._snackBar.open('Operación ' + operacion + ' realizada con éxito', 'Cerrar', {duration: 1500});  
    } else {
      this._snackBar.open('No se pudo realizar la operación de ' + operacion, 'Cerrar', {duration: 1500});
    }    
  };

  ngOnInit(): void {
  }

}
