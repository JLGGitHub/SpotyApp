import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/servicios/spotify.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  nuevasCanciones:any[] = []; 


  constructor(private _spotify: SpotifyService ) {
    // Inicio del constructor... 
    _spotify.ObtenerNuevosLanzamientos()
    .subscribe( (data:any) => {
      console.log(data); 

      // Se asignan las canciones... 
    this.nuevasCanciones = data; 

    });

   }


}
