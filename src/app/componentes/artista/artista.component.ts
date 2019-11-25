import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/servicios/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {
  artista:any = {}; 
  bandera:boolean ; 
  _cancionesTop: any[]= [];

  constructor(private ruta: ActivatedRoute,
              private _spotify : SpotifyService) { 
    this.bandera = false;             
    this.ruta.params.subscribe(parametros =>{
      this.obtenerArtista(parametros["id"]); 
      this.ObtenerCancionesTop(parametros["id"]);

    });
  }

  obtenerArtista(id:string){
    this.bandera = false;        
    this._spotify.ObtenerArtista(id).subscribe(artista => {
      console.log(artista); 
      this.artista = artista;
      this.bandera = true; 
    });
   
  }

  ObtenerCancionesTop(id: string){
    this._spotify.ObtenerCancionesTop(id).subscribe(cancionesTop => {
      console.log(cancionesTop); 
      this._cancionesTop = cancionesTop;
     
    });
  }


}
