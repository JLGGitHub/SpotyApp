import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent  {

@Input() items:any[] = []; 

  constructor(private ruta :Router) { }

  verArtista(item:any){
    var idArtista:string = ""; 
    if(item.type=== "artist"){
      idArtista = item.id; 
    }
    else{
      idArtista=  item.artists[0].id; 
    }

    this.ruta.navigate(['/artista',idArtista]);
  }
}
