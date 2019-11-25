import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private header: HttpHeaders; 

  constructor( private _http : HttpClient) {
    console.log("Servicio de spotify listo para utilizar...");
   }

   EjecutarQuery(query:string){
      const url = `https://api.spotify.com/v1/${query}`; 
      const token:string = "BQCXW8Fha2FMJ4MyyXtrO-QhGU9AUqdMvOLG8OQ4cA_0_IXMtGHnPJvQmX7c35vGUOAgMFSc0PKwP1tHKF8";
      //Header
      this.header  = new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : 'Bearer ' + token
      });

      return this._http.get(url, {headers: this.header})
   }

   /// Obtener los nuevos lanzamientos de spotify
   ObtenerNuevosLanzamientos(){
      return this.EjecutarQuery("browse/new-releases")
                        .pipe(map(data => {
                            return data['albums'].items
                        }));
   }

   ObtenerArtistas(termino:string){
      return this.EjecutarQuery(`search?q=${termino}&type=artist`)
                    .pipe(map(data => {
                      return data['artists'].items
                  }));
   }

   ObtenerArtista(termino:string){
    return this.EjecutarQuery(`artists/${termino}`);
   }
    ObtenerCancionesTop(termino:string){
      return this.EjecutarQuery(`artists/${termino}/top-tracks?country=us`)
                    .pipe(map(data => {
                      return data['tracks']
                  }));
    }
}
