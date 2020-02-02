import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/servicios/spotify.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  nuevasCanciones:any[] = []; 
  accessToken: string; 


  constructor(private _spotify: SpotifyService, private token : TokenService ) {
    // Inicio del constructor... 
  token.ObtenerToken()
      .subscribe((data => {
        this.accessToken = data["access_token"];
      }));
      
       _spotify.ObtenerNuevosLanzamientos("BQAlBCk_zsFFO8x7paeZbOvMArV4xkvIXDHcCCyHfnpP8JhVqoH8OZTsCZWKI1s3i9oh7C0F9G0FdXQaeEc")
    .subscribe( (data:any) => {
      console.log(data); 

      // Se asignan las canciones... 
    this.nuevasCanciones = data; 

    });

   }


}
