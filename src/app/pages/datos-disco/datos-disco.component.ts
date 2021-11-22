import { Component, OnInit } from '@angular/core';
import { Disco } from 'src/app/models/disco';
import { DiscosService } from 'src/app/shared/discos.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-datos-disco',
  templateUrl: './datos-disco.component.html',
  styleUrls: ['./datos-disco.component.css']
})
export class DatosDiscoComponent implements OnInit {

  // Atributos
  
  public discos : Disco[];
  
  // Constructor
  
  constructor(private apiService: DiscosService) { 
    this.apiService.obtenerDiscos().subscribe((data: any) =>
    {
      this.discos = data;
    })    
  }

  // Métodos

  ngOnInit(): void {
  }

}
