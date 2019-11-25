import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/servicios/spotify.service';
import { KeyvaultService } from 'src/app/servicios/keyvault.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {

  artistas:any[] = []
  bandera: boolean

  constructor(private _spotify: SpotifyService) { 
   this.bandera = false;
 // this.llamarKeyVault(); 
  }
  llamarKeyVault(){
    // this._keyvault.ObtenerKeyVault()
    // .subscribe((cadena) => {
    //   console.log(cadena['keyVault']);
    // });  
  }

  buscarArtistas(termino:string){
    if(termino == ""){
      this.bandera = false; 
      return null; 
    }
    this._spotify.ObtenerArtistas(termino).subscribe((data:any)=>{
      console.log(data); 
      this.artistas = data; 
      this.bandera = true; 

    });
  }
}
