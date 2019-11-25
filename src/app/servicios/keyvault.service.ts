import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class KeyvaultService {

  private header: HttpHeaders; 

  constructor(private _http : HttpClient) {
    console.log("Servicio Keyvault listo para usar... "); 
   }

   ObtenerKeyVault(){


    this.header = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });

     return this._http.get("https://localhost:44393/api/values/GetKeyVault",{headers: this.header}); 
   }
}

