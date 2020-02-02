import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private header: HttpHeaders; 
  constructor( private client : HttpClient) { 
    console.log("servio token listo para utilizar");
  }

  ObtenerToken(){
    this.header = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    return this.client.get("https://localhost:44301/spotifyservice/",{headers: this.header});
  }
}
