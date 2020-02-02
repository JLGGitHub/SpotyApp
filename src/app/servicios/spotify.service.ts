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

   EjecutarQuery(query:string, accesToken:string){
      const url = `https://api.spotify.com/v1/${query}`; 
      const token:string = accesToken;
      //Header
      this.header  = new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : 'Bearer ' + token
      });

      return this._http.get(url, {headers: this.header})
   }

   /// Obtener los nuevos lanzamientos de spotify
   ObtenerNuevosLanzamientos(accesToken:string){
      return this.EjecutarQuery("browse/new-releases", accesToken)
                        .pipe(map(data => {
                            return data['albums'].items
                        }));
   }

   ObtenerArtistas(termino:string,accesToken:string){
      return this.EjecutarQuery(`search?q=${termino}&type=artist`, accesToken)
                    .pipe(map(data => {
                      return data['artists'].items
                  }));
   }

   ObtenerArtista(termino:string,accesToken:string){
    return this.EjecutarQuery(`artists/${termino}`, accesToken );
   }
    ObtenerCancionesTop(termino:string,accesToken:string){
      return this.EjecutarQuery(`artists/${termino}/top-tracks?country=us`,accesToken)
                    .pipe(map(data => {
                      return data['tracks']
                  }));
    }
}
