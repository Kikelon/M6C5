import { Component, OnInit } from '@angular/core';
import { Disco } from 'src/app/models/disco';
import { DiscosService } from 'src/app/shared/discos.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-vista-disco',
  templateUrl: './vista-disco.component.html',
  styleUrls: ['./vista-disco.component.css']
})
export class VistaDiscoComponent implements OnInit {

  // Atributos

  public disco : Disco[] = [];
  public mostrar : Boolean = false;
  private datos : any;

  // Constructor

  constructor(private apiService: DiscosService, private _snackBar: MatSnackBar) { 

  }

  // Métodos

  public mostrarDisco (id: string){
    if (id != ""){
      this.apiService.obtenerDisco(parseInt(id)).subscribe((data: any) =>
      {
        this.disco = data;
        (this.disco.length>0) ? (this.mostrar = true) : (this.mostrar = false, this.error(id));    
      });

    } 
  }

  private error(id: string) {
      const message = "No hay discos con el id " + id;
      this._snackBar.open(message, 'Cerrar', {duration: 1500});
  }

  ngOnInit(): void {
  }

}
